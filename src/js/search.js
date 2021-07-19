const
	root = document.documentElement, // html
	body = document.body; // body

// core elements
const
	searchForm = document.getElementById('search-form'), // change form "action"
	searchInput = document.getElementById('search-input'), // change input "name" & "value"
	helper = document.getElementById('helper'), // additional search params (change attributes "name" & "value" of helper input)
	searchOptions = document.getElementById('options'), // search childs 
	resetButton = document.getElementById('reset-button'),
	NavBtns = document.querySelectorAll('nav ul li button');

// console log colors
const
	logCache = 'background:aqua;color:#000;',
	logAction = 'background:lightgreen;color:#000;',
	logBehavior = 'background:yellow;color:#000;';

/*
	Functions
	- depends 'search-params.js'
*/

// open & close tabs
function openTab(tabName) {

	var i;

    var div = document.getElementsByClassName('tab');
	for (i=0; i < div.length; i++) {
		div[i].style.display = 'none';
	}
		
    var button = document.getElementsByClassName('open-tab');
	for (i=0; i < button.length; i++) {
		button[i].className = button[i].className.replace(' tab-active', '');
	}
		
    document.getElementById(tabName).style.display = 'inline-block';
	event += ' tab-active';
}

// set style
function setStyle(name, color) {

	name = name.toLowerCase();

	if ( name.indexOf('\.') ) {
		// remove points "." from string
		name = name.replace(/\./g, "");
	}
	if ( name.indexOf(' ') ) {
		// if string also have white spaces set "-" to image path
		name = name.replace(/ /g,'-');
	}

	// set SVG logo
	document.getElementById("search-img").style.backgroundImage = "url('images/logos/" + name + ".svg')";

	// set UI color
	root.style.setProperty('--active-color', color);

}

// set form parameters
function setForm(action, query, helpers) {

	// check if need to remove parameters from output URL
	if ( query == false ) {

		// clear query & helpers
		searchInput.name = "";
		helper.name = "";
		helper.value = "";

		// redefine form action for clean URL (issue: remove '?' from output URL)
		function removeParams() {
			searchForm.action = action + encodeURIComponent(searchInput.value);
		}
		// call function
		searchForm.onsubmit = removeParams;

	} else {
		// set action
		searchForm.action = action;
		// set query
		searchInput.name = query;

		// if have helpers parameters, set them
		if ( helpers != "" ) {	
			helper.name = helpers[0];
			helper.value = helpers[1];
		} else {
			// clear helpers
			helper.name = "";
			helper.value = "";
		}

		// fallback for clean URL
		searchForm.onsubmit = true;
	}

	inputFocus();
}

// reset form
function resetForm() {

	// reset form values
	searchForm.reset();
	
	// remove reset button
	resetButton.style.display = "none";
	
	inputFocus();
}
// show reset button only when user type on search input
function checkValue() {

	if ( searchInput.value !== "" ) {
		resetButton.style.display = "inline-block";
	} else {
		resetButton.style.display = "none";
	}
}
// focus
function inputFocus() {
	searchInput.focus(); 
	console.log("%cfocus", logBehavior);
}

// generate Tab buttons (search providers) and put into corresponding category Tab
function generateTabButtons(category) {

	var btn = "";

	// iterate to construct buttons
	for ( var i in searchParams[category] ) {

		// get name
		var name = searchParams[category][i].name;

		// set element ID
		var n = name.toLowerCase();

		// replace white spaces " " with "_"
		if ( n.indexOf(' ') ) {
			n = n.replace(/ /g,'_');
		}
		// replace "." or "+" with "__"
		if ( n.indexOf(".") ) {
			n = n.replace(/\./g, "__");
		}
		// replace "+" with "___"
		if ( n.indexOf("+") ) {
			n = n.replace(/\+/g, "___");
		}

		btn += "<button name='"+ category +"' id='"+ n +"'>"+ name +"</button>";
	}

	// get category tab name
	var tabName = String(category+"-tab");
	// append each element
	document.getElementById(tabName).innerHTML = btn;

}
// generate Options for select input (search childs)
function generateOptions(name, value) {

	searchOptions.insertAdjacentHTML('beforeend', '<option value="'+value+'">'+name+'</option>');
}

// change Layout
function changeLayout() {

	var button = document.getElementById("layout-button");

	button.innerHTML = '';

	if ( body.classList.contains('theme-1') ) {

		body.classList.remove('theme-1');
		body.classList.add('theme-2');
		button.innerHTML = '<i data-feather="grid"></i>';

		window.localStorage.setItem('layout', 2);
	} else {

		body.classList.remove('theme-2');
		body.classList.add('theme-1');
		button.innerHTML = '<i data-feather="layout"></i>';

		window.localStorage.setItem('layout', 1);
	}

	inputFocus();
	feather.replace();
}
// change Theme
function changeTheme() {

	var button = document.getElementById("theme-button");
	button.innerHTML = '';

	var dark = getComputedStyle(root).getPropertyValue('--translucent-dark-color');

	// if don't have dark theme
	if ( body.classList.contains('theme-light') ) {

		body.classList.remove('theme-light');
		body.classList.add('theme-dark');
		root.style.setProperty('--translucent-color', dark);
		root.style.setProperty('--text-color', 'var(--active-color)');
		button.innerHTML = '<i data-feather="sun"></i>';

		window.localStorage.setItem('theme', 'dark');

	} else {

		body.classList.remove('theme-dark');
		body.classList.add('theme-light');
		root.style.setProperty('--translucent-color', 'rgba(255, 255, 255, .2)');
		root.style.setProperty('--text-color', '#000');
		button.innerHTML = '<i data-feather="moon"></i>';

		window.localStorage.setItem('theme', 'light');
	}

	inputFocus();
	feather.replace();
}

