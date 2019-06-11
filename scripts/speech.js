/*
  Web Speech API
  https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
*/

// a simple implementation designed to allow overwriting of nearly all attributes and function callbacks to implement custom behavior

// create and return new WebSpeechRecognition object
function WebSpeechRecognition() {
  var r = this;
  r.continuous = false;
  r.lang = '';
  r.maxAlternatives = 1;
  r.status_array = status_array_en;
  r.image_array = image_array_mic;
  var recognizing = false;
  var ignore_onend;

  // return false if speech recognition is unavailable (typically occurs when using a browser that does not support it)
  r.supported = function() {
    return !!r.recognition;
  };

  // sets the object which will receive status as text messages
  r.statusText = function(id) {
    r.status_elem = r.getElem(id);
    r.refreshState();
  };

  // sets the object which will receive status as images
  r.statusImage = function(id) {
    r.image_elem = r.getElem(id);
    r.refreshState();
  };

  // sets the object which will receive final text results
  r.finalResults = function(id) {
    r.final_results = r.getElem(id);
  };

  // sets the object which will receive interim text results
  r.interimResults = function(id) {
    r.interim_results = r.getElem(id);
  };

  // return true if recognition is in progress
  r.inProgress = function() {
    return recognizing;
  };

  // start recognition
  r.start = function() {
    recognizing = true;
    ignore_onend = false;
    r.final_transcript = '';
    r.setText(r.final_results, '');
    r.setText(r.interim_results, '');
    r.recognition.continuous = r.continuous;
    r.recognition.interimResults = !!r.interim_results;
    r.recognition.maxAlternatives = r.maxAlternatives;
    if (r.lang != '') {
      r.recognition.lang = r.lang;
    }
    r.recognition.start();
    r.onState('allow');
  };

  // stop recognition
  r.stop = function() {
    recognizing = false;
    r.recognition.stop();
  };

  // toggle recognition between Start and Stop states
  r.toggleStartStop = function() {
    if (reco.inProgress()) {
      reco.stop();
    } else {
      reco.start();
    }
  };

	//
	// All functions below are rarely called directly by the web page
	//

	r.onState = function(key) {
	r.onStatusChange(key);
	r.onImageChange(key);
	r.currentState = key;
	};

	r.refreshState = function() {
	r.onState(r.currentState);
	};

	// Set status field to text corresponding to key.  See status_array for valid values of key.  An invalid value of key will hide the status message.
	r.onStatusChange = function(key) {
	if (!!r.status_elem) {
		var s = r.status_array[key];
		if (s) {
		r.setText(r.status_elem, s);
		r.status_elem.style.visibility = 'visible';
		} else {
		r.status_elem.style.visibility = 'hidden';
		}
	}
	};

	// Set button image corresponding to key. See image_array for valid values of key.  An invalid value of key will show the image in its 'disable' state.
	r.onImageChange = function(key) {
	if (!!r.image_elem) {
		var f = r.image_array[key];
		if (!f) {
		f = r.image_array['disable'];
		}
		r.image_elem.src = f;
	}
	};

	r.setText = function(elem, text) {
	if (elem) {
		if (elem.nodeName == 'INPUT') {
		elem.value = text;
		} else {
		elem.innerHTML = r.linebreak(text);
		}
	}
	};

	// id is a DOM element or a string containing id or null.
	// Returns DOM element or null.
	r.getElem = function(id) {
	if (typeof(id) == 'string') {
		return document.getElementById(id);
	}
	return id;
	};

	var two_line = /\n\n/g;
	var one_line = /\n/g;
	r.linebreak = function(s) {
	return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
	};

	var first_char = /\S/;
	r.capitalize = function(s) {
	return s.replace(first_char, function(m) { return m.toUpperCase(); });
	};

	if (!('webkitSpeechRecognition' in window)) {
	r.onState('upgrade');
	} else {
	r.recognition = new webkitSpeechRecognition();
	r.final_transcript = '';
	r.interim_transcript = '';
	r.onState('ready');
	r.onEnd = null;

	r.recognition.onstart = function() {
		recognizing = true;
		r.onState('active');
	};

	r.recognition.onerror = function(event) {
		if (event.error == 'no-speech' ||
			event.error == 'audio-capture' ||
			event.error == 'not-allowed') {
		r.onState(event.error);
		ignore_onend = true;
		}
	};

	r.recognition.onend = function() {
		recognizing = false;
		if (ignore_onend) {
		return;
		}
		if (r.final_transcript == '') {
		r.onState('ready');
		return;
		}
		r.onState('complete');
		if (!!r.onEnd) {
		r.onEnd();
		}
	};

    r.recognition.onresult = function(event) {
      r.interim_transcript = '';
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          r.final_transcript += event.results[i][0].transcript;
        } else {
          r.interim_transcript += event.results[i][0].transcript;
        }
      }
      r.final_transcript = r.capitalize(r.final_transcript);
      r.setText(r.final_results, r.final_transcript);
      r.setText(r.interim_results, r.interim_transcript);
      if (!!r.onResult) {
        r.onResult();
      }
    };
  }
}

