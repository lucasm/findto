/*
	Service Worker
*/

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('service____worker.js').then(function(registration) {
			// registration was successful
			console.log('Service Worker registration successful, with scope: ', registration.scope);
		}).catch(function(err) {
			// registration failed
			console.log('Service Worker registration failed, with error: ', err);
		});
	});
}

/*
	Tabs
*/

// show only one div while hide others
function openTab(evt, tabName) {
	var i, tabcontent, tabbutton;
    tabcontent = document.getElementsByClassName('tab');
    	for (i = 0; i < tabcontent.length; i++) {
    		tabcontent[i].style.display = 'none';
    	}
    tabbutton = document.getElementsByClassName('tab-button');
    	for (i = 0; i < tabbutton.length; i++) {
    		tabbutton[i].className = tabbutton[i].className.replace(' tab-active', '');
    	}
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' tab-active';
}

// click on default tab
document.getElementById('default-tab').click();

/*
	Navigation Menu
*/

// expand and retract menu
$('body').ready(function() {
	$('#menu-button').click(function() {
	// inputFocus();
	  if ($("#menu-nav").hasClass("extended")) {
		$("body").removeClass('extended-body');
		$("#menu-nav").removeClass('extended');
	  }
	  else {
		$("body").addClass('extended-body');
		$("#menu-nav").addClass('extended');   
	  }
	});
  });
  
  // change nav item style when selected
  function selectedButton(element) {  
	  
	var btn = document.querySelectorAll(".nav-btn");
  
	  for (var i = 0; i < btn.length; i ++) {
		  btn.item(i).style.backgroundColor='transparent';
		  btn.item(i).style.opacity='0.5';
		  btn.item(i).style.boxShadow='none';
		  element.style.backgroundColor='rgba(255, 255, 255, 0.15)';
		  element.style.opacity='1';
		  element.style.boxShadow='0 5px 10px rgba(0,0,0,.035)';
	  }
  }

/*
	Engines Tab
*/

// hide or show engines tab
function hideEngines() {
	document.getElementById('tab-engines').style.display = "none";
}
function showEngines() {
	document.getElementById('tab-engines').style.display = "block";
	document.getElementById('default-engine').click();
}

// change engine button style when selected
function selectedEngine(element) {
  var engineButton = document.querySelectorAll(".eng-btn");

	for (var i = 0; i < engineButton.length; i ++) {
		engineButton.item(i).style.backgroundColor='transparent';
		engineButton.item(i).style.opacity='0.5';
    	engineButton.item(i).style.boxShadow='none';
		element.style.backgroundColor='rgba(255,255,255,.15)';
		element.style.opacity='1';
    	element.style.boxShadow='0 5px 10px rgba(0,0,0,.035)';
	}
}

/*
	Search Form
*/

// focus on "input"
function inputFocus() {
	inputSubmit.focus();
}

// event listener to focus on "input"
document.getElementById('menu-nav').addEventListener('click', function() {
  inputFocus();
});
document.getElementById('tabs').addEventListener('click', function() {
  inputFocus();
});

// show reset button only when user type on "input"
function checkValue() {
	if (inputSubmit.value !== '') {
		document.getElementById('reset-button').style.display = "inline-block";
  }
	else {
		document.getElementById('reset-button').style.display = "none";
  }
}

// reset form values, remove reset button, focus on input
function resetForm() {
	searchForm.reset();
	document.getElementById('reset-button').style.display = "none";
	inputFocus();
}

// set value to form action (default variable)
function defaultFormAction() {
	searchForm.action = xUrl;
}

// set value "q" in attribute "name" of "input" element
function q() {
	inputSubmit.name = "q";
	searchForm.onsubmit = true; // important to reset form
}

// set custom value in attribute "name"
function customQuery() {
	inputSubmit.name = xQuery;
	searchForm.onsubmit = true;
}

// clear attributes of helper "input"
function clearHelper() {
	helperInput.name = "";
	helperInput.value = "";
}

// set main background color
function changeColor(){
	mainColor.style.backgroundColor = xColor;
}

// set logo image
function changeImage(){
	logoImage.style.backgroundImage = "url('images/logos/" + xImage + ".svg')";
}


// Template 1: define "q" as query string, clear helpers
function t1() {
	changeColor();
	changeImage();
	q();
	clearHelper();
	defaultFormAction();
}

//	Template 2: define custom query string, clear helpers
function t2() {
	changeColor();
	changeImage();
	customQuery();
	clearHelper();
	defaultFormAction();
}

// Template 3: clear query string and helpers, remove parameters "q="
function t3() {
	
	changeColor();
	changeImage();
	inputSubmit.name = "";
	clearHelper();

	function removeParam() {
		searchForm.action = xUrl + encodeURIComponent(inputSubmit.value);
		// problem: remove '?' from output URL!
	}
	// call function
	searchForm.onsubmit = removeParam;
}


/*
	Warning
*/
var warning = ['DOM is fully loaded and parsed :)', '</> Build in progress']
	document.addEventListener('DOMContentLoaded',
	function(){
		console.log(warning[0]);
	}
);

// console signature
console.log('%cfindto.app', 'background:#000;color:#fff;padding:5px 10px;');



// save state cliked button

$(".tabs").tabs();
var currentTab = $('.ui-state-active a').index();
if(localStorage.getItem('activeTab') != null){
	 $('.tabs > ul > li:nth-child('+ (parseInt(localStorage.getItem('activeTab')) + 1)  +')').find('a').click();
}

 $('.tabs > ul > li > a').click(function(e) {
  var curTab = $('.ui-tabs-active');
  curTabIndex = curTab.index();
  localStorage.setItem('activeTab', curTabIndex);
 });


// $('.tab-button').click(function(){
//     $('.widget-trends').toggle();

//     var isVisible = $('.widget-trends').is(":visible"); 
//     localStorage.setItem('visible', isVisible);
// });

// // stored in localStorage as string, `toggle` needs boolean
// var isVisible = localStorage.getItem('visible') === 'false' ? false : true;
// $('.widget-trends').toggle(isVisible);