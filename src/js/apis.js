/*
	External APIs
	- global parameters from User for APIs calls (depends 'Findto API Service' back-end)
*/
const endpoint = 'https://findto.herokuapp.com';

var	userLang = navigator.language || navigator.userLanguage,
	country = userLang.split("-").pop(),
	lat = 0,
	lon = 0,
	hasGeolocation = 0;

/*
	Weather
*/
var dataTemp = {
	"default" : [0, ""],
	"kelvin" : 0,
	"celsius" : 0,
	"fahrenheit" : 0
};

// get datetime from device
function getDatetime() {

	const	divDate = document.getElementById('date'),
			divTime = document.getElementById('time'),
			monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'],
			dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

	// extract current date
	var date = new Date();
	date.setDate(date.getDate());

	divDate.innerHTML = (dayNames[date.getDay()] + ', ' + date.getDate() + ' ' + monthNames[date.getMonth()]); // date.getFullYear()

	setInterval( function() {
		// extract hours, minutes and seconds
		var	hours = new Date().getHours(),
			minutes = new Date().getMinutes();
			// seconds = new Date().getSeconds(); + ':' + (seconds < 10 ? "0" : "") + seconds

		divTime.innerHTML = ((hours < 10 ? "0" : "") + hours + ':' + (minutes < 10 ? "0" : "") + minutes);
		
	}, 1000);
}
// get weather by Geolocation
function getWeather(lat, lon) {

	const 	wWarning = document.getElementById("weather-warning"),
			wInfo = document.getElementById("weather-info"),
			wTemp = document.getElementById("weather-temp"),
			wCity = document.getElementById("weather-city");

		// call API
		fetch(endpoint + "/weather?lat="+lat+"&lon="+lon+"")
		.then(function(response) {
	
			response.json().then(function(data) {
	
			// remove warning
			wWarning.innerHTML = "";

			// set weather data in HTML elements
			setInfo(data.weather[0].id, data.weather[0].description, data.sys.sunrise, data.sys.sunset);
			setTemp(data.main.temp);
			wCity.innerHTML = "<p id='weather-city'>" + data.name + ", " + data.sys.country + "</p>";
	
			console.log("%cAPI called: Weather", logAction);
			});
		})
		.catch(function(error){
			console.error("API error: Weather", error);
		});


	// set weather icon and description
	function setInfo(id, description, sunrise, sunset) {

		var timestamp = Math.floor(Date.now() / 1000);

		switch(String(id)[0]) {
	
		case "2": // Thunderstorm
			info = '<i data-feather="cloud-lightning"></i>' + description;
			break;
		case "3": // Drizzle
			info = '<i data-feather="cloud-drizzle"></i>' + description;
			break;
		case "5": // Rain
			info = '<i data-feather="cloud-rain"></i>' + description;
			break;
		case "6": // Snow
			info = '<i data-feather="cloud-snow"></i>' + description;
			break;
		case "7": // Atmosphere
			info = '<i data-feather="alert-octagon"></i>' + description;
			break;
		case "8": // Clear sky
			if (id == 800) {
				if (sunrise >= timestamp && sunset <= timestamp) { // is morning
					info = '<i data-feather="sun"></i>' + description;
				} else { // is night
					info = '<i data-feather="moon"></i>' + description;
				}
			}
			else { // Cloud
				info = '<i data-feather="cloud"></i>' + description;
			}
			break;
		default:
			info = description;
		}
	
		wInfo.innerHTML = "<h2>"+ info +"</h2>";
		feather.replace();
	}

	// set default temperature value
	function setTemp(temp) {

		dataTemp.kelvin = temp;
		dataTemp.celsius = (temp -273.15);
		dataTemp.fahrenheit = (((temp -273.15) *1.8) +32);

		if (dataTemp.kelvin != parseInt(dataTemp.kelvin)) {
			dataTemp.kelvin = dataTemp.kelvin.toFixed();
		}
		if (dataTemp.celsius != parseInt(dataTemp.celsius)) {
			dataTemp.celsius = dataTemp.celsius.toFixed();
		}
		if (dataTemp.fahrenheit != parseInt(dataTemp.fahrenheit)) {
			dataTemp.fahrenheit = dataTemp.fahrenheit.toFixed();
		}

		dataTemp.default[0] = dataTemp.celsius;
		dataTemp.default[1] = "C";

		wTemp.innerHTML = "<a href='javascript:void(0);' id='weather-t' onclick='convertWeatherTemp()'>" + dataTemp.default[0] + "°C" + "</a>";
	}
}
// convert temperature
function convertWeatherTemp() {

	const temp = document.getElementById("weather-t");

	switch ( dataTemp.default[1] ) {
		case "C": // to fahrenheit
			dataTemp.default[0] = dataTemp.fahrenheit
			dataTemp.default[1] = "F"
			temp.innerHTML = dataTemp.default[0] + "°F"
		break;
		case "F": // to kelvin
			dataTemp.default[0] = dataTemp.kelvin
			dataTemp.default[1] = "K"
			temp.innerHTML = dataTemp.default[0] + "°K"
		break;
		case "K": // back to celsius
			dataTemp.default[0] = dataTemp.celsius
			dataTemp.default[1] = "C"
			temp.innerHTML = dataTemp.default[0] + "°C"
		break;
	}
}
// ask user Geolocation permission
function getGeolocation() {

		// check if Geolocation API is supported
		if ( "geolocation" in navigator ) {

			// get user location
			navigator.geolocation.getCurrentPosition(function handlePosition(position) {
	
				lat = position.coords.latitude;
				lon = position.coords.longitude;

				// call weather
				getWeather(lat, lon);

				hasGeolocation = 1;

				// call local trends
				if ( window.localStorage.getItem('activeNav') == 6) {
					getLocal();
				}
			});

		} else {
			alert("Sorry, Geolocation is not supported by this device.");
		}
}