// informational text that is displayed for each status condition
// {key : display_text, key : display_text, ...}
var status_array_en = {
  'ready' : 'Click on the microphone and begin speaking',
  'active' : 'Speak now',
  'no-speech' : 'No speech was detected. You may need to adjust your microphone settings.',
  'audio-capture' : 'No microphone was found. Ensure that a microphone is installed and microphone settings are configured correctly.',
  'allow' : 'Waiting permission...',
  'not-allowed' : 'Permission to use microphone was denied. Click on the "media icon" in browser address bar to change permission.',
  'upgrade' : 'Speech recognition API is not supported by this browser. Upgrade to ' + '<a href="//chrome.com">Chrome</a> or <a href="//firefox.com">Firefox</a>.'
};

// button images for various status conditions
var image_array_mic = {
  'ready' : 'mic.gif',
  'complete' : 'mic.gif',
  'active' : 'mic-animate.gif',
  'no-speech' : 'mic.gif',
  'disable' : 'mic-slash.gif'
};

// final actions
var reco = new WebSpeechRecognition();
    reco.statusText('status');
    reco.statusImage('status_img');
    reco.interimResults('voice-transcript-text');
    reco.finalResults('search-input');
    reco.statusText('voice-transcript-text');

    reco.onEnd = function() {
      if (reco.final_transcript != '') {
        document.getElementById('voice-transcript').style.display = 'none';
        document.getElementById("voice-animation").style.display = 'none';
        document.getElementById("tabs").style.visibility = "visible";

        // fake-click generated a blocked popup
        // document.getElementById("search-form").target = "_blank";
        // search-input.form.submit();
        document.getElementById("search-button").click();

        checkValue();
        inputFocus();
      }
};

function openVoiceTranscript() {
  document.getElementById('voice-transcript').style.display = 'inline-block';
  document.getElementById("voice-animation").style.display = 'inline-block';
  document.getElementById("tabs").style.visibility = "hidden";
}
function closeVoiceTranscript() {
  document.getElementById('voice-transcript').style.display = 'none';
  document.getElementById("voice-animation").style.display = 'none';
  document.getElementById("tabs").style.visibility = "visible";
}

// 3. configure error messages

// 1. solve browser permissions

// navigator.getMedia = ( navigator.getUserMedia ||
//                        navigator.webkitGetUserMedia ||
//                        navigator.mozGetUserMedia ||
//                        navigator.msGetUserMedia);

// navigator.getMedia (

//    // permissoes
//    {
//       audio: true
//    },

//    // callback sucess
//    function(localMediaStream) {
//        expandMenu();
//    },

//    // callback error
//    function(err) {
//     console.log("O seguinte erro ocorreu: " + err);
//    }

// );