// get browser 'User Agent' to invoke Share popup
function getUserAgent() {
	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
	// Windows
	if (/windows phone/i.test(userAgent)) {
		return "Windows Phone";
	}
	// Android
	if (/android/i.test(userAgent)) {
		return "Android";
	}
	// iOS - https://stackoverflow.com/q/9038625/9982591
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "iOS";
	}
	return "other";
}
// copy text to clipboard
function copyToClipboard(str) {
	const el = document.createElement('textarea');
	el.value = str;
	body.appendChild(el);
	el.select();
	document.execCommand('copy');
	body.removeChild(el);
	inputFocus();
};


/*
	Events
	- attaching events into HTML elements
*/

// set Navigation buttons action (search categories) 
NavBtns.forEach(function(node) {

	// generate Tab buttons
	generateTabButtons(node.name);

	node.addEventListener("click", function() {

		// toggle active style
		NavBtns.forEach(i => i.classList.remove('nav-active') );
		this.classList.add('nav-active');
		
		// generate 'id' and 'index' to find Tab to open
		var id = this.getAttribute("name").toLowerCase(),
			index = Array.from(NavBtns).indexOf(this);
	
		// toggle active Tab
		document.querySelectorAll('#tabs .tab').forEach(i => i.classList.remove('tab-active') );
		document.querySelector('#tabs ' + '#'+id+'-tab').classList.add('tab-active')

		// show Tab
		openTab(id + '-tab');
	
		// Cache - set cached Search
		if ( window.localStorage.getItem('activeNav') == index ) {

			if ( window.localStorage.getItem('activeSearch') ) {
				document.querySelector('#' + window.localStorage.getItem('activeSearch')).click();
				console.log('%cCache - ' + window.localStorage.getItem('activeSearch'), logCache);
			}
		} else { // click on first Search item
			document.querySelector(".tab-active button:first-child").click();
		}
	
		// call related API (Trends Widget)
		switch(id) {
			case 'web':
				getWeb();
				break;
			case 'social':
				getSocial();
				break;
			case 'video':
				getVideo();
				break;
			case 'image':
				getImage();
				break;
			case 'audio':
				getAudio();
				break;
			case 'shopping':
				getShopping();
				break;
			case 'local':
				// check if Geolocation is active
				if ( hasGeolocation == 0 ) {
					document.querySelector('#trends-title').innerHTML = '';
					document.querySelector('#trends-block').innerHTML = '<p id="warning-local">Enable localization to view trends nearby you<p> <button class="button ask-geolocation" onclick="getGeolocation()"><i data-feather="navigation"></i>Allow localization</button>';
				} else {
					getLocal();
				}
				break;
			case 'news':
				getNews();
				break;
			case 'academic':
				getAcademic();
				break;
			case 'code':
				getCode();
				break;
			default:
				// No API related to this category. Show default
				getWeb();
		}
	
		// Cache - store Nav index
		window.localStorage.setItem('activeNav', index);
	});

});

// set Tabs buttons action (search providers)
document.querySelectorAll('.tab button').forEach(function(node) {

	node.addEventListener("click", function() {

		// toggle 'active' button style
		document.querySelectorAll('.tab button').forEach(i => i.classList.remove('active') );
		this.classList.add('active');

		// get button attributes 'id' (search provider) and 'name' (search category) 
		var id = this.getAttribute("id"),
			category = this.getAttribute("name");

		// sanitize 'id' to match back with 'name' value in 'searchParams' file
		var idName = id,
			underscores = (idName.match(/_/g)||[]).length;

			switch (underscores) { // count "_" occurrences and put back:
				case 1:
					idName = idName.replace(/_/g,' '); // white spaces " "
					break;
				case 2:
					idName = idName.replace(/__/g, "."); // points "."
					break;
				case 3:
					idName = idName.replace(/___/g, "+"); // plus signal "+"
					break;
			}

		// finally, iterate 'searchParams' file
		var i, j, name, action, query, color, helpers = "";

		for (i in searchParams[category]) {
			
			// if 'idName' match with 'name', set search parameters of current search provider
			if (idName == searchParams[category][i].name.toLowerCase()) {

				name = searchParams[category][i].name;
				action = searchParams[category][i].action;
				query = searchParams[category][i].query;
				color = searchParams[category][i].color;
				console.log('Search -', category, id);

				// if have additional search params (set on #helper input)
				if (searchParams[category][i].params) {

					helpers = [searchParams[category][i].params[0], searchParams[category][i].params[1]];
					console.log('Search additional parameters -', helpers);
				}

				// if have childs search params (set on #options select)
				function removeOptions() {
					searchOptions.querySelectorAll('option').forEach(i => i.remove() );
				}
				if (searchParams[category][i].childs) {

					searchOptions.style.display='block';
					removeOptions();

					// set first option
					generateOptions("All", category +"_"+ i +"_"+ name);

					// iterate
					for (j in searchParams[category][i].childs) {

						var option = searchParams[category][i].childs[j].name;
						
						generateOptions(option, category +"_"+ i +"_"+ option);
					}
				} else {
					// clear
					searchOptions.style.display='none';
					removeOptions();
				}

			}
		}

		setStyle(name, color);
		setForm(action, query, helpers);
		getPrivacyRank(action);

		// Cache - store current search provider ID
		window.localStorage.setItem('activeSearch', id);
	});

});