/*
	Privacy Rank
*/
var dataPrivacy = null;

// gauge graph
const gaugeOpts = {
	lines: 2, // the number of lines to draw
	angle: 0, // the span of the gauge arc
	lineWidth: 0.35, // the line thickness
	pointer: {
		length: 0.5, // the radius of the inner circle
		strokeWidth: 0.035, // the thickness
		color: '#000' // fill color
	},
	limitMax: true, // if true, the pointer will not go past the end of the gauge
	colorStart: 'rgba(255,255,255,.2)',
	colorStop: 'rgba(255,255,255,.2)',
	strokeColor: 'rgba(0,0,0,.1)',
	generateGradient: true,
	highDpiSupport: true
};
const gaugeCanvas = document.getElementById('gauge-canvas');
var gauge = new Gauge(gaugeCanvas).setOptions(gaugeOpts);
	gauge.maxValue = 850;
	gauge.animationSpeed = 10;

// get privacy score of current search provider
function getPrivacyRank(url) {

	// get TLD domain from URL
	function extractHostname(url, tld) {
		let hostname;

		// find & remove protocol (http, ftp, etc.) and get hostname
		if ( url.indexOf("://") > -1 ) {
			hostname = url.split('/')[2];
		} else {
			hostname = url.split('/')[0];
		}

		// find & remove port number
		hostname = hostname.split(':')[0];

		// find & remove "?"
		hostname = hostname.split('?')[0];

		if ( tld ) {
			let hostnames = hostname.split('.');
			hostname = hostnames[hostnames.length-2] + '.' + hostnames[hostnames.length-1];
		}

		return hostname;
	}
	var url = extractHostname(url, true);

	// call Privacy Monitor API
	fetch("https://api.privacymonitor.com/score/?q="+url+"")
	.then(function(response) {

		response.json().then(function(data) {

			dataPrivacy = data;

			var score = data.score,
				// name = data.name,
				rating = "",
				icon = "eye";

		if (score != null) {

			if (score >= 300 && score <= 579) {
				rating = "Very poor privacy";
				icon = "alert-triangle";
			}
			if (score >= 580 && score <= 669) {
				rating = "Fair privacy";
			}
			if (score >= 670 && score <= 739) {
				rating = "Good privacy";
			}
			if (score >= 740 && score <= 799) {
				rating = "Very good privacy";
				icon = "thumbs-up";
			}
			if (score >= 800 && score <= 850) {
				rating = "Exceptional privacy";
				icon = "shield";
			}
			// score = Math.floor(score / 1);
		} else {
			rating = "No rated yet";
			icon = "info";
			score = 0;
		}

		const 	privacyInfo = document.getElementById("privacy-info"),
				privacyRank = document.getElementById("privacy-rank");
		
		privacyInfo.innerHTML = "";
		privacyInfo.innerHTML = "<i data-feather='"+ icon +"'></i><h2>"+ rating +"</h2>";
		privacyRank.setAttribute("href", "https://www.privacymonitor.com/rating/?q=" + url);
		feather.replace();
		gauge.set(score);
		gauge.setTextField(document.getElementById("gauge-textfield"));

		console.log("%cAPI call - Privacy", logAction);

		});
	})
	.catch(function(error){
		console.error("API error - Privacy", error);
	});

}

/*
	Trends Data
	- trending data (search temrs, contents, places and events) from external APIs
*/

