/*
  rss2json API
  https://rss2json.com
*/

var simpleRSS = (function() {
  
  // get all the feed containers
  var feedsNodes = document.querySelectorAll('[data-rss-feed]');
  
  // convert to array
  var feeds = [].slice.call(feedsNodes);

  for (var i = 0; i < feeds.length; i++) {

    var container = feedsNodes[i];
    
    // get feed URL
    var url = container.getAttribute('data-rss-feed');

    // get whether to link titles
    var addLink = container.getAttribute('data-rss-link-titles') || 'true';
    
    // get title wrapper element
    // var titleWrapper = container.getAttribute('data-rss-title-wrapper') || 'h2';
  
    // max outputs
    var max = container.getAttribute('data-rss-max') || 14;

    // get data - append as script with callback to avoid CORS
    var script = document.createElement('script');

    script.src = document.location.protocol + '//api.rss2json.com/v1/api.json?api_key=xknfdsmq6fs5h8uqrxqco7ydqdg9f7c0eoefml0t&count=14&callback=simpleRSS.handleJSON&rss_url=' + encodeURIComponent(url);

    document.querySelector('head').appendChild(script);
    
    // remove script
    // script.parentNode.removeChild(script);
  }

  // callback function
  function handleJSON(data) {

    if (data.feed && data.items) {
      var docFrag = document.createDocumentFragment();
      for (var i = 0; i < data.items.length; i++) {
        var e = data.items[i];
        var tempNode = document.createElement('li');

        // href="'+e.link+'"
        var template = '<a href="#" title="'+e.title+'" onclick="putValue(this.title)">'+e.title+'</a>';

        // if (addLink === 'false') {
        //   template = '<h3>' + e.title + '</h3>' + e.content;
        // }

        if (i < max) {
          tempNode.innerHTML = template;
          docFrag.appendChild(tempNode);
        }
      }
      
      container.appendChild(docFrag);

    }
  }

	// return function for use in global scope
	return {
		handleJSON:handleJSON
	}

})();

// get atribute "title" of "a" element and put on "input"
function putValue(term) {
	
  inputSubmit.value = term;
  inputFocus();
  checkValue();
}