// options (search childs)
searchOptions.addEventListener('change',function(){

	// iterate over option value to identify related child
	var a = this.value.split("_"),
		category = a[0],
		item = a[1],
		option = a[2],
		action, query, helpers = "";

	// set current search provider default params
	action = searchParams[category][item].action;
	query = searchParams[category][item].query;

	// iterate childs to set their specific params
	for ( var i in searchParams[category][item].childs ) {

		// if exists
		if ( option == searchParams[category][item].childs[i].name ) {

			console.log( searchParams[category][item].childs[i].name );

			// have additional params: set as "helpers"
			if ( searchParams[category][item].childs[i].params ) {
				
				helpers = [searchParams[category][item].childs[i].params[0], searchParams[category][item].childs[i].params[1]];
			}
			// have custom action: change default
			if ( searchParams[category][item].childs[i].action ) {

				action = searchParams[category][item].childs[i].action;
			}
			// have custom query: change default
			if ( searchParams[category][item].childs[i].query ) {

				query = searchParams[category][item].childs[i].query;
			}

		}

	}

	setForm(action, query, helpers);

});

// theme button
document.getElementById("theme-button").addEventListener("click", changeTheme);

// layout button
document.getElementById("layout-button").addEventListener("click", changeLayout);

// more button
document.getElementById("more-button").addEventListener("click", function() {

	document.getElementById("divMore").classList.toggle("divmore-active");
});

// modals
document.addEventListener('click', function (e) {

    e = e || window.event;
	var target = e.target || e.srcElement;

	// open modal
    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {

		function openModal() {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
		}

		// if share modal
		if ( target.getAttribute('data-target') == 'modal-share' ) {

			if ( getUserAgent() == 'other' ) {
				openModal();
			} else {

				// uses Web Share API to open native share on mobile devices
				navigator.share({
					url: document.URL,
					title: document.title,
					text: document.querySelector("meta[name='description']").getAttribute('content')
				});
		
				document.getElementById("more-button").click();
			}
		} else {
			openModal();
		}

    }

    // close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {

        var modal = document.querySelector('[class="modal open"]');
		modal.classList.remove('open');

		var more = document.getElementById("divMore");
		if ( more.classList.contains('divmore-active') ) {
			document.getElementById("more-button").click();
		}

		e.preventDefault();
    }
}, false);

// adjust layout for mobile on window size limit 
window.addEventListener("resize", function() {

	// get width of the window excluding scrollbar
	var w = root.clientWidth;

	// if layout-2 is enabled, on the window size limit, force layout-1 for mobile
	if ( window.localStorage.getItem('layout') == 2 ) {

		if ( w <= 1199 ) {
			document.getElementById("layout-button").click();
		}
	}
});

/*
	Cache
	- Web Storage
*/

// localStorage (retrieve user preferences / UI states)
document.addEventListener('DOMContentLoaded', function() {

	const 	cacheNav = window.localStorage.getItem('activeNav'),
			cacheLayout = window.localStorage.getItem('layout'),
			cacheGeolocation = window.localStorage.getItem('geolocation');

	// set cached Nav button (category)
	if ( cacheNav ) {
		document.querySelector('nav ul li:nth-child('+ (parseInt(cacheNav) + 1) +') button').click();
		console.log('%cCache - Nav '+ cacheNav +'', logCache);
	} else {
		document.getElementById('default-tab').click();
	}

	// set cached Layout
	if ( cacheLayout == 2 ) {
		changeLayout();
		window.scrollTo(0, 0);
		console.log('%cCache - Layout 2', logCache);
	} else {
		document.getElementById("layout-button").innerHTML = '<i data-feather="layout"></i>';
	}

	// set cached Theme

	// Geolocation permission by user

	// set datetime
	getDatetime();
	
}, false);

// sessionStorage (store APIs data)

/*
	Service Worker
	- PWA
*/
// check if service workers are supported
if ('serviceWorker' in navigator) {

	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/service-worker.js');
	});
  }