// API callers
function getWeb() {

	apiWrapper(
		"/web?country="+country+"", 
		"Web",
		['Trending Searches', 'trending-up']
	);
}
function getSocial() {

	apiWrapper(
		"/social?country="+country+"", 
		"Social",
		['Trending Topics', 'hash']
	);
}
function getVideo() {

	apiWrapper(
		"/video?country="+country+"&userLang="+userLang+"", 
		"Video",
		['Most Watched', 'film']
	);

}
function getImage() {

	apiWrapper(
		"/image?&userLang="+userLang+"",
		"Image",
		["Trending Images", "camera"]
	);
}
function getAudio() {

	apiWrapper(
		"/audio?type=artists&country="+country+"", 
		"Audio",
		['Most Listened','headphones']
	);
}
function getShopping() {

	apiWrapper(
		"/shopping",
		"Shopping",
		["Trending Products", "shopping-bag"]
	);
}
function getLocal() {

	apiWrapper(
		"/local?lat="+lat+"&lon="+lon+"",
		"Local",
		["Nearby You", "map"]
	);

}
function getNews() {

	apiWrapper(
		"/news?country="+country+"",
		"News",
		["Top Headlines", "bookmark"]
	);
}
function getAcademic() {

	apiWrapper(
		"/academic",
		"Academic",
		["Top Citations", "edit-2"]
	);
}
function getCode() {

	apiWrapper(
		"/code",
		"Code",
		['Coding Trends', 'terminal']
	);
}

// store data from API calls
var	dataAPI = [];

// check if APIs data is stored
function checkData(apiTitle) {

	for (var i in dataAPI) {

		if (apiTitle == dataAPI[i].category) {

			return i; // position of data stored in array
		}
	}
	return null; // not found
}

// manage Trends tabs
function openTrendsTab(event, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("trends-tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("trends-tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

// API wrapper (a fetch model)
function apiWrapper(apiURL, apiTitle, apiInfo) {

	const 	block = document.getElementById('trends-block'),
			title = document.getElementById('trends-title');	

	// 3. constructor - display data on HTML
	function displayData(data) {

		// 0. clear block
		block.innerHTML = "";

		// 3. add tab
		block.innerHTML = "<div id='trends-tab'></div>";

		const trendsTab = document.getElementById('trends-tab');

		// 3. add tablinks (buttons) & tabcontent (divs)
		for (var i in data) {

			// hide tab if is just one
			if (data.length > 1) {

				trendsTab.innerHTML += '<button class="trends-tablinks" onclick="openTrendsTab(event, '+ '\'' +data[i].title+ '\'' +')">'+ data[i].title +'</button>';
			} else {
				trendsTab.innerHTML += '<button class="trends-tablinks" style="display:none;" onclick="openTrendsTab(event, '+ '\'' +data[i].title+ '\'' +')">'+ data[i].title +'</button>';
			}

			var idList = data[i].title + '-ol';
			
			trendsTab.insertAdjacentHTML("afterend", "<div id='"+data[i].title+"' class='trends-tabcontent'><ol id='"+idList+"'></ol></div>");

			// 3. add items
			for (var j in data[i].data) {

				if (data[i].data[j].url) { // card with url
					document.getElementById(idList).innerHTML += '<li><a href="'+ data[i].data[j].url +'" target="_blank" class="'+data[i].credits[2]+'" title="'+ data[i].data[j].description +'">'+ data[i].data[j].title +'</a></li>';

				} else { // tag
					document.getElementById(idList).innerHTML += '<li><a href="#" class="'+data[i].credits[2]+'" title="'+ data[i].data[j].description +'">'+ data[i].data[j].title +'</a></li>';
				}
			}

			// 3. add credits
			document.getElementById(idList).insertAdjacentHTML("afterend", "<p class='credits'>by <a href='"+data[i].credits[1]+"' target='_blank' rel='noopener'>"+data[i].credits[0]+"</a></p>")
		}

		// 4. click on first tab-button
		document.getElementById("trends-tab").firstElementChild.click();
		
	}

	// event listener - click handler for 'tag' items
	function listenerTags() {

		document.querySelectorAll('.tag').forEach(item => {
			item.addEventListener('click', event => {

				// put value on form input and scroll to it
				searchInput.value = item.innerText;
				checkValue();
				searchInput.focus();

			})
		})
	}

	// 0. loading animation
	block.innerHTML = '<div class="spinner"></div>';

	// 1. update title & icon
	title.innerHTML = "";
	title.innerHTML = ('<h2><i data-feather="'+apiInfo[1]+'"></i>'+apiInfo[0]+'<h2>');
	feather.replace();

	// 2. fetch data
	if ( checkData(apiTitle) == null ) { // if don't stored yet
		
		fetch(endpoint + apiURL).then(function(response) {
			response.json().then(function(data){

				console.log("%cAPI call - "+apiTitle+"", logAction);
				
				// 2. store data in array
				dataAPI.push({
					"category": apiTitle,
					"data": data
				});

				// 3. show fetched data
				displayData(data);
				listenerTags();
			});
		})
		.catch(function(error){

			console.error("API error - " + apiTitle + ' | ' + error);

			// 3. show error
			block.innerHTML = "<h2>Error calling "+apiTitle+" API</h2>";
		});
	} else {

		console.log("%cCache - "+apiTitle+" API data", logCache);

		// 3. show stored data
		displayData( dataAPI[checkData(apiTitle)].data );
		listenerTags();
	}
}