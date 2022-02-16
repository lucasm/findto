/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


__webpack_require__(/*! ./search-params.js */ "./src/js/search-params.js");
__webpack_require__(/*! ./search.js */ "./src/js/search.js");
__webpack_require__(/*! ./voice.js */ "./src/js/voice.js");
__webpack_require__(/*! ./widgets.js */ "./src/js/widgets.js");

/***/ }),

/***/ "./src/js/search-params.js":
/*!*********************************!*\
  !*** ./src/js/search-params.js ***!
  \*********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/*
	Search providers parameters
*/
const searchParams = {
	"web": [
		{
			"name": "Google",
			"action": "https://www.google.com/search",
			"query": "q",
			"color": "#649fff",
			"childs": [
			{
				"name": "Images",
				"params": ["tbm","isch"]
			},
			{
				"name": "Videos",
				"params": ["tbm","vid"]
			},
			{
				"name": "News",
				"params": ["tbm","nws"]
			},
			{
				"name": "Maps",
				"action" : "https://google.com/maps/search/"
			},
			{
				"name": "Shopping",
				"params": ["tbm","shop"]
			},
			{
				"name": "Books",
				"params": ["tbm","bks"]
			},
			{
				"name": "Translate",
				"action" : "https://translate.google.com/",
				"query" : "text"
			},
			{
				"name": "Jobs",
				"params": ["ibp","htl;jobs"]
			}
			]
		},
		{
			"name": "Bing",
			"action": "https://www.bing.com/search",
			"query": "q",
			"color": "#2cddf7",
			"childs": [
			{
				"name": "Images",
				"action": "https://www.bing.com/images/search?="
			},
			{
				"name": "Videos",
				"action": "https://www.bing.com/videos/search?="
			},
			{
				"name": "News",
				"action": "https://www.bing.com/news/search?="
			},
			{
				"name": "Maps",
				"action": "https://www.bing.com/maps?q="
			},
			{
				"name": "Events",
				"action": "https://www.bing.com/events/search/?="
			},
			{
				"name": "Translator",
				"action": "https://www.bing.com/translator/",
				"query": "text"
			}
			]
		},
		{
			"name": "DuckDuckGo",
			"action": "https://duckduckgo.com/",
			"query": "q",
			"color": "#ff755f",
			"childs": [
			{
				"name": "Images",
				"params": ["ia","images"]
			},
			{
				"name": "Videos",
				"params": ["ia","videos"]
			},
			{
				"name": "News",
				"params": ["iar","news"]
			},
			{
				"name": "Meanings",
				"params": ["ia","meanings"]
			},
			{
				"name": "Stock",
				"params": ["ia","stock"]
			}
			]
		},
		{
			"name": "Yahoo",
			"action": "https://search.yahoo.com/search",
			"query": "q",
			"color": "#a862ff",
			"childs": [
			{
				"name": "Images",
				"action": "https://images.search.yahoo.com/search/images?p="
			},
			{
				"name": "Videos",
				"action": "https://video.search.yahoo.com/search/video?p="
			},
			{
				"name": "News",
				"action": "https://news.search.yahoo.com/search?p="
			},
			{
				"name": "Local",
				"action": "https://search.yahoo.com/local/?p=",
				"query": "p"
			},
			{
				"name": "Answers",
				"action": "https://answers.search.yahoo.com/search?p="
			},
			{
				"name": "Shopping",
				"action": "https://shopping.search.yahoo.com/search?p="
			},
			{
				"name": "Finance",
				"action": "https://finance.search.yahoo.com/search?p="
			}
			]
		},
		{
			"name": "Startpage",
			"action": "https://www.startpage.com/do/asearch",
			"query": "query",
			"color": "#8690ff",
			"childs": [
				{
					"name": "Images",
					"params": ["cat","pics"]
				},
				{
					"name": "Videos",
					"params": ["cat","video"]
				}
			],
			"params": ["op","tua1"]
		},
		{
			"name": "Qwant",
			"action": "https://www.qwant.com/",
			"query": "q",
			"color": "#ff6470",
			"childs": [
			{
				"name": "Images",
				"params": ["t","images"]
			},
			{
				"name": "Videos",
				"params": ["t","videos"]
			},
			{
				"name": "News",
				"params": ["t","news"]
			},
			{
			"name": "Music",
			"action": "https://www.qwant.com/music/search?q="
			},
			{
				"name": "Social",
				"params": ["t","social"]
			}
			]
		},
		{
			"name": "searx",
			"action": "https://searx.xyz/",
			"query": "q",
			"color": "#4ddfa5",
			"childs": [
				{
					"name": "Images",
					"params": ["categories","images"]
				},
				{
					"name": "Videos",
					"params": ["categories","videos"]
				},
				{
					"name": "News",
					"params": ["categories","news"]
				},
				{
					"name": "Files",
					"params": ["categories","files"]
				},
				{
					"name": "IT",
					"params": ["categories","it"]
				},
				{
					"name": "Maps",
					"params": ["categories","map"]
				},
				{
					"name": "Music",
					"params": ["categories","music"]
				},
				{
					"name": "Science",
					"params": ["categories","science"]
				}
			]
		},
		{
			"name": "Yandex",
			"action": "https://www.yandex.com/search/",
			"query": "text",
			"color": "#ffdf5d",
			"childs": [
				{
					"name": "Images",
					"action": "https://yandex.com/images/search"
				},
				{
					"name": "Videos",
					"action": "https://yandex.com/video/search"
				},
				{
					"name": "News",
					"action": "https://news.yandex.ru/yandsearch",
					"params": ["rpt","nnews2"]
				},
				{
					"name": "Maps",
					"action": "https://maps.yandex.com"
				},
				{
					"name": "Translate",
					"action": "https://translate.yandex.com/"
				},
				{
					"name": "Music",
					"action": "https://music.yandex.ru/search"
				}
			]
		},
		{
			"name": "Baidu",
			"action": "https://www.baidu.com/s",
			"query": "wd",
			"color": "#3385ff",
			"childs": [
				{
					"name": "Images",
					"action": "http://image.baidu.com/search/index",
					"query": "word",
					"params": ["tn","baiduimage"]
				},
				{
					"name": "Videos",
					"action": "http://v.baidu.com/v",
					"query": "word"
				},
				{
					"name": "News",
					"action": "https://news.baidu.com/ns",
					"query": "word"
				},
				{
					"name": "Maps",
					"action": "http://map.baidu.com/m",
					"query": "word",
					"params": ["fr","ps01000"]
				},
				{
					"name": "Music",
					"action": "http://music.baidu.com/search",
					"query": "key"
				}
			]
		},
		{
			"name": "Info",
			"action": "https://www.info.com/serp",
			"query": "q",
			"color": "#46b3fb",
			"childs" : [
				{
					"name": "Images",
					"params": ["qc","images"]
				},
				{
					"name": "Videos",
					"params": ["qc","video"]
				},
				{
					"name": "News",
					"params": ["qc","news"],
				},
			]
		},
		{
			"name": "Yippy",
			"action": "https://yippy.com/search",
			"query": "query",
			"color": "#c0e66a",
			"childs" : [
				{
					"name": "Images",
					"action" : "https://yippy.com/ysa/cgi-bin/query-meta",
					"params": ["v:project","yippy-com-images"]
				},
				{
					"name": "Videos",
					"action" : "https://yippy.com/ysa/cgi-bin/query-meta",
					"params": ["v:project","yippy-com-video"]
				},
				{
					"name": "News",
					"action" : "https://yippy.com/ysa/cgi-bin/query-meta",
					"params": ["v:sources","news-bundle"],
				},
			]
		},
		{
			"name": "Mojeek",
			"action": "https://www.mojeek.com/search",
			"query": "q",
			"color": "#92cc5a"
		},
		{
			"name": "Swisscows",
			"action": "https://swisscows.com/web",
			"query": "query",
			"color": "#ff6161"
		},
		{
			"name": "Gibiru",
			"action": "https://gibiru.com/results.html",
			"query": "q",
			"color": "#ccc"
		}
	],
	"social": [
		{
			"name": "Twitter",
			"action": "https://twitter.com/search",
			"query": "q",
			"color": "#4abaff"
		 },
		{
			"name": "Facebook",
			"action": "https://www.facebook.com/public",
			"query": "query",
			"color": "#628fff",
			"childs": [
				{
					"name": "Watch",
					"action" : "https://www.facebook.com/watch/search/",
					"query" : "query"
				},
				{
					"name": "Marketplace",
					"action" : "https://www.facebook.com/marketplace/search/",
					"query" : "query"
				},
				{
					"name": "Groups",
					"action" : "https://www.facebook.com/groups/search/groups_home/",
					"query" : "q"
				}
			]
		 },
		 {
			"name": "Instagram",
			"action": "https://www.instagram.com/explore/tags/",
			"query" : false,
			"color": "#ff76c8"
		 },
		 {
			"name": "LinkedIn",
			"action": "https://www.linkedin.com/search/results/index/",
			"query": "keywords",
			"color": "#1da6ee"
		 },
		 {
			"name": "Pinterest",
			"action": "https://pinterest.com/search/pins/",
			"query": "q",
			"color": "#ff5860"
		 },
		 {
			"name": "reddit",
			"action": "https://www.reddit.com/search",
			"query": "q",
			"color": "#ff713a"
		 },
		 {
			"name": "TikTok",
			"action": "https://www.tiktok.com/tag/",
			"query" : false,
			"color": "#ff5475"
		 },
		 {
			"name": "Tumblr",
			"action": "https://www.tumblr.com/search/",
			"query" : false,
			"color": "#acc2d8"
		 },
		 {
			"name": "Snapchat",
			"action": "https://story.snapchat.com/search",
			"query" : "q",
			"color": "#fdf97d"
		 },
		 {
			"name": "Meetup",
			"action": "https://www.meetup.com/find/",
			"query": "keywords",
			"color": "#f64060"
		 },
		 {
			"name": "VK",
			"action": "https://vk.com/search",
			"query": "q",
			"color": "#64a1cf"
		 },
		 {
			"name": "Myspace",
			"action": "https://myspace.com/search",
			"query": "q",
			"color": "#f5f5f5"
		 },
		 {
			"name": "Periscope",
			"action": "https://www.pscp.tv/search",
			"query": "q",
			"color": "#45bfe5"
		 },
		 {
			"name": "Ello",
			"action": "https://ello.co/search",
			"query": "terms",
			"color": "#fff"
		 }
	],
	"video": [
		{
			"name": "YouTube",
			"action": "https://www.youtube.com/results/",
			"query": "search_query",
			"color": "#ff6565"
		 },
		 {
			"name": "Twitch",
			"action": "https://www.twitch.tv/search",
			"query" : "term",
			"color": "#9d5cff"
		 },
		 {
			"name": "Netflix",
			"action": "https://www.netflix.com/search",
			"query": "q",
			"color": "#ff525b"
		 },
		 {
			"name": "Prime Video",
			"action": "https://www.primevideo.com/search/?",
			"query": "phrase",
			"color": "#33bcea",
			"params": ["ie","UTF8"]
		 },
		 {
			"name": "Dailymotion",
			"action": "https://www.dailymotion.com/search/",
			"query" : false,
			"color": "#eee"
		 },
		 {
			"name": "Vimeo",
			"action": "https://vimeo.com/search",
			"query": "q",
			"color": "#2fc6ff"
		 },
		 {
			"name": "Hulu",
			"action": "https://www.hulu.com/search",
			"query": "q",
			"color": "#6cf16c"
		 },
		 {
			"name": "Disney+",
			"action": "https://disneyplus.com/",
			"query": false,
			"color": "#5a7dff"
		 },
		 
		 {
			"name": "TED",
			"action": "https://www.ted.com/search",
			"query": "q",
			"color": "#ff5c50"
		 },
		 {
			"name": "Fandango",
			"action": "https://www.fandango.com/search",
			"query": 'q',
			"color": "#ff9f47"
		 },
		 {
			"name": "Plex",
			"action": "https://app.plex.tv/desktop#!/search",
			"query": "query",
			"color": "#ffa334"
		 },
		 {
			"name": "Vudu",
			"action": "https://www.vudu.com/content/movies/search",
			"query": "searchString",
			"color": "#59a2ff"
		 },
		 {
			"name": "Metacafe",
			"action": "https://www.metacafe.com/videos_about/",
			"query": false,
			"color": "#5a86ff"
		 },
		 {
			"name": "Veoh",
			"action": "https://www.veoh.com/find/",
			"query": false,
			"color": "#29b8ee"
		 },
		 {
			"name": "Aol",
			"action": "https://www.aol.com/video/search/",
			"query": "q",
			"color": "#ddd"
		 }
	],
	"image": [
		{
			"name": "GIPHY",
			"action": "https://giphy.com/search/",
			"query": false,
			"color": "#8b84ff"
		 },
		 {
			"name": "Flickr",
			"action": "https://www.flickr.com/search",
			"query": "q",
			"color": "#ff73bc"
		 },
		 {
			"name": "Unsplash",
			"action": "https://unsplash.com/s/photos/",
			"query": false,
			"color": "#eee"
		 },
		 {
			"name": "Pexels",
			"action": "https://www.pexels.com/search/",
			"query": false,
			"color": "#35dfbd"
		 },
		 {
			"name": "Freepik",
			"action": "https://www.freepik.com/search",
			"query": "query",
			"color": "#4296ff"
		 },
		 {
			"name": "Pixabay",
			"action": "https://pixabay.com/photos/search/",
			"query": false,
			"color": "#5ee887"
		 },
		 {
			"name": "Adobe Stock",
			"action": "https://stock.adobe.com/search",
			"query": "k",
			"color": "#ddd"
		 },
		 {
			"name": "Shutterstock",
			"action": "https://www.shutterstock.com/search",
			"query": "searchterm",
			"color": "#ff473a"
		 },
		 {
			"name": "Getty Images",
			"action": "https://www.gettyimages.com/photos/",
			"query": false,
			"color": "#ddd"
		 },
		 {
			"name": "SmugMug",
			"action": "https://www.smugmug.com/search/",
			"query": "q",
			"color": "#b6ff23"
		 },
		 {
			"name": "500px",
			"action": "https://500px.com/search",
			"query": "q",
			"color": "#0099e5"
		 },
		 {
			"name": "Poly",
			"action": "https://poly.google.com/search/",
			"query": false,
			"color": "#ff5172"
		 },
		 {
			"name": "CC",
			"action": "https://search.creativecommons.org/search",
			"query": "q",
			"color": "#5fd1fc"
		 },
		 {
			"name": "Imgur",
			"action": "https://imgur.com/search",
			"query": "q",
			"color": "#3cea99"
		 },
		 {
			"name": "DeviantArt",
			"action": "https://www.deviantart.com/",
			"query": "q",
			"color": "#37ffbe"
		 },
		 {
			"name": "Dribbble",
			"action": "https://dribbble.com/search",
			"query": "q",
			"color": "#f082ac"
		},
		{
			"name": "Behance",
			"action": "https://www.behance.net/search",
			"query": "search",
			"color": "#377cff"
		}
		 
	],
	"audio": [
		{
			"name": "Spotify",
			"action": "https://open.spotify.com/search/",
			"query": false,
			"color": "#58e087"
		},
		{
			"name": "SoundCloud",
			"action": "https://soundcloud.com/search",
			"query": "q",
			"color": "#ff7d3e"
		},
		{
			"name": "Apple Music",
			"action": "https://music.apple.com/search",
			"query": "term",
			"color": "#ff6bb0"
		},
		{
			"name": "Last.fm",
			"action": "https://www.last.fm/search",
			"query": "q",
			"color": "#ff5151"
		},
		{
			"name": "Pandora",
			"action": "https://www.pandora.com/search/",
			"query": false,
			"color": "#4573ff"
		},
		{
			"name": "TuneIn",
			"action": "https://tunein.com/search/",
			"query": "query",
			"color": "#36d7cd"
		},
		{
			"name": "Deezer",
			"action": "https://www.deezer.com/search/",
			"query": false,
			"color": "#eee"
		},
		{
			"name": "TIDAL",
			"action": "https://listen.tidal.com/search",
			"query": "q",
			"color": "#eee"
		},
		{
			"name": "Genius",
			"action": "https://genius.com/search",
			"query": "q",
			"color": "#f5f575"
		},
		{
			"name": "Musixmatch",
			"action": "https://www.musixmatch.com/search/",
			"query": false,
			"color": "#ff7171"
		},
		{
			"name": "iHeartRadio",
			"action": "https://www.iheart.com/search/",
			"query": "q",
			"color": "#ff606b"
		},
		{
			"name": "Bandcamp",
			"action": "https://bandcamp.com/search",
			"query": "q",
			"color": "#4ab1cd"
		},
		{
			"name": "Hype Machine",
			"action": "http://hypem.com/search/",
			"query": false,
			"color": "#9ed664"
		},
		{
			"name": "Shoutcast",
			"action": "https://directory.shoutcast.com/search",
			"query": "query",
			"color": "#2bcdd4"
		}
	],
	"shopping": [
		{
			"name": "Amazon",
			"action": "https://www.amazon.com/s",
			"query": "k",
			"color": "#ffba51"
		},
		{
			"name": "AliExpress",
			"action": "https://www.aliexpress.com/wholesale",
			"query": "SearchText",
			"color": "#ff6363"
		},
		{
			"name": "Ebay",
			"action": "https://www.ebay.com/sch/i.html",
			"query": "_nkw",
			"color": "#3192ff"
		},
		{
			"name": "Walmart",
			"action": "https://www.walmart.com/search/",
			"query": "query",
			"color": "#ffc220"
		},
		{
			"name": "Target",
			"action": "https://www.target.com/s",
			"query": "searchTerm",
			"color": "#ff3535"
		},
		{
			"name": "Best Buy",
			"action": "https://www.bestbuy.com/site/searchpage.jsp",
			"query": "st",
			"color": "#e6ca00"
		},
		{
			"name": "Etsy",
			"action": "https://www.etsy.com/search",
			"query": "q",
			"color": "#ff781a"
		},
		{
			"name": "Wish",
			"action": "https://www.wish.com/search/",
			"query": false,
			"color": "#35c7ff"
		},
		{
			"name": "Macys",
			"action": "https://www.macys.com/shop/featured/",
			"query": false,
			"color": "#ff2b3b"
		},
		{
			"name": "Groupon",
			"action": "https://www.groupon.com/browse/?",
			"query": "query",
			"color": "#6fd722"
		},
		{
			"name": "Craigslist",
			"action": "https://craigslist.org/search/sss",
			"query": "query",
			"color": "#a542ff"
		}
	],
	"local": [
		{
			"name": "Foursquare",
			"action": "https://foursquare.com/explore",
			"query": "q",
			"color": "#6388f3"
		},
		{
			"name": "Google Maps",
			"action": "https://google.com/maps/search/",
			"query": false,
			"color": "#468cff"
		},
		{
			"name": "Apple Maps",
			"action": "http://maps.apple.com/",
			"query": "q",
			"color": "#4cb69a"
		},
		{
			"name": "Bing Maps",
			"action": "https://www.bing.com/maps",
			"query": "q",
			"color": "#0ac9c9"
		},
		{
			"name": "Tripadvisor",
			"action": "https://www.tripadvisor.com/Search",
			"query": "q",
			"color": "#34e0a1"
		},
		{
			"name": "Yelp",
			"action": "https://www.yelp.com/search",
			"query": "find_desc",
			"color": "#ff5454"
		},
		{
			"name": "Booking",
			"action": "https://www.booking.com/",
			"query": false,
			"color": "#2681ff"
		},
		{
			"name": "Airbnb",
			"action": "https://www.airbnb.com/s/",
			"query": false,
			"color": "#FF5A5F"
		},
		{
			"name": "Moovit",
			"action": "https://moovitapp.com/",
			"query": "from",
			"color": "#ff7f58"
		},
		{
			"name": "Uber",
			"action": "https://uber.com/",
			"query": "q",
			"color": "#eee"
		},
		{
			"name": "HERE WeGo",
			"action": "https://wego.here.com/search/",
			"query": false,
			"color": "#01b6b2"
		},
		{
			"name": "Mapquest",
			"action": "https://www.mapquest.com/search/results",
			"query": "query",
			"color": "#c6de63"
		}
	],
	"news": [
		{
			"name": "Pocket",
			"action": "https://app.getpocket.com/search/",
			"query": false,
			"color": "#ff576c"
		},
		{
			"name": "Medium",
			"action": "https://medium.com/search",
			"query": "q",
			"color": "#f0f0f0"
		 },
		{
			"name": "Flipboard",
			"action": "https://flipboard.com/search/",
			"query": false,
			"color": "#ff5b5b"
		},
		{
			"name": "Digg",
			"action": "http://digg.com/search",
			"query": "q",
			"color": "#eee"
		},
		{
			"name": "Feedly",
			"action": "https://feedly.com/i/search/",
			"query": false,
			"color": "#59e076"
		},
		{
			"name": "Reuters",
			"action": "https://www.reuters.com/search/news",
			"query": "blob",
			"color": "#ffa54b"
		},
		{
			"name": "BBC",
			"action": "https://www.bbc.co.uk/search",
			"query": "q",
			"color": "#eee"
		},
		{
			"name": "NY Times",
			"action": "https://www.nytimes.com/search",
			"query": "query",
			"color": "#eee"
		},
		{
			"name": "CNN",
			"action": "https://edition.cnn.com/search",
			"query": "q",
			"color": "#ff5959"
		},
		{
			"name": "Guardian",
			"action": "https://theguardian.com/search",
			"query": "q",
			"color": "#4077d0"
		},
		{
			"name": "HuffPost",
			"action": "https://www.huffpost.com/search",
			"query": "keywords",
			"color": "#12eebf"
		},
		{
			"name": "Forbes",
			"action": "https://www.forbes.com/search/",
			"query": "q",
			"color": "#eee"
		},
		{
			"name": "Bloomberg",
			"action": "https://www.bloomberg.com/search",
			"query": "query",
			"color": "#6f65ff"
		},
		{
			"name": "Washington Post",
			"action": "https://www.washingtonpost.com/newssearch/",
			"query": "query",
			"color": "#eee"
		},
		{
			"name": "Aljazeera",
			"action": "https://www.aljazeera.com/search/",
			"query": "q",
			"color": "#ffb34c"
		},
		{
			"name": "AP",
			"action": "https://www.ap.org/search",
			"query": "q",
			"color": "#ff5956"
		},
		{
			"name": "DW",
			"action": "https://www.dw.com/search/",
			"query": "item",
			"color": "#0098ff"
		},
		{
			"name": "RT",
			"action": "https://www.rt.com/search",
			"query": "q",
			"color": "#76bd1d"
		}
	],
	"academic": [
		{
			"name": "Wikipedia",
			"action": "https://en.wikipedia.org/w/index.php",
			"query": "search",
			"color": "#ddd"
		},
		{
			"name": "Google Scholar",
			"action": "https://scholar.google.com/scholar",
			"query": "q",
			"color": "#649fff"
		},
		{
			"name": "ResearchGate",
			"action": "https://www.researchgate.net/search",
			"query": "q",
			"color": "#00e1cf"
		},
		{
			"name": "Microsoft Academic",
			"action": "https://academic.microsoft.com/search",
			"query": "q",
			"color": "#8393ff"
		},
		{
			"name": "Academia",
			"action": "https://www.academia.edu/people/search",
			"query": "q",
			"color": "#eee"
		},
		{
			"name": "arxiv",
			"action": "https://arxiv.org/search/",
			"query": "query",
			"color": "#ff5959",
			"params": ["searchtype","all"]
		},
		{
			"name": "PLOS ONE",
			"action": "https://journals.plos.org/plosone/search",
			"query": "q",
			"color": "#ff7eda"
		},
		{
			"name": "CORE",
			"action": "https://core.ac.uk/search",
			"query": "q",
			"color": "#ff9f4e"
		},
		{
			"name": "BASE",
			"action": "https://www.base-search.net/Search/Results",
			"query": "lookfor",
			"color": "#ffc457"
		},
		{
			"name": "Stack Exchange",
			"action": "https://stackexchange.com/search",
			"query": "q",
			"color": "#519dff"
		},
		{
			"name": "Quora",
			"action": "https://www.quora.com/search",
			"query": "q",
			"color": "#ff6966"
		},
		{
			"name": "Brainly",
			"action": "https://brainly.com/app/ask",
			"query": "q",
			"color": "#60d399"
		},
		{
			"name": "Wolfram Alpha",
			"action": "https://www.wolframalpha.com/input",
			"query": "i",
			"color": "#ff9c56"
		},
		{
			"name": "Golden",
			"action": "https://golden.com/search/",
			"query": false,
			"color": "#efbf54"
		},
	],
	"code": [
		{
			"name": "GitHub",
			"action": "https://github.com/search",
			"query": "q",
			"color": "#becad8"
		},
		{
			"name": "Docker Hub",
			"action": "https://hub.docker.com/search",
			"query": "q",
			"color": "#4bbfff"
		},
		{
			"name": "npm",
			"action": "https://www.npmjs.com/search",
			"query": "q",
			"color": "#ff5454"
		},
		{
			"name": "Yarn",
			"action": "https://yarnpkg.com/",
			"query": "q",
			"color": "#30beff"
		},
		{
			"name": "PyPI",
			"action": "https://pypi.org/search/",
			"query": "q",
			"color": "#47a4da"
		},
		{
			"name": "NuGet",
			"action": "https://www.nuget.org/packages",
			"query": "q",
			"color": "#4bb0ff"
		},
		{
			"name": "Packagist",
			"action": "https://packagist.org/",
			"query": "query",
			"color": "#ffae51"
		},
		{
			"name": "RubyGems",
			"action": "https://rubygems.org/search",
			"query": "query",
			"color": "#ff6249"
		},
		{
			"name": "Crates",
			"action": "https://crates.io/search",
			"query": "q",
			"color": "#74c574"
		},
		{
			"name": "Stack Overflow",
			"action": "https://stackoverflow.com/search",
			"query": "q",
			"color": "#ffa055"
		},
		{
			"name": "CodePen",
			"action": "https://codepen.io/search/pens",
			"query": "q",
			"color": "#e2e2e2"
		},
		{
			"name": "Glitch",
			"action": "https://glitch.com/search",
			"query": "q",
			"color": "#f7a4ff"
		},
		{
			"name": "GitLab",
			"action": "https://gitlab.com/public",
			"query": "name",
			"color": "#ff8346"
		},
		{
			"name": "Bitbucket",
			"action": "https://bitbucket.org/repo/all/",
			"query": "name",
			"color": "#4c94ff"
		},
		{
			"name": "searchcode",
			"action": "https://searchcode.com/",
			"query": "q",
			"color": "#ca7aff"
		}
		// {
		// 	"name": "Product Hunt",
		// 	"action": "https://www.producthunt.com/search",
		// 	"query": "q",
		// 	"color": "#ff744c"
		// },
		// {
		// 	"name": "Kickstarter",
		// 	"action": "https://www.kickstarter.com/discover/advanced",
		// 	"query": "term",
		// 	"color": "#1dff9e"
		// },
		// {
		// 	"name": "Indiegogo",
		// 	"action": "https://www.indiegogo.com/explore/all",
		// 	"query": "q",
		// 	"color": "#ff3a96"
		// }
	],
	"jobs": [
		{
			"name": "LinkedIn",
			"action": "https://www.linkedin.com/jobs/search/",
			"query": "keywords",
			"color": "#1da6ee"
		 },
		{
			"name": "Indeed",
			"action": "https://www.indeed.com/jobs",
			"query": "q",
			"color": "#3788ff"
		},
		{
			"name": "Glassdoor",
			"action": "https://www.glassdoor.com/Job/jobs.htm",
			"query": "sc.keyword",
			"color": "#37de6f"
		},
		{
			"name": "Upwork",
			"action": "https://www.upwork.com/search/profiles/",
			"query": "q",
			"color": "#88f456"
		},
		{
			"name": "Fiverr",
			"action": "https://www.fiverr.com/search/gigs",
			"query": "query",
			"color": "#3fca89"
		},
		{
			"name": "Monster",
			"action": "https://www.monster.com/jobs/search/",
			"query": "q",
			"color": "#975ff0"
		},
		{
			"name": "ZipRecruiter",
			"action": "https://www.ziprecruiter.com/candidate/search",
			"query": "search",
			"color": "#b2e522"
		},
		{
			"name": "LinkUp",
			"action": "https://www.linkup.com/search/results/",
			"query": false,
			"color": "#b6f240"
		},
		{
			"name": "Dice",
			"action": "https://www.dice.com/jobs",
			"query": "q",
			"color": "#ff3a41"
		},
		{
			"name": "CareerBuilder",
			"action": "https://www.careerbuilder.com/jobs",
			"query": "keywords",
			"color": "#4aadfa"
		},
		{
			"name": "SimplyHired",
			"action": "https://www.simplyhired.com/search",
			"query": "q",
			"color": "#309fff"
		}
	],
	"torrent": [
		{
			"name": "Pirate Bay",
			"action": "https://thepiratebay.org/search/",
			"query": false,
			"color": "#9d6844"
		},
		{
			"name": "RARBG",
			"action": "https://rarbgproxied.org/torrents.php",
			"query": "search",
			"color": "#3860bb"
		},
		{
			"name": "1337X",
			"action": "https://1337x.to/search/",
			"query": false,
			"color": "#d63600"
		},
		{
			"name": "Torrentz2",
			"action": "https://torrentz2.eu/search",
			"query": "f",
			"color": "#369"
		},
		{
			"name": "Zooqle",
			"action": "https://zooqle.com/search",
			"query": "q",
			"color": "#b5b359"
		},
		{
			"name": "YTS",
			"action": "https://yts.su/movies",
			"query": "keyword",
			"color": "#6AC045"
		},
		{
			"name": "LimeTorrents",
			"action": "https://www.limetorrents.info/search/all/",
			"query": false,
			"color": "#b6f240"
		},
		{
			"name": "ExtraTorrent",
			"action": "http://extratorrent.cd/search/",
			"query": "search",
			"color": "#0067a9"
		},
		{
			"name": "EZTV",
			"action": "https://eztv.ag/search/",
			"query": false,
			"color": "#10559e"
		}
	],
	"archiving": [
		// https://en.wikipedia.org/wiki/Web_archiving
		{
			"name": "Internet Archive",
			"action": "https://archive.org/search.php",
			"query": "query",
			"color": "#d8d8d8"
		}
	]
 }
// console.log(typeof searchParams, searchParams);

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/*
	Functions
	- core search functions (depends 'search-params.js')
*/

const 	root = document.documentElement,
		body = document.body;

// form elements
const	searchForm = document.getElementById('search-form'), // "form" element (for change "action")
		formInput = document.getElementById('search-input'), // "input" element (for change "name" & "value")
		helper = document.getElementById('helper'); // helper "input" (for additional attributes "name" & "value")

// console log colors
const 	logCache = 'background:lightgreen;color:#000;',
		logAction = 'background:aqua;color:#000;',
		logBehavior = 'background:yellow;color:#000;';

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
		formInput.name = "";
		helper.name = "";
		helper.value = "";

		// redefine form action for clean URL (issue: remove '?' from output URL)
		function removeParams() {
			searchForm.action = action + encodeURIComponent(formInput.value);
		}
		// call function
		searchForm.onsubmit = removeParams;

	} else {
		// action
		searchForm.action = action;
		// query
		formInput.name = query;

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
	document.getElementById('reset-button').style.display = "none";
	
	inputFocus();
}
// show reset button only when user type on input
function checkValue() {

	if ( formInput.value !== "" ) {
		document.getElementById('reset-button').style.display = "inline-block";
	} else {
		document.getElementById('reset-button').style.display = "none";
	}
}
// form focus
function inputFocus() {
	formInput.focus(); 
	console.log("%cfocus", logBehavior);
}

// generate search services buttons and put into corresponding category tab
function generateTabBtns(category) {

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
// generate options for select (if search have childs)
function generateOpts(name, value) {

	document.querySelector("#options").insertAdjacentHTML('beforeend', '<option value="'+value+'">'+name+'</option>');
}

// change layout
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
		button.innerHTML = '<i data-feather="sidebar"></i>';

		window.localStorage.setItem('layout', 1);
	}

	inputFocus();
	feather.replace();
}
// change theme
function changeTheme() {

	var button = document.getElementById("theme-button");
	button.innerHTML = '';

	var x = getComputedStyle(root).getPropertyValue('--translucent-dark-color');
	var y = getComputedStyle(root).getPropertyValue('--active-color');

	// if don't have dark theme
	if ( body.classList.contains('theme-light') ) {

		body.classList.remove('theme-light');
		body.classList.add('theme-dark');
		root.style.setProperty('--translucent-color', x);
		root.style.setProperty('--text-color', y);
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

// get browser User Agent for Share
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
	// iOS - http://stackoverflow.com/a/9039885/177710
	if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
		return "iOS";
	}
	return "other";
}
// copy text to clipboard
function copyToClipboard(str) {
	const el = document.createElement('textarea');
	el.value = str;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	inputFocus();
};


/*
	Events
	- intercept elements that can change general search options
*/

// intercept HTML to generate tab buttons
document.querySelectorAll('nav ul li button').forEach(function(node) {
	generateTabBtns(node.name);
});

// navigation menu buttons (search categories)
$("nav > ul > li > button").on("click", function() {

	// toggle active style
	$("nav > ul > li > button").removeClass('nav-active');
	$(this).addClass("nav-active");

	// get ID & index
	var id = $(this).attr("name").toLowerCase(),
		index = $("nav > ul > li > button").index(this);

	// toggle active Tab
	$("#tabs").find(".tab").removeClass('tab-active');
	$("#tabs").find("#"+id+"-tab").addClass("tab-active");
	// display related Tab
	openTab(id + '-tab');

	// Cache: if match with current Nav
	if (window.localStorage.getItem('activeNav') == index) {
		// Cache: if have Search click them
		if (window.localStorage.getItem('activeSearch')) {
			$('#' + window.localStorage.getItem('activeSearch')).click();
			console.log('%cCache found: Search ' + window.localStorage.getItem('activeSearch'), logCache);
		}
	} else { // click on first Search item
		$(".tab-active > button:first-child").click();
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

			// check if geolocation is active
			if (hasGeolocation == 0) {
				document.querySelector('#trends-title').innerHTML = '';
				document.querySelector('#trends-block').innerHTML = '<p id="warning-local">Allow localization access to see local trends<p> <button class="button ask-geolocation" onclick="getGeolocation()"><i data-feather="navigation"></i>Allow localization</button>';
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
			// alert('No API related to this category. Showing default.');
			getWeb();
	}

	// Cache: store Nav index
	window.localStorage.setItem('activeNav', index);
});

// tab buttons (search services)
$(".tab > button").on("click", function() {

	// toggle active style
	$(".tab > button").removeClass('active');
	$(this).addClass("active");

	// get button ID & name attribute (search category)
	var id = $(this).attr("id"),
		category = $(this).attr("name");

	// button ID must match back to original name in searchParams, so:
	var nameId = id,
		underscore = (nameId.match(/_/g)||[]).length;

	switch (underscore) { // count "_" occurrences
		case 1:
			nameId = nameId.replace(/_/g,' '); // put back white spaces " "
			break;
		case 2:
			nameId = nameId.replace(/__/g, "."); // put back points "."
			break;
		case 3:
			nameId = nameId.replace(/___/g, "+"); // put back plus "+"
			break;
	}

	// iterate search parameters from searchParams
	var i, j, name, action, query, color, helpers = "";

	for (i in searchParams[category]) {
		
		// if button id match with name
		if (nameId == searchParams[category][i].name.toLowerCase()) {

			name = searchParams[category][i].name;
			action = searchParams[category][i].action;
			query = searchParams[category][i].query;
			color = searchParams[category][i].color;
			console.log('Search properties:', category, id, name, action, query, color);

			// additional params: set as "helpers"
			if (searchParams[category][i].params) {

				helpers = [searchParams[category][i].params[0], searchParams[category][i].params[1]];
				console.log('Search additional parameters:', helpers);
			}

			// childs params: show select options (of the current search provider)
			if (searchParams[category][i].childs) {

				$("#options").show();
				$("#options > option").remove();

				// set first option
				generateOpts("All", category +"_"+ i +"_"+ name);

				// iterate
				for (j in searchParams[category][i].childs) {

					var option = searchParams[category][i].childs[j].name;
					
					generateOpts(option, category +"_"+ i +"_"+ option);
				}
			} else {
				$("#options").hide();
				$("#options > option").remove();
			}

		}
	}

	setStyle(name, color);
	setForm(action, query, helpers);
	getPrivacyRank(action);

	// Caching - store search provider ID
	window.localStorage.setItem('activeSearch', id);
});

// options (search childs)
document.querySelector('#options').addEventListener('change',function(){

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
	var w = document.documentElement.clientWidth;

	// if layout-2 is enabled, on the window size limit, force layout-1 for mobile
	if ( window.localStorage.getItem('layout') == 2 ) {

		if ( w <= 1199 ) {
			document.getElementById("layout-button").click();
		}
	}
});

/*
	Caching
	- using Web Storage
*/

// localStorage (retrieve user preferences / last UI states)
document.addEventListener('DOMContentLoaded', function() {

	const 	cacheNav = window.localStorage.getItem('activeNav'),
			cacheLayout = window.localStorage.getItem('layout'),
			cacheGeolocation = window.localStorage.getItem('geolocation');

	// selected navigation menu item (search category)
	if ( cacheNav ) {
		$('nav > ul > li:nth-child('+ (parseInt(cacheNav) + 1)  +')').find('button').click();
		console.log('%cCache found: Nav '+ cacheNav +'', logCache);
	} else {
		document.getElementById('default-tab').click();
	}

	// selected layout
	if ( cacheLayout == 2 ) {
		changeLayout();
		window.scrollTo(0, 0);
		console.log('%cCache found: Layout 2', logCache);
	} else {
		document.getElementById("layout-button").innerHTML = '<i data-feather="layout"></i>';
	}

	// seleted theme

	// user Geolocation permission
	
}, false);

// sessionStorage (store data from APIs)

/*
	Service Worker
	- for PWA
*/
// check that service workers are supported
if ('serviceWorker' in navigator) {

	window.addEventListener('load', () => {
	  navigator.serviceWorker.register('/service-worker.js');
	});
  }

/***/ }),

/***/ "./src/js/voice.js":
/*!*************************!*\
  !*** ./src/js/voice.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/*
  Speech Recognition
  - simple implementation of W3C Web Speech API designed to allow overwriting of nearly all attributes and function callbacks to implement custom behavior
*/

const voiceTranscript = document.getElementById('voice-transcript');

// create and return new WebSpeechRecognition object
function WebSpeechRecognition() {
  var r = this;
  r.continuous = false;
  r.lang = '';
  r.maxAlternatives = 1;
  r.status_array = arrayStatusEn;
  r.image_array = arrayImageMic;
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

  // Start recognition
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

  // Stop recognition
  r.stop = function() {
    recognizing = false;
    r.recognition.stop();
  };

  // toggle recognition between Start / Stop states
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

	// Set status field to text corresponding to key. See status_array for valid values of key. An invalid value of key will hide the status message.
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

	// Set button image corresponding to key. See image_array for valid values of key. An invalid value of key will show the image in its 'disable' state.
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

	// id is a DOM element or a string containing id or null
	// Returns DOM element or null
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
		if (event.error == 'no-speech' || event.error == 'audio-capture' || event.error == 'not-allowed') {
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

// informational text for each status condition
var arrayStatusEn = {
  'ready' : 'Click on the microphone and begin speaking',
  'active' : 'Listening...' + '<span id="voice-animation"></span>',
  'no-speech' : 'No speech was detected (verify your microphone audio level)',
  'audio-capture' : 'No microphone was found (ensure that a microphone is installed and configured correctly)',
  'allow' : 'Waiting permission...',
  'not-allowed' : 'Permission to use microphone was denied (change it to "allow")',
  'upgrade' : 'Speech recognition is not supported yet by this browser'
};

// button images for status
var arrayImageMic = {
  'ready' : 'mic.gif',
  'complete' : 'mic.gif',
  'active' : 'mic-animate.gif',
  'no-speech' : 'mic-broken.gif',
  'disable' : 'mic-off.gif'
};

// final actions
var reco = new WebSpeechRecognition();
    reco.statusText('status');
    reco.statusImage('voice-img');
    reco.interimResults('voice-transcript-text');
    reco.finalResults('search-input');
    reco.statusText('voice-transcript-text');

	reco.onEnd = function() {

		if (reco.final_transcript != '') {
			
    voiceTranscript.style.display = 'none';
		document.getElementById('tabs').style.visibility = 'visible';

			// force click to open a new browser tab
			inputFocus();
			checkValue();
			document.getElementById("search-button").click();
		}
};

function openVoiceTranscript() {
  voiceTranscript.style.display = 'inline-block';
  document.getElementById('tabs').style.visibility = 'hidden';
}
function closeVoiceTranscript() {
  voiceTranscript.style.display = 'none';
  document.getElementById('tabs').style.visibility = 'visible';
}

voiceTranscript.addEventListener("click", closeVoiceTranscript);

/***/ }),

/***/ "./src/js/widgets.js":
/*!***************************!*\
  !*** ./src/js/widgets.js ***!
  \***************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

/*
	Global user parameters for API calls (depends 'findto-api-service' running)
*/
var	userLang = navigator.language || navigator.userLanguage,
	country = userLang.split("-").pop(),
	lat = 0,
	lon = 0,
	hasGeolocation = 0;

/*
	Weather
*/

// retrieve device date & time
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
// get weather by geolocation
function getWeather(lat, lon) {

	const 	wWarning = document.getElementById("weather-warning"),
			wInfo = document.getElementById("weather-info"),
			wTemp = document.getElementById("weather-temp"),
			wCity = document.getElementById("weather-city");

		// call API
		fetch("http://localhost:3000/weather?lat="+lat+"&lon="+lon+"")
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

var dataTemp = {
	"default" : [0, ""],
	"kelvin" : 0,
	"celsius" : 0,
	"fahrenheit" : 0
};
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

// user Geolocation permission

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
	Privacy score
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

	// call API - Privacy Monitor
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
		privacyRank.innerHTML = "";
		privacyRank.innerHTML = url;
		privacyRank.setAttribute("href", "https://www.privacymonitor.com/rating/?q=" + url);
		feather.replace();
		gauge.set(score);
		gauge.setTextField(document.getElementById("gauge-textfield"));

		console.log("%cAPI called: Privacy", logAction);

		});
	})
	.catch(function(error){
		console.error("API error: Privacy", error);
	});

}

/*
	Trends
	- show trending data (popular search temrs, contents, places and events) from external APIs
*/

// API callers
function getWeb() {

	apiWrapper(
		"http://localhost:3000/web?country="+country+"", 
		"Web",
		['Trending Searches', 'trending-up']
	);
}
function getSocial() {

	apiWrapper(
		"http://localhost:3000/social?country="+country+"", 
		"Social",
		['Trending Topics', 'hash']
	);
}
function getVideo() {

	apiWrapper(
		"http://localhost:3000/video?country="+country+"&userLang="+userLang+"", 
		"Video",
		['Most Watched', 'film']
	);

}
function getImage() {

	apiWrapper(
		"http://localhost:3000/image?&userLang="+userLang+"",
		"Image",
		["Trending Images", "camera"]
	);
}
function getAudio() {

	apiWrapper(
		"http://localhost:3000/audio?type=artists&country="+country+"", 
		"Audio",
		['Most Listened','headphones']
	);
}
function getShopping() {

	apiWrapper(
		"https://findto.herokuapp.com/shopping",
		"Shopping",
		["Trending Products", "shopping-bag"]
	);
}
function getLocal() {

	apiWrapper(
		"http://localhost:3000/local?lat="+lat+"&lon="+lon+"",
		"Local",
		["Nearby You", "map"]
	);

}
function getNews() {

	apiWrapper(
		"http://localhost:3000/news?country="+country+"",
		"News",
		["Top Headlines", "bookmark"]
	);
}
function getAcademic() {

	apiWrapper(
		"http://localhost:3000/academic",
		"Academic",
		["Top Citations", "edit-2"]
	);
}
function getCode() {

	apiWrapper(
		"http://localhost:3000/code", 
		"Code",
		['Programming Trends', 'terminal']
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

// manage tabs
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

// API wrapper (fetch model)
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
			document.getElementById(idList).insertAdjacentHTML("afterend", "<p class='credits'>Data by <a href='"+data[i].credits[1]+"' target='_blank' rel='noopener'>"+data[i].credits[0]+"</a></p>")
		}

		// 4. click on first tab-button
		document.getElementById("trends-tab").firstElementChild.click();
		
	}

	// event listener - click handler for 'tag' items
	function listenerTags() {

		document.querySelectorAll('.tag').forEach(item => {
			item.addEventListener('click', event => {

				// put value on form input and scroll to it
				formInput.value = item.innerText;
				checkValue();
				formInput.focus();

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
		
		fetch(apiURL).then(function(response) {
			response.json().then(function(data){

				console.log("%cAPI called: "+apiTitle+"", logAction);
				
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

			console.error("API error: " + apiTitle + ' | ' + error);

			// 3. show error
			block.innerHTML = "<h2>Error calling "+apiTitle+" API</h2>";
		});
	} else {

		console.log("%cCache found: "+apiTitle+" API data", logCache);

		// 3. show stored data
		displayData( dataAPI[checkData(apiTitle)].data );
		listenerTags();
	}
}


/*
	Autocomplete
*/
document.addEventListener('DOMContentLoaded', function() {

	// Bing Autosuggest API
    $("#search-input").autocomplete({
        source: function(request, response) {
            $.ajax({
				url: "https://api.bing.com/osjson.aspx?market=" + userLang + "&query=" + encodeURIComponent(request.term) + "&JsonType=callback&JsonCallback=?",
				method: 'GET',
                dataType: "json",
				success: function (data) {
					// console.log(data);
					var suggestions = [];
					$.each(data[1], function (i, val) {
						suggestions.push(val);
					});
				// return limited suggestions
				response(suggestions.slice(0, 5));
				}
        	});
        }
	});

	// get date
	getDatetime();

}, false);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5kdG8vLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2ZpbmR0by8uL3NyYy9qcy9zZWFyY2gtcGFyYW1zLmpzIiwid2VicGFjazovL2ZpbmR0by8uL3NyYy9qcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vZmluZHRvLy4vc3JjL2pzL3ZvaWNlLmpzIiwid2VicGFjazovL2ZpbmR0by8uL3NyYy9qcy93aWRnZXRzLmpzIiwid2VicGFjazovL2ZpbmR0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maW5kdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5kdG8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdCOztBQUV4QixtQkFBTyxDQUFDLHFEQUFvQjtBQUM1QixtQkFBTyxDQUFDLHVDQUFhO0FBQ3JCLG1CQUFPLENBQUMscUNBQVk7QUFDcEIsbUJBQU8sQ0FBQyx5Q0FBYyxFOzs7Ozs7Ozs7Ozs7QUNMdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEOzs7Ozs7Ozs7Ozs7QUM1eUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBLHlDQUF5QyxXQUFXO0FBQ3BELCtCQUErQixXQUFXO0FBQzFDLG1DQUFtQyxXQUFXOztBQUU5QztBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBVSxnQkFBZ0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLFVBQVUsbUJBQW1CO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsT0FBTztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCO0FBQ3RCO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsRzs7Ozs7Ozs7Ozs7O0FDcmxCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDLHdCQUF3QixFQUFFO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0U7Ozs7Ozs7Ozs7OztBQ2hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyR0FBMkc7O0FBRTNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDOztBQUV4Qzs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0EsS0FBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJOztBQUVKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKLGdGQUFnRjtBQUNoRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5Qjs7QUFFQSxLQUFLLE9BQU87QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSixHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSxDQUFDLFM7Ozs7OztVQzVqQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xyXG5cclxucmVxdWlyZSgnLi9zZWFyY2gtcGFyYW1zLmpzJyk7XHJcbnJlcXVpcmUoJy4vc2VhcmNoLmpzJyk7XHJcbnJlcXVpcmUoJy4vdm9pY2UuanMnKTtcclxucmVxdWlyZSgnLi93aWRnZXRzLmpzJyk7IiwiLypcclxuXHRTZWFyY2ggcHJvdmlkZXJzIHBhcmFtZXRlcnNcclxuKi9cclxuY29uc3Qgc2VhcmNoUGFyYW1zID0ge1xyXG5cdFwid2ViXCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiR29vZ2xlXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM2NDlmZmZcIixcclxuXHRcdFx0XCJjaGlsZHNcIjogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiSW1hZ2VzXCIsXHJcblx0XHRcdFx0XCJwYXJhbXNcIjogW1widGJtXCIsXCJpc2NoXCJdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJWaWRlb3NcIixcclxuXHRcdFx0XHRcInBhcmFtc1wiOiBbXCJ0Ym1cIixcInZpZFwiXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTmV3c1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcInRibVwiLFwibndzXCJdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJNYXBzXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIiA6IFwiaHR0cHM6Ly9nb29nbGUuY29tL21hcHMvc2VhcmNoL1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJTaG9wcGluZ1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcInRibVwiLFwic2hvcFwiXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiQm9va3NcIixcclxuXHRcdFx0XHRcInBhcmFtc1wiOiBbXCJ0Ym1cIixcImJrc1wiXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiVHJhbnNsYXRlXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIiA6IFwiaHR0cHM6Ly90cmFuc2xhdGUuZ29vZ2xlLmNvbS9cIixcclxuXHRcdFx0XHRcInF1ZXJ5XCIgOiBcInRleHRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiSm9ic1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcImlicFwiLFwiaHRsO2pvYnNcIl1cclxuXHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCaW5nXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjMmNkZGY3XCIsXHJcblx0XHRcdFwiY2hpbGRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkltYWdlc1wiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vaW1hZ2VzL3NlYXJjaD89XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlZpZGVvc1wiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vdmlkZW9zL3NlYXJjaD89XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIk5ld3NcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL25ld3Mvc2VhcmNoPz1cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTWFwc1wiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vbWFwcz9xPVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJFdmVudHNcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmJpbmcuY29tL2V2ZW50cy9zZWFyY2gvPz1cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiVHJhbnNsYXRvclwiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vdHJhbnNsYXRvci9cIixcclxuXHRcdFx0XHRcInF1ZXJ5XCI6IFwidGV4dFwiXHJcblx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRHVja0R1Y2tHb1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZHVja2R1Y2tnby5jb20vXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY3NTVmXCIsXHJcblx0XHRcdFwiY2hpbGRzXCI6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkltYWdlc1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcImlhXCIsXCJpbWFnZXNcIl1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlZpZGVvc1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcImlhXCIsXCJ2aWRlb3NcIl1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIk5ld3NcIixcclxuXHRcdFx0XHRcInBhcmFtc1wiOiBbXCJpYXJcIixcIm5ld3NcIl1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIk1lYW5pbmdzXCIsXHJcblx0XHRcdFx0XCJwYXJhbXNcIjogW1wiaWFcIixcIm1lYW5pbmdzXCJdXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJTdG9ja1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcImlhXCIsXCJzdG9ja1wiXVxyXG5cdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIllhaG9vXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9zZWFyY2gueWFob28uY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2E4NjJmZlwiLFxyXG5cdFx0XHRcImNoaWxkc1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJJbWFnZXNcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vaW1hZ2VzLnNlYXJjaC55YWhvby5jb20vc2VhcmNoL2ltYWdlcz9wPVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJWaWRlb3NcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdmlkZW8uc2VhcmNoLnlhaG9vLmNvbS9zZWFyY2gvdmlkZW8/cD1cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTmV3c1wiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9uZXdzLnNlYXJjaC55YWhvby5jb20vc2VhcmNoP3A9XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkxvY2FsXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3NlYXJjaC55YWhvby5jb20vbG9jYWwvP3A9XCIsXHJcblx0XHRcdFx0XCJxdWVyeVwiOiBcInBcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiQW5zd2Vyc1wiLFxyXG5cdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9hbnN3ZXJzLnNlYXJjaC55YWhvby5jb20vc2VhcmNoP3A9XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlNob3BwaW5nXCIsXHJcblx0XHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3Nob3BwaW5nLnNlYXJjaC55YWhvby5jb20vc2VhcmNoP3A9XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIkZpbmFuY2VcIixcclxuXHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZmluYW5jZS5zZWFyY2gueWFob28uY29tL3NlYXJjaD9wPVwiXHJcblx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiU3RhcnRwYWdlXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuc3RhcnRwYWdlLmNvbS9kby9hc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzg2OTBmZlwiLFxyXG5cdFx0XHRcImNoaWxkc1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiSW1hZ2VzXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtc1wiOiBbXCJjYXRcIixcInBpY3NcIl1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlZpZGVvc1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1wiY2F0XCIsXCJ2aWRlb1wiXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0XCJwYXJhbXNcIjogW1wib3BcIixcInR1YTFcIl1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlF3YW50XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cucXdhbnQuY29tL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNjQ3MFwiLFxyXG5cdFx0XHRcImNoaWxkc1wiOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRcIm5hbWVcIjogXCJJbWFnZXNcIixcclxuXHRcdFx0XHRcInBhcmFtc1wiOiBbXCJ0XCIsXCJpbWFnZXNcIl1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibmFtZVwiOiBcIlZpZGVvc1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcInRcIixcInZpZGVvc1wiXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiTmV3c1wiLFxyXG5cdFx0XHRcdFwicGFyYW1zXCI6IFtcInRcIixcIm5ld3NcIl1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNdXNpY1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnF3YW50LmNvbS9tdXNpYy9zZWFyY2g/cT1cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJuYW1lXCI6IFwiU29jaWFsXCIsXHJcblx0XHRcdFx0XCJwYXJhbXNcIjogW1widFwiLFwic29jaWFsXCJdXHJcblx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwic2VhcnhcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3NlYXJ4Lnh5ei9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM0ZGRmYTVcIixcclxuXHRcdFx0XCJjaGlsZHNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkltYWdlc1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1wiY2F0ZWdvcmllc1wiLFwiaW1hZ2VzXCJdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJWaWRlb3NcIixcclxuXHRcdFx0XHRcdFwicGFyYW1zXCI6IFtcImNhdGVnb3JpZXNcIixcInZpZGVvc1wiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTmV3c1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1wiY2F0ZWdvcmllc1wiLFwibmV3c1wiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiRmlsZXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1zXCI6IFtcImNhdGVnb3JpZXNcIixcImZpbGVzXCJdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJJVFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1wiY2F0ZWdvcmllc1wiLFwiaXRcIl1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hcHNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1zXCI6IFtcImNhdGVnb3JpZXNcIixcIm1hcFwiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTXVzaWNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1zXCI6IFtcImNhdGVnb3JpZXNcIixcIm11c2ljXCJdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTY2llbmNlXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtc1wiOiBbXCJjYXRlZ29yaWVzXCIsXCJzY2llbmNlXCJdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJZYW5kZXhcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy55YW5kZXguY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInRleHRcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZmRmNWRcIixcclxuXHRcdFx0XCJjaGlsZHNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkltYWdlc1wiLFxyXG5cdFx0XHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3lhbmRleC5jb20vaW1hZ2VzL3NlYXJjaFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJWaWRlb3NcIixcclxuXHRcdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly95YW5kZXguY29tL3ZpZGVvL3NlYXJjaFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJOZXdzXCIsXHJcblx0XHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vbmV3cy55YW5kZXgucnUveWFuZHNlYXJjaFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1wicnB0XCIsXCJubmV3czJcIl1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk1hcHNcIixcclxuXHRcdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9tYXBzLnlhbmRleC5jb21cIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVHJhbnNsYXRlXCIsXHJcblx0XHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdHJhbnNsYXRlLnlhbmRleC5jb20vXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIk11c2ljXCIsXHJcblx0XHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vbXVzaWMueWFuZGV4LnJ1L3NlYXJjaFwiXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCYWlkdVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJ3ZFwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzMzODVmZlwiLFxyXG5cdFx0XHRcImNoaWxkc1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiSW1hZ2VzXCIsXHJcblx0XHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHA6Ly9pbWFnZS5iYWlkdS5jb20vc2VhcmNoL2luZGV4XCIsXHJcblx0XHRcdFx0XHRcInF1ZXJ5XCI6IFwid29yZFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1widG5cIixcImJhaWR1aW1hZ2VcIl1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlZpZGVvc1wiLFxyXG5cdFx0XHRcdFx0XCJhY3Rpb25cIjogXCJodHRwOi8vdi5iYWlkdS5jb20vdlwiLFxyXG5cdFx0XHRcdFx0XCJxdWVyeVwiOiBcIndvcmRcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTmV3c1wiLFxyXG5cdFx0XHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL25ld3MuYmFpZHUuY29tL25zXCIsXHJcblx0XHRcdFx0XHRcInF1ZXJ5XCI6IFwid29yZFwiXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJNYXBzXCIsXHJcblx0XHRcdFx0XHRcImFjdGlvblwiOiBcImh0dHA6Ly9tYXAuYmFpZHUuY29tL21cIixcclxuXHRcdFx0XHRcdFwicXVlcnlcIjogXCJ3b3JkXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtc1wiOiBbXCJmclwiLFwicHMwMTAwMFwiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTXVzaWNcIixcclxuXHRcdFx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cDovL211c2ljLmJhaWR1LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XHRcdFwicXVlcnlcIjogXCJrZXlcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiSW5mb1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmluZm8uY29tL3NlcnBcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM0NmIzZmJcIixcclxuXHRcdFx0XCJjaGlsZHNcIiA6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJJbWFnZXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1zXCI6IFtcInFjXCIsXCJpbWFnZXNcIl1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlZpZGVvc1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1wicWNcIixcInZpZGVvXCJdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJOZXdzXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtc1wiOiBbXCJxY1wiLFwibmV3c1wiXSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJZaXBweVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8veWlwcHkuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicXVlcnlcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNjMGU2NmFcIixcclxuXHRcdFx0XCJjaGlsZHNcIiA6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJJbWFnZXNcIixcclxuXHRcdFx0XHRcdFwiYWN0aW9uXCIgOiBcImh0dHBzOi8veWlwcHkuY29tL3lzYS9jZ2ktYmluL3F1ZXJ5LW1ldGFcIixcclxuXHRcdFx0XHRcdFwicGFyYW1zXCI6IFtcInY6cHJvamVjdFwiLFwieWlwcHktY29tLWltYWdlc1wiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiVmlkZW9zXCIsXHJcblx0XHRcdFx0XHRcImFjdGlvblwiIDogXCJodHRwczovL3lpcHB5LmNvbS95c2EvY2dpLWJpbi9xdWVyeS1tZXRhXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtc1wiOiBbXCJ2OnByb2plY3RcIixcInlpcHB5LWNvbS12aWRlb1wiXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTmV3c1wiLFxyXG5cdFx0XHRcdFx0XCJhY3Rpb25cIiA6IFwiaHR0cHM6Ly95aXBweS5jb20veXNhL2NnaS1iaW4vcXVlcnktbWV0YVwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbXNcIjogW1widjpzb3VyY2VzXCIsXCJuZXdzLWJ1bmRsZVwiXSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNb2plZWtcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5tb2plZWsuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzkyY2M1YVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJTd2lzc2Nvd3NcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3N3aXNzY293cy5jb20vd2ViXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNjE2MVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHaWJpcnVcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2dpYmlydS5jb20vcmVzdWx0cy5odG1sXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjY2NjXCJcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwic29jaWFsXCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVHdpdHRlclwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdHdpdHRlci5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNGFiYWZmXCJcclxuXHRcdCB9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGYWNlYm9va1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wdWJsaWNcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInF1ZXJ5XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNjI4ZmZmXCIsXHJcblx0XHRcdFwiY2hpbGRzXCI6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJXYXRjaFwiLFxyXG5cdFx0XHRcdFx0XCJhY3Rpb25cIiA6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3dhdGNoL3NlYXJjaC9cIixcclxuXHRcdFx0XHRcdFwicXVlcnlcIiA6IFwicXVlcnlcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiTWFya2V0cGxhY2VcIixcclxuXHRcdFx0XHRcdFwiYWN0aW9uXCIgOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9tYXJrZXRwbGFjZS9zZWFyY2gvXCIsXHJcblx0XHRcdFx0XHRcInF1ZXJ5XCIgOiBcInF1ZXJ5XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdyb3Vwc1wiLFxyXG5cdFx0XHRcdFx0XCJhY3Rpb25cIiA6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2dyb3Vwcy9zZWFyY2gvZ3JvdXBzX2hvbWUvXCIsXHJcblx0XHRcdFx0XHRcInF1ZXJ5XCIgOiBcInFcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJJbnN0YWdyYW1cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2V4cGxvcmUvdGFncy9cIixcclxuXHRcdFx0XCJxdWVyeVwiIDogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY3NmM4XCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGlua2VkSW5cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2VhcmNoL3Jlc3VsdHMvaW5kZXgvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJrZXl3b3Jkc1wiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzFkYTZlZVwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIlBpbnRlcmVzdFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vcGludGVyZXN0LmNvbS9zZWFyY2gvcGlucy9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjU4NjBcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJyZWRkaXRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNzEzYVwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIlRpa1Rva1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnRpa3Rvay5jb20vdGFnL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCIgOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjU0NzVcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJUdW1ibHJcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy50dW1ibHIuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiIDogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjYWNjMmQ4XCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiU25hcGNoYXRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3N0b3J5LnNuYXBjaGF0LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiIDogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmRmOTdkXCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWVldHVwXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cubWVldHVwLmNvbS9maW5kL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwia2V5d29yZHNcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmNjQwNjBcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWS1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdmsuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzY0YTFjZlwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIk15c3BhY2VcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL215c3BhY2UuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2Y1ZjVmNVwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIlBlcmlzY29wZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnBzY3AudHYvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNDViZmU1XCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRWxsb1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZWxsby5jby9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInRlcm1zXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmZmXCJcclxuXHRcdCB9XHJcblx0XSxcclxuXHRcInZpZGVvXCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiWW91VHViZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3Jlc3VsdHMvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJzZWFyY2hfcXVlcnlcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjY1NjVcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJUd2l0Y2hcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy50d2l0Y2gudHYvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIiA6IFwidGVybVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzlkNWNmZlwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIk5ldGZsaXhcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5uZXRmbGl4LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjUyNWJcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQcmltZSBWaWRlb1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnByaW1ldmlkZW8uY29tL3NlYXJjaC8/XCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJwaHJhc2VcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzM2JjZWFcIixcclxuXHRcdFx0XCJwYXJhbXNcIjogW1wiaWVcIixcIlVURjhcIl1cclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGFpbHltb3Rpb25cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5kYWlseW1vdGlvbi5jb20vc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCIgOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNlZWVcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWaW1lb1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdmltZW8uY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzJmYzZmZlwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIkh1bHVcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5odWx1LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM2Y2YxNmNcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJEaXNuZXkrXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9kaXNuZXlwbHVzLmNvbS9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM1YTdkZmZcIlxyXG5cdFx0IH0sXHJcblx0XHQgXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJURURcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy50ZWQuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNWM1MFwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZhbmRhbmdvXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuZmFuZGFuZ28uY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6ICdxJyxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjlmNDdcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQbGV4XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9hcHAucGxleC50di9kZXNrdG9wIyEvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmYTMzNFwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIlZ1ZHVcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy52dWR1LmNvbS9jb250ZW50L21vdmllcy9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInNlYXJjaFN0cmluZ1wiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzU5YTJmZlwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1ldGFjYWZlXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cubWV0YWNhZmUuY29tL3ZpZGVvc19hYm91dC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM1YTg2ZmZcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJWZW9oXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cudmVvaC5jb20vZmluZC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMyOWI4ZWVcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJBb2xcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5hb2wuY29tL3ZpZGVvL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNkZGRcIlxyXG5cdFx0IH1cclxuXHRdLFxyXG5cdFwiaW1hZ2VcIjogW1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHSVBIWVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZ2lwaHkuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM4Yjg0ZmZcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGbGlja3JcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5mbGlja3IuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNzNiY1wiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIlVuc3BsYXNoXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcy9waG90b3MvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZWVlXCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUGV4ZWxzXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjMzVkZmJkXCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRnJlZXBpa1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicXVlcnlcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM0Mjk2ZmZcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQaXhhYmF5XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9waG90b3Mvc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzVlZTg4N1wiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIkFkb2JlIFN0b2NrXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9zdG9jay5hZG9iZS5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJrXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZGRkXCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiU2h1dHRlcnN0b2NrXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuc2h1dHRlcnN0b2NrLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInNlYXJjaHRlcm1cIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjQ3M2FcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHZXR0eSBJbWFnZXNcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vcGhvdG9zL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2RkZFwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIlNtdWdNdWdcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5zbXVnbXVnLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjYjZmZjIzXCJcclxuXHRcdCB9LFxyXG5cdFx0IHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiNTAwcHhcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovLzUwMHB4LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMwMDk5ZTVcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQb2x5XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9wb2x5Lmdvb2dsZS5jb20vc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNTE3MlwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIkNDXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9zZWFyY2guY3JlYXRpdmVjb21tb25zLm9yZy9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM1ZmQxZmNcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJJbWd1clwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vaW1ndXIuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzNjZWE5OVwiXHJcblx0XHQgfSxcclxuXHRcdCB7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRldmlhbnRBcnRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5kZXZpYW50YXJ0LmNvbS9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzN2ZmYmVcIlxyXG5cdFx0IH0sXHJcblx0XHQge1xyXG5cdFx0XHRcIm5hbWVcIjogXCJEcmliYmJsZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2YwODJhY1wiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCZWhhbmNlXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmVoYW5jZS5uZXQvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJzZWFyY2hcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzNzdjZmZcIlxyXG5cdFx0fVxyXG5cdFx0IFxyXG5cdF0sXHJcblx0XCJhdWRpb1wiOiBbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlNwb3RpZnlcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzU4ZTA4N1wiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJTb3VuZENsb3VkXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjdkM2VcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQXBwbGUgTXVzaWNcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL211c2ljLmFwcGxlLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInRlcm1cIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjZiYjBcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGFzdC5mbVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3Lmxhc3QuZm0vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY1MTUxXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlBhbmRvcmFcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5wYW5kb3JhLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNDU3M2ZmXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlR1bmVJblwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdHVuZWluLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzM2ZDdjZFwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJEZWV6ZXJcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5kZWV6ZXIuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNlZWVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVElEQUxcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2xpc3Rlbi50aWRhbC5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZWVlXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkdlbml1c1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZ2VuaXVzLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmNWY1NzVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTXVzaXhtYXRjaFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3Lm11c2l4bWF0Y2guY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjcxNzFcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiaUhlYXJ0UmFkaW9cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5paGVhcnQuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjYwNmJcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQmFuZGNhbXBcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2JhbmRjYW1wLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM0YWIxY2RcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiSHlwZSBNYWNoaW5lXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cDovL2h5cGVtLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjOWVkNjY0XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlNob3V0Y2FzdFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZGlyZWN0b3J5LnNob3V0Y2FzdC5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzJiY2RkNFwiXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInNob3BwaW5nXCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQW1hem9uXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJrXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmZiYTUxXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkFsaUV4cHJlc3NcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5hbGlleHByZXNzLmNvbS93aG9sZXNhbGVcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcIlNlYXJjaFRleHRcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjYzNjNcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRWJheVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmViYXkuY29tL3NjaC9pLmh0bWxcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcIl9ua3dcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzMTkyZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiV2FsbWFydFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LndhbG1hcnQuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInF1ZXJ5XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmZjMjIwXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlRhcmdldFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnRhcmdldC5jb20vc1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwic2VhcmNoVGVybVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmMzUzNVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCZXN0IEJ1eVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmJlc3RidXkuY29tL3NpdGUvc2VhcmNocGFnZS5qc3BcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInN0XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZTZjYTAwXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkV0c3lcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5ldHN5LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjc4MWFcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiV2lzaFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3Lndpc2guY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzNWM3ZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWFjeXNcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5tYWN5cy5jb20vc2hvcC9mZWF0dXJlZC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjJiM2JcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiR3JvdXBvblwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3Lmdyb3Vwb24uY29tL2Jyb3dzZS8/XCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzZmZDcyMlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJDcmFpZ3NsaXN0XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9jcmFpZ3NsaXN0Lm9yZy9zZWFyY2gvc3NzXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2E1NDJmZlwiXHJcblx0XHR9XHJcblx0XSxcclxuXHRcImxvY2FsXCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRm91cnNxdWFyZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZm91cnNxdWFyZS5jb20vZXhwbG9yZVwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzYzODhmM1wiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHb29nbGUgTWFwc1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM0NjhjZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQmluZyBNYXBzXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vbWFwc1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzBhYzljOVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJUcmlwYWR2aXNvclwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnRyaXBhZHZpc29yLmNvbS9TZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzNGUwYTFcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiWWVscFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnllbHAuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwiZmluZF9kZXNjXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY1NDU0XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkJvb2tpbmdcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5ib29raW5nLmNvbS9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMyNjgxZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQWlyYm5iXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuYWlyYm5iLmNvbS9zL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI0ZGNUE1RlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNb292aXRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL21vb3ZpdGFwcC5jb20vXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJmcm9tXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY3ZjU4XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlViZXJcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3ViZXIuY29tL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2VlZVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJIRVJFIFdlR29cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3dlZ28uaGVyZS5jb20vc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzAxYjZiMlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJNYXBxdWVzdFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3Lm1hcHF1ZXN0LmNvbS9zZWFyY2gvcmVzdWx0c1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicXVlcnlcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNjNmRlNjNcIlxyXG5cdFx0fVxyXG5cdF0sXHJcblx0XCJuZXdzXCI6IFtcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUG9ja2V0XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9hcHAuZ2V0cG9ja2V0LmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY1NzZjXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1lZGl1bVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmMGYwZjBcIlxyXG5cdFx0IH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZsaXBib2FyZFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZmxpcGJvYXJkLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY1YjViXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRpZ2dcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwOi8vZGlnZy5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZWVlXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZlZWRseVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZmVlZGx5LmNvbS9pL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM1OWUwNzZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUmV1dGVyc1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3NlYXJjaC9uZXdzXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJibG9iXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmZhNTRiXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkJCQ1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmJiYy5jby51ay9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNlZWVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTlkgVGltZXNcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5ueXRpbWVzLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInF1ZXJ5XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZWVlXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkNOTlwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZWRpdGlvbi5jbm4uY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNTk1OVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHdWFyZGlhblwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vdGhlZ3VhcmRpYW4uY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzQwNzdkMFwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJIdWZmUG9zdFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3Lmh1ZmZwb3N0LmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcImtleXdvcmRzXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjMTJlZWJmXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZvcmJlc1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmZvcmJlcy5jb20vc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2VlZVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCbG9vbWJlcmdcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5ibG9vbWJlcmcuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicXVlcnlcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM2ZjY1ZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiV2FzaGluZ3RvbiBQb3N0XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tL25ld3NzZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2VlZVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJBbGphemVlcmFcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5hbGphemVlcmEuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZmIzNGNcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQVBcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5hcC5vcmcvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY1OTU2XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRXXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuZHcuY29tL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcIml0ZW1cIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMwMDk4ZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUlRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5ydC5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNzZiZDFkXCJcclxuXHRcdH1cclxuXHRdLFxyXG5cdFwiYWNhZGVtaWNcIjogW1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJXaWtpcGVkaWFcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHBcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInNlYXJjaFwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2RkZFwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHb29nbGUgU2Nob2xhclwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vc2Nob2xhci5nb29nbGUuY29tL3NjaG9sYXJcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM2NDlmZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUmVzZWFyY2hHYXRlXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cucmVzZWFyY2hnYXRlLm5ldC9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMwMGUxY2ZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWljcm9zb2Z0IEFjYWRlbWljXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9hY2FkZW1pYy5taWNyb3NvZnQuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzgzOTNmZlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJBY2FkZW1pYVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmFjYWRlbWlhLmVkdS9wZW9wbGUvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZWVlXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcImFyeGl2XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9hcnhpdi5vcmcvc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicXVlcnlcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjU5NTlcIixcclxuXHRcdFx0XCJwYXJhbXNcIjogW1wic2VhcmNodHlwZVwiLFwiYWxsXCJdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQTE9TIE9ORVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vam91cm5hbHMucGxvcy5vcmcvcGxvc29uZS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjdlZGFcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQ09SRVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vY29yZS5hYy51ay9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjlmNGVcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQkFTRVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmJhc2Utc2VhcmNoLm5ldC9TZWFyY2gvUmVzdWx0c1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwibG9va2ZvclwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmYzQ1N1wiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJTdGFjayBFeGNoYW5nZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vc3RhY2tleGNoYW5nZS5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNTE5ZGZmXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlF1b3JhXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cucXVvcmEuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNjk2NlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCcmFpbmx5XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9icmFpbmx5LmNvbS9hcHAvYXNrXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNjBkMzk5XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIldvbGZyYW0gQWxwaGFcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy53b2xmcmFtYWxwaGEuY29tL2lucHV0XCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJpXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY5YzU2XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkdvbGRlblwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZ29sZGVuLmNvbS9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZWZiZjU0XCJcclxuXHRcdH0sXHJcblx0XSxcclxuXHRcImNvZGVcIjogW1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJHaXRIdWJcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2dpdGh1Yi5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjYmVjYWQ4XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkRvY2tlciBIdWJcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2h1Yi5kb2NrZXIuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzRiYmZmZlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJucG1cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5ucG1qcy5jb20vc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmY1NDU0XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIllhcm5cIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3lhcm5wa2cuY29tL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzMwYmVmZlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQeVBJXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9weXBpLm9yZy9zZWFyY2gvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNDdhNGRhXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk51R2V0XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cubnVnZXQub3JnL3BhY2thZ2VzXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNGJiMGZmXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlBhY2thZ2lzdFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vcGFja2FnaXN0Lm9yZy9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInF1ZXJ5XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZmZhZTUxXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlJ1YnlHZW1zXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9ydWJ5Z2Vtcy5vcmcvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxdWVyeVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmNjI0OVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJDcmF0ZXNcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2NyYXRlcy5pby9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM3NGM1NzRcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiU3RhY2sgT3ZlcmZsb3dcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmYTA1NVwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJDb2RlUGVuXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9jb2RlcGVuLmlvL3NlYXJjaC9wZW5zXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZTJlMmUyXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkdsaXRjaFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vZ2xpdGNoLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmN2E0ZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiR2l0TGFiXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly9naXRsYWIuY29tL3B1YmxpY1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwibmFtZVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2ZmODM0NlwiXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJCaXRidWNrZXRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2JpdGJ1Y2tldC5vcmcvcmVwby9hbGwvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJuYW1lXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNGM5NGZmXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcInNlYXJjaGNvZGVcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3NlYXJjaGNvZGUuY29tL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiI2NhN2FmZlwiXHJcblx0XHR9XHJcblx0XHQvLyB7XHJcblx0XHQvLyBcdFwibmFtZVwiOiBcIlByb2R1Y3QgSHVudFwiLFxyXG5cdFx0Ly8gXHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LnByb2R1Y3RodW50LmNvbS9zZWFyY2hcIixcclxuXHRcdC8vIFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdC8vIFx0XCJjb2xvclwiOiBcIiNmZjc0NGNcIlxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0XCJuYW1lXCI6IFwiS2lja3N0YXJ0ZXJcIixcclxuXHRcdC8vIFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5raWNrc3RhcnRlci5jb20vZGlzY292ZXIvYWR2YW5jZWRcIixcclxuXHRcdC8vIFx0XCJxdWVyeVwiOiBcInRlcm1cIixcclxuXHRcdC8vIFx0XCJjb2xvclwiOiBcIiMxZGZmOWVcIlxyXG5cdFx0Ly8gfSxcclxuXHRcdC8vIHtcclxuXHRcdC8vIFx0XCJuYW1lXCI6IFwiSW5kaWVnb2dvXCIsXHJcblx0XHQvLyBcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuaW5kaWVnb2dvLmNvbS9leHBsb3JlL2FsbFwiLFxyXG5cdFx0Ly8gXHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0Ly8gXHRcImNvbG9yXCI6IFwiI2ZmM2E5NlwiXHJcblx0XHQvLyB9XHJcblx0XSxcclxuXHRcImpvYnNcIjogW1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJMaW5rZWRJblwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9qb2JzL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcImtleXdvcmRzXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjMWRhNmVlXCJcclxuXHRcdCB9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJJbmRlZWRcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5pbmRlZWQuY29tL2pvYnNcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzNzg4ZmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiR2xhc3Nkb29yXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuZ2xhc3Nkb29yLmNvbS9Kb2Ivam9icy5odG1cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInNjLmtleXdvcmRcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzN2RlNmZcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVXB3b3JrXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cudXB3b3JrLmNvbS9zZWFyY2gvcHJvZmlsZXMvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJxXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjODhmNDU2XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZpdmVyclwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmZpdmVyci5jb20vc2VhcmNoL2dpZ3NcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInF1ZXJ5XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjM2ZjYTg5XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1vbnN0ZXJcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3d3dy5tb25zdGVyLmNvbS9qb2JzL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM5NzVmZjBcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiWmlwUmVjcnVpdGVyXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuemlwcmVjcnVpdGVyLmNvbS9jYW5kaWRhdGUvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJzZWFyY2hcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNiMmU1MjJcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTGlua1VwXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cubGlua3VwLmNvbS9zZWFyY2gvcmVzdWx0cy9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNiNmYyNDBcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRGljZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmRpY2UuY29tL2pvYnNcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNmZjNhNDFcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiQ2FyZWVyQnVpbGRlclwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmNhcmVlcmJ1aWxkZXIuY29tL2pvYnNcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcImtleXdvcmRzXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNGFhZGZhXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlNpbXBseUhpcmVkXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly93d3cuc2ltcGx5aGlyZWQuY29tL3NlYXJjaFwiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwicVwiLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzMwOWZmZlwiXHJcblx0XHR9XHJcblx0XSxcclxuXHRcInRvcnJlbnRcIjogW1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJQaXJhdGUgQmF5XCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly90aGVwaXJhdGViYXkub3JnL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiM5ZDY4NDRcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiUkFSQkdcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL3JhcmJncHJveGllZC5vcmcvdG9ycmVudHMucGhwXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJzZWFyY2hcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiMzODYwYmJcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiMTMzN1hcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovLzEzMzd4LnRvL3NlYXJjaC9cIixcclxuXHRcdFx0XCJxdWVyeVwiOiBmYWxzZSxcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNkNjM2MDBcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVG9ycmVudHoyXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly90b3JyZW50ejIuZXUvc2VhcmNoXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJmXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjMzY5XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlpvb3FsZVwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vem9vcWxlLmNvbS9zZWFyY2hcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInFcIixcclxuXHRcdFx0XCJjb2xvclwiOiBcIiNiNWIzNTlcIlxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiWVRTXCIsXHJcblx0XHRcdFwiYWN0aW9uXCI6IFwiaHR0cHM6Ly95dHMuc3UvbW92aWVzXCIsXHJcblx0XHRcdFwicXVlcnlcIjogXCJrZXl3b3JkXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjNkFDMDQ1XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkxpbWVUb3JyZW50c1wiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHBzOi8vd3d3LmxpbWV0b3JyZW50cy5pbmZvL3NlYXJjaC9hbGwvXCIsXHJcblx0XHRcdFwicXVlcnlcIjogZmFsc2UsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjYjZmMjQwXCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkV4dHJhVG9ycmVudFwiLFxyXG5cdFx0XHRcImFjdGlvblwiOiBcImh0dHA6Ly9leHRyYXRvcnJlbnQuY2Qvc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IFwic2VhcmNoXCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjMDA2N2E5XCJcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkVaVFZcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2V6dHYuYWcvc2VhcmNoL1wiLFxyXG5cdFx0XHRcInF1ZXJ5XCI6IGZhbHNlLFxyXG5cdFx0XHRcImNvbG9yXCI6IFwiIzEwNTU5ZVwiXHJcblx0XHR9XHJcblx0XSxcclxuXHRcImFyY2hpdmluZ1wiOiBbXHJcblx0XHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWJfYXJjaGl2aW5nXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkludGVybmV0IEFyY2hpdmVcIixcclxuXHRcdFx0XCJhY3Rpb25cIjogXCJodHRwczovL2FyY2hpdmUub3JnL3NlYXJjaC5waHBcIixcclxuXHRcdFx0XCJxdWVyeVwiOiBcInF1ZXJ5XCIsXHJcblx0XHRcdFwiY29sb3JcIjogXCIjZDhkOGQ4XCJcclxuXHRcdH1cclxuXHRdXHJcbiB9XHJcbi8vIGNvbnNvbGUubG9nKHR5cGVvZiBzZWFyY2hQYXJhbXMsIHNlYXJjaFBhcmFtcyk7IiwiLypcclxuXHRGdW5jdGlvbnNcclxuXHQtIGNvcmUgc2VhcmNoIGZ1bmN0aW9ucyAoZGVwZW5kcyAnc2VhcmNoLXBhcmFtcy5qcycpXHJcbiovXHJcblxyXG5jb25zdCBcdHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXHJcblx0XHRib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHJcbi8vIGZvcm0gZWxlbWVudHNcclxuY29uc3RcdHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKSwgLy8gXCJmb3JtXCIgZWxlbWVudCAoZm9yIGNoYW5nZSBcImFjdGlvblwiKVxyXG5cdFx0Zm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpLCAvLyBcImlucHV0XCIgZWxlbWVudCAoZm9yIGNoYW5nZSBcIm5hbWVcIiAmIFwidmFsdWVcIilcclxuXHRcdGhlbHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWxwZXInKTsgLy8gaGVscGVyIFwiaW5wdXRcIiAoZm9yIGFkZGl0aW9uYWwgYXR0cmlidXRlcyBcIm5hbWVcIiAmIFwidmFsdWVcIilcclxuXHJcbi8vIGNvbnNvbGUgbG9nIGNvbG9yc1xyXG5jb25zdCBcdGxvZ0NhY2hlID0gJ2JhY2tncm91bmQ6bGlnaHRncmVlbjtjb2xvcjojMDAwOycsXHJcblx0XHRsb2dBY3Rpb24gPSAnYmFja2dyb3VuZDphcXVhO2NvbG9yOiMwMDA7JyxcclxuXHRcdGxvZ0JlaGF2aW9yID0gJ2JhY2tncm91bmQ6eWVsbG93O2NvbG9yOiMwMDA7JztcclxuXHJcbi8vIG9wZW4gJiBjbG9zZSB0YWJzXHJcbmZ1bmN0aW9uIG9wZW5UYWIodGFiTmFtZSkge1xyXG5cclxuXHR2YXIgaTtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFiJyk7XHJcblx0Zm9yIChpPTA7IGkgPCBkaXYubGVuZ3RoOyBpKyspIHtcclxuXHRcdGRpdltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH1cclxuXHRcdFxyXG4gICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ29wZW4tdGFiJyk7XHJcblx0Zm9yIChpPTA7IGkgPCBidXR0b24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdGJ1dHRvbltpXS5jbGFzc05hbWUgPSBidXR0b25baV0uY2xhc3NOYW1lLnJlcGxhY2UoJyB0YWItYWN0aXZlJywgJycpO1xyXG5cdH1cclxuXHRcdFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiTmFtZSkuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG5cdGV2ZW50ICs9ICcgdGFiLWFjdGl2ZSc7XHJcbn1cclxuXHJcbi8vIHNldCBzdHlsZVxyXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCBjb2xvcikge1xyXG5cclxuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHRpZiAoIG5hbWUuaW5kZXhPZignXFwuJykgKSB7XHJcblx0XHQvLyByZW1vdmUgcG9pbnRzIFwiLlwiIGZyb20gc3RyaW5nXHJcblx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9cXC4vZywgXCJcIik7XHJcblx0fVxyXG5cdGlmICggbmFtZS5pbmRleE9mKCcgJykgKSB7XHJcblx0XHQvLyBpZiBzdHJpbmcgYWxzbyBoYXZlIHdoaXRlIHNwYWNlcyBzZXQgXCItXCIgdG8gaW1hZ2UgcGF0aFxyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvIC9nLCctJyk7XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgU1ZHIGxvZ29cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1pbWdcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ2ltYWdlcy9sb2dvcy9cIiArIG5hbWUgKyBcIi5zdmcnKVwiO1xyXG5cclxuXHQvLyBzZXQgVUkgY29sb3JcclxuXHRyb290LnN0eWxlLnNldFByb3BlcnR5KCctLWFjdGl2ZS1jb2xvcicsIGNvbG9yKTtcclxuXHJcbn1cclxuXHJcbi8vIHNldCBmb3JtIHBhcmFtZXRlcnNcclxuZnVuY3Rpb24gc2V0Rm9ybShhY3Rpb24sIHF1ZXJ5LCBoZWxwZXJzKSB7XHJcblxyXG5cdC8vIGNoZWNrIGlmIG5lZWQgdG8gcmVtb3ZlIHBhcmFtZXRlcnMgZnJvbSBvdXRwdXQgVVJMXHJcblx0aWYgKCBxdWVyeSA9PSBmYWxzZSApIHtcclxuXHJcblx0XHQvLyBjbGVhciBxdWVyeSAmIGhlbHBlcnNcclxuXHRcdGZvcm1JbnB1dC5uYW1lID0gXCJcIjtcclxuXHRcdGhlbHBlci5uYW1lID0gXCJcIjtcclxuXHRcdGhlbHBlci52YWx1ZSA9IFwiXCI7XHJcblxyXG5cdFx0Ly8gcmVkZWZpbmUgZm9ybSBhY3Rpb24gZm9yIGNsZWFuIFVSTCAoaXNzdWU6IHJlbW92ZSAnPycgZnJvbSBvdXRwdXQgVVJMKVxyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlUGFyYW1zKCkge1xyXG5cdFx0XHRzZWFyY2hGb3JtLmFjdGlvbiA9IGFjdGlvbiArIGVuY29kZVVSSUNvbXBvbmVudChmb3JtSW5wdXQudmFsdWUpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY2FsbCBmdW5jdGlvblxyXG5cdFx0c2VhcmNoRm9ybS5vbnN1Ym1pdCA9IHJlbW92ZVBhcmFtcztcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdC8vIGFjdGlvblxyXG5cdFx0c2VhcmNoRm9ybS5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHQvLyBxdWVyeVxyXG5cdFx0Zm9ybUlucHV0Lm5hbWUgPSBxdWVyeTtcclxuXHJcblx0XHQvLyBpZiBoYXZlIGhlbHBlcnMgcGFyYW1ldGVycywgc2V0IHRoZW1cclxuXHRcdGlmICggaGVscGVycyAhPSBcIlwiICkge1x0XHJcblx0XHRcdGhlbHBlci5uYW1lID0gaGVscGVyc1swXTtcclxuXHRcdFx0aGVscGVyLnZhbHVlID0gaGVscGVyc1sxXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIGNsZWFyIGhlbHBlcnNcclxuXHRcdFx0aGVscGVyLm5hbWUgPSBcIlwiO1xyXG5cdFx0XHRoZWxwZXIudmFsdWUgPSBcIlwiO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGZhbGxiYWNrIGZvciBjbGVhbiBVUkxcclxuXHRcdHNlYXJjaEZvcm0ub25zdWJtaXQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0aW5wdXRGb2N1cygpO1xyXG59XHJcblxyXG4vLyByZXNldCBmb3JtXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuXHJcblx0Ly8gcmVzZXQgZm9ybSB2YWx1ZXNcclxuXHRzZWFyY2hGb3JtLnJlc2V0KCk7XHJcblx0XHJcblx0Ly8gcmVtb3ZlIHJlc2V0IGJ1dHRvblxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHJcblx0aW5wdXRGb2N1cygpO1xyXG59XHJcbi8vIHNob3cgcmVzZXQgYnV0dG9uIG9ubHkgd2hlbiB1c2VyIHR5cGUgb24gaW5wdXRcclxuZnVuY3Rpb24gY2hlY2tWYWx1ZSgpIHtcclxuXHJcblx0aWYgKCBmb3JtSW5wdXQudmFsdWUgIT09IFwiXCIgKSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQtYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1idXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0fVxyXG59XHJcbi8vIGZvcm0gZm9jdXNcclxuZnVuY3Rpb24gaW5wdXRGb2N1cygpIHtcclxuXHRmb3JtSW5wdXQuZm9jdXMoKTsgXHJcblx0Y29uc29sZS5sb2coXCIlY2ZvY3VzXCIsIGxvZ0JlaGF2aW9yKTtcclxufVxyXG5cclxuLy8gZ2VuZXJhdGUgc2VhcmNoIHNlcnZpY2VzIGJ1dHRvbnMgYW5kIHB1dCBpbnRvIGNvcnJlc3BvbmRpbmcgY2F0ZWdvcnkgdGFiXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVGFiQnRucyhjYXRlZ29yeSkge1xyXG5cclxuXHR2YXIgYnRuID0gXCJcIjtcclxuXHJcblx0Ly8gaXRlcmF0ZSB0byBjb25zdHJ1Y3QgYnV0dG9uc1xyXG5cdGZvciAoIHZhciBpIGluIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV0gKSB7XHJcblxyXG5cdFx0Ly8gZ2V0IG5hbWVcclxuXHRcdHZhciBuYW1lID0gc2VhcmNoUGFyYW1zW2NhdGVnb3J5XVtpXS5uYW1lO1xyXG5cclxuXHRcdC8vIHNldCBlbGVtZW50IElEXHJcblx0XHR2YXIgbiA9IG5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHQvLyByZXBsYWNlIHdoaXRlIHNwYWNlcyBcIiBcIiB3aXRoIFwiX1wiXHJcblx0XHRpZiAoIG4uaW5kZXhPZignICcpICkge1xyXG5cdFx0XHRuID0gbi5yZXBsYWNlKC8gL2csJ18nKTtcclxuXHRcdH1cclxuXHRcdC8vIHJlcGxhY2UgXCIuXCIgb3IgXCIrXCIgd2l0aCBcIl9fXCJcclxuXHRcdGlmICggbi5pbmRleE9mKFwiLlwiKSApIHtcclxuXHRcdFx0biA9IG4ucmVwbGFjZSgvXFwuL2csIFwiX19cIik7XHJcblx0XHR9XHJcblx0XHQvLyByZXBsYWNlIFwiK1wiIHdpdGggXCJfX19cIlxyXG5cdFx0aWYgKCBuLmluZGV4T2YoXCIrXCIpICkge1xyXG5cdFx0XHRuID0gbi5yZXBsYWNlKC9cXCsvZywgXCJfX19cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0YnRuICs9IFwiPGJ1dHRvbiBuYW1lPSdcIisgY2F0ZWdvcnkgK1wiJyBpZD0nXCIrIG4gK1wiJz5cIisgbmFtZSArXCI8L2J1dHRvbj5cIjtcclxuXHR9XHJcblxyXG5cdC8vIGdldCBjYXRlZ29yeSB0YWIgbmFtZVxyXG5cdHZhciB0YWJOYW1lID0gU3RyaW5nKGNhdGVnb3J5K1wiLXRhYlwiKTtcclxuXHQvLyBhcHBlbmQgZWFjaCBlbGVtZW50XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiTmFtZSkuaW5uZXJIVE1MID0gYnRuO1xyXG5cclxufVxyXG4vLyBnZW5lcmF0ZSBvcHRpb25zIGZvciBzZWxlY3QgKGlmIHNlYXJjaCBoYXZlIGNoaWxkcylcclxuZnVuY3Rpb24gZ2VuZXJhdGVPcHRzKG5hbWUsIHZhbHVlKSB7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3B0aW9uc1wiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsICc8b3B0aW9uIHZhbHVlPVwiJyt2YWx1ZSsnXCI+JytuYW1lKyc8L29wdGlvbj4nKTtcclxufVxyXG5cclxuLy8gY2hhbmdlIGxheW91dFxyXG5mdW5jdGlvbiBjaGFuZ2VMYXlvdXQoKSB7XHJcblxyXG5cdHZhciBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxheW91dC1idXR0b25cIik7XHJcblxyXG5cdGJ1dHRvbi5pbm5lckhUTUwgPSAnJztcclxuXHJcblx0aWYgKCBib2R5LmNsYXNzTGlzdC5jb250YWlucygndGhlbWUtMScpICkge1xyXG5cclxuXHRcdGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgndGhlbWUtMScpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCd0aGVtZS0yJyk7XHJcblx0XHRidXR0b24uaW5uZXJIVE1MID0gJzxpIGRhdGEtZmVhdGhlcj1cImdyaWRcIj48L2k+JztcclxuXHJcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xheW91dCcsIDIpO1xyXG5cdH0gZWxzZSB7XHJcblxyXG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZS0yJyk7XHJcblx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ3RoZW1lLTEnKTtcclxuXHRcdGJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgZGF0YS1mZWF0aGVyPVwic2lkZWJhclwiPjwvaT4nO1xyXG5cclxuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0JywgMSk7XHJcblx0fVxyXG5cclxuXHRpbnB1dEZvY3VzKCk7XHJcblx0ZmVhdGhlci5yZXBsYWNlKCk7XHJcbn1cclxuLy8gY2hhbmdlIHRoZW1lXHJcbmZ1bmN0aW9uIGNoYW5nZVRoZW1lKCkge1xyXG5cclxuXHR2YXIgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aGVtZS1idXR0b25cIik7XHJcblx0YnV0dG9uLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHR2YXIgeCA9IGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS10cmFuc2x1Y2VudC1kYXJrLWNvbG9yJyk7XHJcblx0dmFyIHkgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tYWN0aXZlLWNvbG9yJyk7XHJcblxyXG5cdC8vIGlmIGRvbid0IGhhdmUgZGFyayB0aGVtZVxyXG5cdGlmICggYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3RoZW1lLWxpZ2h0JykgKSB7XHJcblxyXG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZS1saWdodCcpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QuYWRkKCd0aGVtZS1kYXJrJyk7XHJcblx0XHRyb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbHVjZW50LWNvbG9yJywgeCk7XHJcblx0XHRyb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRleHQtY29sb3InLCB5KTtcclxuXHRcdGJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgZGF0YS1mZWF0aGVyPVwic3VuXCI+PC9pPic7XHJcblxyXG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XHJcblxyXG5cdH0gZWxzZSB7XHJcblxyXG5cdFx0Ym9keS5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZS1kYXJrJyk7XHJcblx0XHRib2R5LmNsYXNzTGlzdC5hZGQoJ3RoZW1lLWxpZ2h0Jyk7XHJcblx0XHRyb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbHVjZW50LWNvbG9yJywgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjIpJyk7XHJcblx0XHRyb290LnN0eWxlLnNldFByb3BlcnR5KCctLXRleHQtY29sb3InLCAnIzAwMCcpO1xyXG5cdFx0YnV0dG9uLmlubmVySFRNTCA9ICc8aSBkYXRhLWZlYXRoZXI9XCJtb29uXCI+PC9pPic7XHJcblxyXG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdsaWdodCcpO1xyXG5cdH1cclxuXHJcblx0aW5wdXRGb2N1cygpO1xyXG5cdGZlYXRoZXIucmVwbGFjZSgpO1xyXG59XHJcblxyXG4vLyBnZXQgYnJvd3NlciBVc2VyIEFnZW50IGZvciBTaGFyZVxyXG5mdW5jdGlvbiBnZXRVc2VyQWdlbnQoKSB7XHJcblx0dmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmE7XHJcbiAgXHJcblx0Ly8gV2luZG93c1xyXG5cdGlmICgvd2luZG93cyBwaG9uZS9pLnRlc3QodXNlckFnZW50KSkge1xyXG5cdFx0cmV0dXJuIFwiV2luZG93cyBQaG9uZVwiO1xyXG5cdH1cclxuXHQvLyBBbmRyb2lkXHJcblx0aWYgKC9hbmRyb2lkL2kudGVzdCh1c2VyQWdlbnQpKSB7XHJcblx0XHRyZXR1cm4gXCJBbmRyb2lkXCI7XHJcblx0fVxyXG5cdC8vIGlPUyAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzkwMzk4ODUvMTc3NzEwXHJcblx0aWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KHVzZXJBZ2VudCkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xyXG5cdFx0cmV0dXJuIFwiaU9TXCI7XHJcblx0fVxyXG5cdHJldHVybiBcIm90aGVyXCI7XHJcbn1cclxuLy8gY29weSB0ZXh0IHRvIGNsaXBib2FyZFxyXG5mdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoc3RyKSB7XHJcblx0Y29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG5cdGVsLnZhbHVlID0gc3RyO1xyXG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG5cdGVsLnNlbGVjdCgpO1xyXG5cdGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcblx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcblx0aW5wdXRGb2N1cygpO1xyXG59O1xyXG5cclxuXHJcbi8qXHJcblx0RXZlbnRzXHJcblx0LSBpbnRlcmNlcHQgZWxlbWVudHMgdGhhdCBjYW4gY2hhbmdlIGdlbmVyYWwgc2VhcmNoIG9wdGlvbnNcclxuKi9cclxuXHJcbi8vIGludGVyY2VwdCBIVE1MIHRvIGdlbmVyYXRlIHRhYiBidXR0b25zXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaSBidXR0b24nKS5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcclxuXHRnZW5lcmF0ZVRhYkJ0bnMobm9kZS5uYW1lKTtcclxufSk7XHJcblxyXG4vLyBuYXZpZ2F0aW9uIG1lbnUgYnV0dG9ucyAoc2VhcmNoIGNhdGVnb3JpZXMpXHJcbiQoXCJuYXYgPiB1bCA+IGxpID4gYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vIHRvZ2dsZSBhY3RpdmUgc3R5bGVcclxuXHQkKFwibmF2ID4gdWwgPiBsaSA+IGJ1dHRvblwiKS5yZW1vdmVDbGFzcygnbmF2LWFjdGl2ZScpO1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoXCJuYXYtYWN0aXZlXCIpO1xyXG5cclxuXHQvLyBnZXQgSUQgJiBpbmRleFxyXG5cdHZhciBpZCA9ICQodGhpcykuYXR0cihcIm5hbWVcIikudG9Mb3dlckNhc2UoKSxcclxuXHRcdGluZGV4ID0gJChcIm5hdiA+IHVsID4gbGkgPiBidXR0b25cIikuaW5kZXgodGhpcyk7XHJcblxyXG5cdC8vIHRvZ2dsZSBhY3RpdmUgVGFiXHJcblx0JChcIiN0YWJzXCIpLmZpbmQoXCIudGFiXCIpLnJlbW92ZUNsYXNzKCd0YWItYWN0aXZlJyk7XHJcblx0JChcIiN0YWJzXCIpLmZpbmQoXCIjXCIraWQrXCItdGFiXCIpLmFkZENsYXNzKFwidGFiLWFjdGl2ZVwiKTtcclxuXHQvLyBkaXNwbGF5IHJlbGF0ZWQgVGFiXHJcblx0b3BlblRhYihpZCArICctdGFiJyk7XHJcblxyXG5cdC8vIENhY2hlOiBpZiBtYXRjaCB3aXRoIGN1cnJlbnQgTmF2XHJcblx0aWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlTmF2JykgPT0gaW5kZXgpIHtcclxuXHRcdC8vIENhY2hlOiBpZiBoYXZlIFNlYXJjaCBjbGljayB0aGVtXHJcblx0XHRpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVTZWFyY2gnKSkge1xyXG5cdFx0XHQkKCcjJyArIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlU2VhcmNoJykpLmNsaWNrKCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCclY0NhY2hlIGZvdW5kOiBTZWFyY2ggJyArIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlU2VhcmNoJyksIGxvZ0NhY2hlKTtcclxuXHRcdH1cclxuXHR9IGVsc2UgeyAvLyBjbGljayBvbiBmaXJzdCBTZWFyY2ggaXRlbVxyXG5cdFx0JChcIi50YWItYWN0aXZlID4gYnV0dG9uOmZpcnN0LWNoaWxkXCIpLmNsaWNrKCk7XHJcblx0fVxyXG5cclxuXHQvLyBjYWxsIHJlbGF0ZWQgQVBJIChUcmVuZHMgV2lkZ2V0KVxyXG5cdHN3aXRjaChpZCkge1xyXG5cdFx0Y2FzZSAnd2ViJzpcclxuXHRcdFx0Z2V0V2ViKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnc29jaWFsJzpcclxuXHRcdFx0Z2V0U29jaWFsKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAndmlkZW8nOlxyXG5cdFx0XHRnZXRWaWRlbygpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2ltYWdlJzpcclxuXHRcdFx0Z2V0SW1hZ2UoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdhdWRpbyc6XHJcblx0XHRcdGdldEF1ZGlvKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAnc2hvcHBpbmcnOlxyXG5cdFx0XHRnZXRTaG9wcGluZygpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2xvY2FsJzpcclxuXHJcblx0XHRcdC8vIGNoZWNrIGlmIGdlb2xvY2F0aW9uIGlzIGFjdGl2ZVxyXG5cdFx0XHRpZiAoaGFzR2VvbG9jYXRpb24gPT0gMCkge1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmVuZHMtdGl0bGUnKS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlbmRzLWJsb2NrJykuaW5uZXJIVE1MID0gJzxwIGlkPVwid2FybmluZy1sb2NhbFwiPkFsbG93IGxvY2FsaXphdGlvbiBhY2Nlc3MgdG8gc2VlIGxvY2FsIHRyZW5kczxwPiA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGFzay1nZW9sb2NhdGlvblwiIG9uY2xpY2s9XCJnZXRHZW9sb2NhdGlvbigpXCI+PGkgZGF0YS1mZWF0aGVyPVwibmF2aWdhdGlvblwiPjwvaT5BbGxvdyBsb2NhbGl6YXRpb248L2J1dHRvbj4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGdldExvY2FsKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICduZXdzJzpcclxuXHRcdFx0Z2V0TmV3cygpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2FjYWRlbWljJzpcclxuXHRcdFx0Z2V0QWNhZGVtaWMoKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlICdjb2RlJzpcclxuXHRcdFx0Z2V0Q29kZSgpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdC8vIGFsZXJ0KCdObyBBUEkgcmVsYXRlZCB0byB0aGlzIGNhdGVnb3J5LiBTaG93aW5nIGRlZmF1bHQuJyk7XHJcblx0XHRcdGdldFdlYigpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2FjaGU6IHN0b3JlIE5hdiBpbmRleFxyXG5cdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlTmF2JywgaW5kZXgpO1xyXG59KTtcclxuXHJcbi8vIHRhYiBidXR0b25zIChzZWFyY2ggc2VydmljZXMpXHJcbiQoXCIudGFiID4gYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vIHRvZ2dsZSBhY3RpdmUgc3R5bGVcclxuXHQkKFwiLnRhYiA+IGJ1dHRvblwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0JCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcblx0Ly8gZ2V0IGJ1dHRvbiBJRCAmIG5hbWUgYXR0cmlidXRlIChzZWFyY2ggY2F0ZWdvcnkpXHJcblx0dmFyIGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIiksXHJcblx0XHRjYXRlZ29yeSA9ICQodGhpcykuYXR0cihcIm5hbWVcIik7XHJcblxyXG5cdC8vIGJ1dHRvbiBJRCBtdXN0IG1hdGNoIGJhY2sgdG8gb3JpZ2luYWwgbmFtZSBpbiBzZWFyY2hQYXJhbXMsIHNvOlxyXG5cdHZhciBuYW1lSWQgPSBpZCxcclxuXHRcdHVuZGVyc2NvcmUgPSAobmFtZUlkLm1hdGNoKC9fL2cpfHxbXSkubGVuZ3RoO1xyXG5cclxuXHRzd2l0Y2ggKHVuZGVyc2NvcmUpIHsgLy8gY291bnQgXCJfXCIgb2NjdXJyZW5jZXNcclxuXHRcdGNhc2UgMTpcclxuXHRcdFx0bmFtZUlkID0gbmFtZUlkLnJlcGxhY2UoL18vZywnICcpOyAvLyBwdXQgYmFjayB3aGl0ZSBzcGFjZXMgXCIgXCJcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDI6XHJcblx0XHRcdG5hbWVJZCA9IG5hbWVJZC5yZXBsYWNlKC9fXy9nLCBcIi5cIik7IC8vIHB1dCBiYWNrIHBvaW50cyBcIi5cIlxyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMzpcclxuXHRcdFx0bmFtZUlkID0gbmFtZUlkLnJlcGxhY2UoL19fXy9nLCBcIitcIik7IC8vIHB1dCBiYWNrIHBsdXMgXCIrXCJcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHQvLyBpdGVyYXRlIHNlYXJjaCBwYXJhbWV0ZXJzIGZyb20gc2VhcmNoUGFyYW1zXHJcblx0dmFyIGksIGosIG5hbWUsIGFjdGlvbiwgcXVlcnksIGNvbG9yLCBoZWxwZXJzID0gXCJcIjtcclxuXHJcblx0Zm9yIChpIGluIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV0pIHtcclxuXHRcdFxyXG5cdFx0Ly8gaWYgYnV0dG9uIGlkIG1hdGNoIHdpdGggbmFtZVxyXG5cdFx0aWYgKG5hbWVJZCA9PSBzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2ldLm5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG5cclxuXHRcdFx0bmFtZSA9IHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baV0ubmFtZTtcclxuXHRcdFx0YWN0aW9uID0gc2VhcmNoUGFyYW1zW2NhdGVnb3J5XVtpXS5hY3Rpb247XHJcblx0XHRcdHF1ZXJ5ID0gc2VhcmNoUGFyYW1zW2NhdGVnb3J5XVtpXS5xdWVyeTtcclxuXHRcdFx0Y29sb3IgPSBzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2ldLmNvbG9yO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnU2VhcmNoIHByb3BlcnRpZXM6JywgY2F0ZWdvcnksIGlkLCBuYW1lLCBhY3Rpb24sIHF1ZXJ5LCBjb2xvcik7XHJcblxyXG5cdFx0XHQvLyBhZGRpdGlvbmFsIHBhcmFtczogc2V0IGFzIFwiaGVscGVyc1wiXHJcblx0XHRcdGlmIChzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2ldLnBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRoZWxwZXJzID0gW3NlYXJjaFBhcmFtc1tjYXRlZ29yeV1baV0ucGFyYW1zWzBdLCBzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2ldLnBhcmFtc1sxXV07XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ1NlYXJjaCBhZGRpdGlvbmFsIHBhcmFtZXRlcnM6JywgaGVscGVycyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGNoaWxkcyBwYXJhbXM6IHNob3cgc2VsZWN0IG9wdGlvbnMgKG9mIHRoZSBjdXJyZW50IHNlYXJjaCBwcm92aWRlcilcclxuXHRcdFx0aWYgKHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baV0uY2hpbGRzKSB7XHJcblxyXG5cdFx0XHRcdCQoXCIjb3B0aW9uc1wiKS5zaG93KCk7XHJcblx0XHRcdFx0JChcIiNvcHRpb25zID4gb3B0aW9uXCIpLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0XHQvLyBzZXQgZmlyc3Qgb3B0aW9uXHJcblx0XHRcdFx0Z2VuZXJhdGVPcHRzKFwiQWxsXCIsIGNhdGVnb3J5ICtcIl9cIisgaSArXCJfXCIrIG5hbWUpO1xyXG5cclxuXHRcdFx0XHQvLyBpdGVyYXRlXHJcblx0XHRcdFx0Zm9yIChqIGluIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baV0uY2hpbGRzKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIG9wdGlvbiA9IHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baV0uY2hpbGRzW2pdLm5hbWU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGdlbmVyYXRlT3B0cyhvcHRpb24sIGNhdGVnb3J5ICtcIl9cIisgaSArXCJfXCIrIG9wdGlvbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoXCIjb3B0aW9uc1wiKS5oaWRlKCk7XHJcblx0XHRcdFx0JChcIiNvcHRpb25zID4gb3B0aW9uXCIpLnJlbW92ZSgpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0U3R5bGUobmFtZSwgY29sb3IpO1xyXG5cdHNldEZvcm0oYWN0aW9uLCBxdWVyeSwgaGVscGVycyk7XHJcblx0Z2V0UHJpdmFjeVJhbmsoYWN0aW9uKTtcclxuXHJcblx0Ly8gQ2FjaGluZyAtIHN0b3JlIHNlYXJjaCBwcm92aWRlciBJRFxyXG5cdHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZlU2VhcmNoJywgaWQpO1xyXG59KTtcclxuXHJcbi8vIG9wdGlvbnMgKHNlYXJjaCBjaGlsZHMpXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcHRpb25zJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyxmdW5jdGlvbigpe1xyXG5cclxuXHQvLyBpdGVyYXRlIG92ZXIgb3B0aW9uIHZhbHVlIHRvIGlkZW50aWZ5IHJlbGF0ZWQgY2hpbGRcclxuXHR2YXIgYSA9IHRoaXMudmFsdWUuc3BsaXQoXCJfXCIpLFxyXG5cdFx0Y2F0ZWdvcnkgPSBhWzBdLFxyXG5cdFx0aXRlbSA9IGFbMV0sXHJcblx0XHRvcHRpb24gPSBhWzJdLFxyXG5cdFx0YWN0aW9uLCBxdWVyeSwgaGVscGVycyA9IFwiXCI7XHJcblxyXG5cdC8vIHNldCBjdXJyZW50IHNlYXJjaCBwcm92aWRlciBkZWZhdWx0IHBhcmFtc1xyXG5cdGFjdGlvbiA9IHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baXRlbV0uYWN0aW9uO1xyXG5cdHF1ZXJ5ID0gc2VhcmNoUGFyYW1zW2NhdGVnb3J5XVtpdGVtXS5xdWVyeTtcclxuXHJcblx0Ly8gaXRlcmF0ZSBjaGlsZHMgdG8gc2V0IHRoZWlyIHNwZWNpZmljIHBhcmFtc1xyXG5cdGZvciAoIHZhciBpIGluIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baXRlbV0uY2hpbGRzICkge1xyXG5cclxuXHRcdC8vIGlmIGV4aXN0c1xyXG5cdFx0aWYgKCBvcHRpb24gPT0gc2VhcmNoUGFyYW1zW2NhdGVnb3J5XVtpdGVtXS5jaGlsZHNbaV0ubmFtZSApIHtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCBzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2l0ZW1dLmNoaWxkc1tpXS5uYW1lICk7XHJcblxyXG5cdFx0XHQvLyBoYXZlIGFkZGl0aW9uYWwgcGFyYW1zOiBzZXQgYXMgXCJoZWxwZXJzXCJcclxuXHRcdFx0aWYgKCBzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2l0ZW1dLmNoaWxkc1tpXS5wYXJhbXMgKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVscGVycyA9IFtzZWFyY2hQYXJhbXNbY2F0ZWdvcnldW2l0ZW1dLmNoaWxkc1tpXS5wYXJhbXNbMF0sIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baXRlbV0uY2hpbGRzW2ldLnBhcmFtc1sxXV07XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaGF2ZSBjdXN0b20gYWN0aW9uOiBjaGFuZ2UgZGVmYXVsdFxyXG5cdFx0XHRpZiAoIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baXRlbV0uY2hpbGRzW2ldLmFjdGlvbiApIHtcclxuXHJcblx0XHRcdFx0YWN0aW9uID0gc2VhcmNoUGFyYW1zW2NhdGVnb3J5XVtpdGVtXS5jaGlsZHNbaV0uYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIGhhdmUgY3VzdG9tIHF1ZXJ5OiBjaGFuZ2UgZGVmYXVsdFxyXG5cdFx0XHRpZiAoIHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baXRlbV0uY2hpbGRzW2ldLnF1ZXJ5ICkge1xyXG5cclxuXHRcdFx0XHRxdWVyeSA9IHNlYXJjaFBhcmFtc1tjYXRlZ29yeV1baXRlbV0uY2hpbGRzW2ldLnF1ZXJ5O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHNldEZvcm0oYWN0aW9uLCBxdWVyeSwgaGVscGVycyk7XHJcblxyXG59KTtcclxuXHJcbi8vIHRoZW1lIGJ1dHRvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoZW1lLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlVGhlbWUpO1xyXG5cclxuLy8gbGF5b3V0IGJ1dHRvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxheW91dC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUxheW91dCk7XHJcblxyXG4vLyBtb3JlIGJ1dHRvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcmUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZNb3JlXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJkaXZtb3JlLWFjdGl2ZVwiKTtcclxufSk7XHJcblxyXG4vLyBtb2RhbHNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuXHR2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xyXG5cclxuXHQvLyBvcGVuIG1vZGFsXHJcbiAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpID09ICdtb2RhbCcpIHtcclxuXHJcblx0XHRmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIHZhciBtX0lEID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobV9JRCkuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaWYgc2hhcmUgbW9kYWxcclxuXHRcdGlmICggdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSA9PSAnbW9kYWwtc2hhcmUnICkge1xyXG5cclxuXHRcdFx0aWYgKCBnZXRVc2VyQWdlbnQoKSA9PSAnb3RoZXInICkge1xyXG5cdFx0XHRcdG9wZW5Nb2RhbCgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyB1c2VzIFdlYiBTaGFyZSBBUEkgdG8gb3BlbiBuYXRpdmUgc2hhcmUgb24gbW9iaWxlIGRldmljZXNcclxuXHRcdFx0XHRuYXZpZ2F0b3Iuc2hhcmUoe1xyXG5cdFx0XHRcdFx0dXJsOiBkb2N1bWVudC5VUkwsXHJcblx0XHRcdFx0XHR0aXRsZTogZG9jdW1lbnQudGl0bGUsXHJcblx0XHRcdFx0XHR0ZXh0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWV0YVtuYW1lPSdkZXNjcmlwdGlvbiddXCIpLmdldEF0dHJpYnV0ZSgnY29udGVudCcpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vcmUtYnV0dG9uXCIpLmNsaWNrKCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9wZW5Nb2RhbCgpO1xyXG5cdFx0fVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBjbG9zZSBtb2RhbCB3aW5kb3cgd2l0aCAnZGF0YS1kaXNtaXNzJyBhdHRyaWJ1dGUgb3Igd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZFxyXG4gICAgaWYgKCh0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWRpc21pc3MnKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc21pc3MnKSA9PSAnbW9kYWwnKSB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpKSB7XHJcblxyXG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjbGFzcz1cIm1vZGFsIG9wZW5cIl0nKTtcclxuXHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHJcblx0XHR2YXIgbW9yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2TW9yZVwiKTtcclxuXHRcdGlmICggbW9yZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpdm1vcmUtYWN0aXZlJykgKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9yZS1idXR0b25cIikuY2xpY2soKTtcclxuXHRcdH1cclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbn0sIGZhbHNlKTtcclxuXHJcbi8vIGFkanVzdCBsYXlvdXQgZm9yIG1vYmlsZSBvbiB3aW5kb3cgc2l6ZSBsaW1pdCBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vIGdldCB3aWR0aCBvZiB0aGUgd2luZG93IGV4Y2x1ZGluZyBzY3JvbGxiYXJcclxuXHR2YXIgdyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcblx0Ly8gaWYgbGF5b3V0LTIgaXMgZW5hYmxlZCwgb24gdGhlIHdpbmRvdyBzaXplIGxpbWl0LCBmb3JjZSBsYXlvdXQtMSBmb3IgbW9iaWxlXHJcblx0aWYgKCB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xheW91dCcpID09IDIgKSB7XHJcblxyXG5cdFx0aWYgKCB3IDw9IDExOTkgKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF5b3V0LWJ1dHRvblwiKS5jbGljaygpO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7XHJcblxyXG4vKlxyXG5cdENhY2hpbmdcclxuXHQtIHVzaW5nIFdlYiBTdG9yYWdlXHJcbiovXHJcblxyXG4vLyBsb2NhbFN0b3JhZ2UgKHJldHJpZXZlIHVzZXIgcHJlZmVyZW5jZXMgLyBsYXN0IFVJIHN0YXRlcylcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRjb25zdCBcdGNhY2hlTmF2ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVOYXYnKSxcclxuXHRcdFx0Y2FjaGVMYXlvdXQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xheW91dCcpLFxyXG5cdFx0XHRjYWNoZUdlb2xvY2F0aW9uID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnZW9sb2NhdGlvbicpO1xyXG5cclxuXHQvLyBzZWxlY3RlZCBuYXZpZ2F0aW9uIG1lbnUgaXRlbSAoc2VhcmNoIGNhdGVnb3J5KVxyXG5cdGlmICggY2FjaGVOYXYgKSB7XHJcblx0XHQkKCduYXYgPiB1bCA+IGxpOm50aC1jaGlsZCgnKyAocGFyc2VJbnQoY2FjaGVOYXYpICsgMSkgICsnKScpLmZpbmQoJ2J1dHRvbicpLmNsaWNrKCk7XHJcblx0XHRjb25zb2xlLmxvZygnJWNDYWNoZSBmb3VuZDogTmF2ICcrIGNhY2hlTmF2ICsnJywgbG9nQ2FjaGUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdC10YWInKS5jbGljaygpO1xyXG5cdH1cclxuXHJcblx0Ly8gc2VsZWN0ZWQgbGF5b3V0XHJcblx0aWYgKCBjYWNoZUxheW91dCA9PSAyICkge1xyXG5cdFx0Y2hhbmdlTGF5b3V0KCk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRjb25zb2xlLmxvZygnJWNDYWNoZSBmb3VuZDogTGF5b3V0IDInLCBsb2dDYWNoZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF5b3V0LWJ1dHRvblwiKS5pbm5lckhUTUwgPSAnPGkgZGF0YS1mZWF0aGVyPVwibGF5b3V0XCI+PC9pPic7XHJcblx0fVxyXG5cclxuXHQvLyBzZWxldGVkIHRoZW1lXHJcblxyXG5cdC8vIHVzZXIgR2VvbG9jYXRpb24gcGVybWlzc2lvblxyXG5cdFxyXG59LCBmYWxzZSk7XHJcblxyXG4vLyBzZXNzaW9uU3RvcmFnZSAoc3RvcmUgZGF0YSBmcm9tIEFQSXMpXHJcblxyXG4vKlxyXG5cdFNlcnZpY2UgV29ya2VyXHJcblx0LSBmb3IgUFdBXHJcbiovXHJcbi8vIGNoZWNrIHRoYXQgc2VydmljZSB3b3JrZXJzIGFyZSBzdXBwb3J0ZWRcclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcblx0ICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJyk7XHJcblx0fSk7XHJcbiAgfSIsIi8qXG4gIFNwZWVjaCBSZWNvZ25pdGlvblxuICAtIHNpbXBsZSBpbXBsZW1lbnRhdGlvbiBvZiBXM0MgV2ViIFNwZWVjaCBBUEkgZGVzaWduZWQgdG8gYWxsb3cgb3ZlcndyaXRpbmcgb2YgbmVhcmx5IGFsbCBhdHRyaWJ1dGVzIGFuZCBmdW5jdGlvbiBjYWxsYmFja3MgdG8gaW1wbGVtZW50IGN1c3RvbSBiZWhhdmlvclxuKi9cblxuY29uc3Qgdm9pY2VUcmFuc2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvaWNlLXRyYW5zY3JpcHQnKTtcblxuLy8gY3JlYXRlIGFuZCByZXR1cm4gbmV3IFdlYlNwZWVjaFJlY29nbml0aW9uIG9iamVjdFxuZnVuY3Rpb24gV2ViU3BlZWNoUmVjb2duaXRpb24oKSB7XG4gIHZhciByID0gdGhpcztcbiAgci5jb250aW51b3VzID0gZmFsc2U7XG4gIHIubGFuZyA9ICcnO1xuICByLm1heEFsdGVybmF0aXZlcyA9IDE7XG4gIHIuc3RhdHVzX2FycmF5ID0gYXJyYXlTdGF0dXNFbjtcbiAgci5pbWFnZV9hcnJheSA9IGFycmF5SW1hZ2VNaWM7XG4gIHZhciByZWNvZ25pemluZyA9IGZhbHNlO1xuICB2YXIgaWdub3JlX29uZW5kO1xuXG4gIC8vIHJldHVybiBmYWxzZSBpZiBzcGVlY2ggcmVjb2duaXRpb24gaXMgdW5hdmFpbGFibGUgKHR5cGljYWxseSBvY2N1cnMgd2hlbiB1c2luZyBhIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBzdXBwb3J0IGl0KVxuICByLnN1cHBvcnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXIucmVjb2duaXRpb247XG4gIH07XG5cbiAgLy8gc2V0cyB0aGUgb2JqZWN0IHdoaWNoIHdpbGwgcmVjZWl2ZSBzdGF0dXMgYXMgdGV4dCBtZXNzYWdlc1xuICByLnN0YXR1c1RleHQgPSBmdW5jdGlvbihpZCkge1xuICAgIHIuc3RhdHVzX2VsZW0gPSByLmdldEVsZW0oaWQpO1xuICAgIHIucmVmcmVzaFN0YXRlKCk7XG4gIH07XG5cbiAgLy8gc2V0cyB0aGUgb2JqZWN0IHdoaWNoIHdpbGwgcmVjZWl2ZSBzdGF0dXMgYXMgaW1hZ2VzXG4gIHIuc3RhdHVzSW1hZ2UgPSBmdW5jdGlvbihpZCkge1xuICAgIHIuaW1hZ2VfZWxlbSA9IHIuZ2V0RWxlbShpZCk7XG4gICAgci5yZWZyZXNoU3RhdGUoKTtcbiAgfTtcblxuICAvLyBzZXRzIHRoZSBvYmplY3Qgd2hpY2ggd2lsbCByZWNlaXZlIGZpbmFsIHRleHQgcmVzdWx0c1xuICByLmZpbmFsUmVzdWx0cyA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgci5maW5hbF9yZXN1bHRzID0gci5nZXRFbGVtKGlkKTtcbiAgfTtcblxuICAvLyBzZXRzIHRoZSBvYmplY3Qgd2hpY2ggd2lsbCByZWNlaXZlIGludGVyaW0gdGV4dCByZXN1bHRzXG4gIHIuaW50ZXJpbVJlc3VsdHMgPSBmdW5jdGlvbihpZCkge1xuICAgIHIuaW50ZXJpbV9yZXN1bHRzID0gci5nZXRFbGVtKGlkKTtcbiAgfTtcblxuICAvLyByZXR1cm4gdHJ1ZSBpZiByZWNvZ25pdGlvbiBpcyBpbiBwcm9ncmVzc1xuICByLmluUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcmVjb2duaXppbmc7XG4gIH07XG5cbiAgLy8gU3RhcnQgcmVjb2duaXRpb25cbiAgci5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlY29nbml6aW5nID0gdHJ1ZTtcbiAgICBpZ25vcmVfb25lbmQgPSBmYWxzZTtcbiAgICByLmZpbmFsX3RyYW5zY3JpcHQgPSAnJztcbiAgICByLnNldFRleHQoci5maW5hbF9yZXN1bHRzLCAnJyk7XG4gICAgci5zZXRUZXh0KHIuaW50ZXJpbV9yZXN1bHRzLCAnJyk7XG4gICAgci5yZWNvZ25pdGlvbi5jb250aW51b3VzID0gci5jb250aW51b3VzO1xuICAgIHIucmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSAhIXIuaW50ZXJpbV9yZXN1bHRzO1xuICAgIHIucmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gci5tYXhBbHRlcm5hdGl2ZXM7XG4gICAgaWYgKHIubGFuZyAhPSAnJykge1xuICAgICAgci5yZWNvZ25pdGlvbi5sYW5nID0gci5sYW5nO1xuICAgIH1cbiAgICByLnJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgci5vblN0YXRlKCdhbGxvdycpO1xuICB9O1xuXG4gIC8vIFN0b3AgcmVjb2duaXRpb25cbiAgci5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmVjb2duaXppbmcgPSBmYWxzZTtcbiAgICByLnJlY29nbml0aW9uLnN0b3AoKTtcbiAgfTtcblxuICAvLyB0b2dnbGUgcmVjb2duaXRpb24gYmV0d2VlbiBTdGFydCAvIFN0b3Agc3RhdGVzXG4gIHIudG9nZ2xlU3RhcnRTdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHJlY28uaW5Qcm9ncmVzcygpKSB7XG4gICAgICByZWNvLnN0b3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjby5zdGFydCgpO1xuICAgIH1cbiAgfTtcblxuXHQvL1xuXHQvLyBBbGwgZnVuY3Rpb25zIGJlbG93IGFyZSByYXJlbHkgY2FsbGVkIGRpcmVjdGx5IGJ5IHRoZSB3ZWIgcGFnZVxuXHQvL1xuXG5cdHIub25TdGF0ZSA9IGZ1bmN0aW9uKGtleSkge1xuXHRyLm9uU3RhdHVzQ2hhbmdlKGtleSk7XG5cdHIub25JbWFnZUNoYW5nZShrZXkpO1xuXHRyLmN1cnJlbnRTdGF0ZSA9IGtleTtcblx0fTtcblxuXHRyLnJlZnJlc2hTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRyLm9uU3RhdGUoci5jdXJyZW50U3RhdGUpO1xuXHR9O1xuXG5cdC8vIFNldCBzdGF0dXMgZmllbGQgdG8gdGV4dCBjb3JyZXNwb25kaW5nIHRvIGtleS4gU2VlIHN0YXR1c19hcnJheSBmb3IgdmFsaWQgdmFsdWVzIG9mIGtleS4gQW4gaW52YWxpZCB2YWx1ZSBvZiBrZXkgd2lsbCBoaWRlIHRoZSBzdGF0dXMgbWVzc2FnZS5cblx0ci5vblN0YXR1c0NoYW5nZSA9IGZ1bmN0aW9uKGtleSkge1xuXHRpZiAoISFyLnN0YXR1c19lbGVtKSB7XG5cdFx0dmFyIHMgPSByLnN0YXR1c19hcnJheVtrZXldO1xuXHRcdGlmIChzKSB7XG5cdFx0ci5zZXRUZXh0KHIuc3RhdHVzX2VsZW0sIHMpO1xuXHRcdHIuc3RhdHVzX2VsZW0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHR9IGVsc2Uge1xuXHRcdHIuc3RhdHVzX2VsZW0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0fVxuXHR9O1xuXG5cdC8vIFNldCBidXR0b24gaW1hZ2UgY29ycmVzcG9uZGluZyB0byBrZXkuIFNlZSBpbWFnZV9hcnJheSBmb3IgdmFsaWQgdmFsdWVzIG9mIGtleS4gQW4gaW52YWxpZCB2YWx1ZSBvZiBrZXkgd2lsbCBzaG93IHRoZSBpbWFnZSBpbiBpdHMgJ2Rpc2FibGUnIHN0YXRlLlxuXHRyLm9uSW1hZ2VDaGFuZ2UgPSBmdW5jdGlvbihrZXkpIHtcblx0aWYgKCEhci5pbWFnZV9lbGVtKSB7XG5cdFx0dmFyIGYgPSByLmltYWdlX2FycmF5W2tleV07XG5cdFx0aWYgKCFmKSB7XG5cdFx0ZiA9IHIuaW1hZ2VfYXJyYXlbJ2Rpc2FibGUnXTtcblx0XHR9XG5cdFx0ci5pbWFnZV9lbGVtLnNyYyA9IGY7XG5cdH1cblx0fTtcblxuXHRyLnNldFRleHQgPSBmdW5jdGlvbihlbGVtLCB0ZXh0KSB7XG5cdGlmIChlbGVtKSB7XG5cdFx0aWYgKGVsZW0ubm9kZU5hbWUgPT0gJ0lOUFVUJykge1xuXHRcdGVsZW0udmFsdWUgPSB0ZXh0O1xuXHRcdH0gZWxzZSB7XG5cdFx0ZWxlbS5pbm5lckhUTUwgPSByLmxpbmVicmVhayh0ZXh0KTtcblx0XHR9XG5cdH1cblx0fTtcblxuXHQvLyBpZCBpcyBhIERPTSBlbGVtZW50IG9yIGEgc3RyaW5nIGNvbnRhaW5pbmcgaWQgb3IgbnVsbFxuXHQvLyBSZXR1cm5zIERPTSBlbGVtZW50IG9yIG51bGxcblx0ci5nZXRFbGVtID0gZnVuY3Rpb24oaWQpIHtcblx0aWYgKHR5cGVvZihpZCkgPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHR9XG5cdFx0cmV0dXJuIGlkO1xuXHR9O1xuXG5cdHZhciB0d29fbGluZSA9IC9cXG5cXG4vZztcblx0dmFyIG9uZV9saW5lID0gL1xcbi9nO1xuXHRyLmxpbmVicmVhayA9IGZ1bmN0aW9uKHMpIHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKHR3b19saW5lLCAnPHA+PC9wPicpLnJlcGxhY2Uob25lX2xpbmUsICc8YnI+Jyk7XG5cdH07XG5cblx0dmFyIGZpcnN0X2NoYXIgPSAvXFxTLztcblx0ci5jYXBpdGFsaXplID0gZnVuY3Rpb24ocykge1xuXHRcdHJldHVybiBzLnJlcGxhY2UoZmlyc3RfY2hhciwgZnVuY3Rpb24obSkgeyByZXR1cm4gbS50b1VwcGVyQ2FzZSgpOyB9KTtcblx0fTtcblxuXHRpZiAoISgnd2Via2l0U3BlZWNoUmVjb2duaXRpb24nIGluIHdpbmRvdykpIHtcblx0XHRyLm9uU3RhdGUoJ3VwZ3JhZGUnKTtcblx0fSBlbHNlIHtcblx0XHRyLnJlY29nbml0aW9uID0gbmV3IHdlYmtpdFNwZWVjaFJlY29nbml0aW9uKCk7XG5cdFx0ci5maW5hbF90cmFuc2NyaXB0ID0gJyc7XG5cdFx0ci5pbnRlcmltX3RyYW5zY3JpcHQgPSAnJztcblx0XHRyLm9uU3RhdGUoJ3JlYWR5Jyk7XG5cdFx0ci5vbkVuZCA9IG51bGw7XG5cblx0ci5yZWNvZ25pdGlvbi5vbnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmVjb2duaXppbmcgPSB0cnVlO1xuXHRcdHIub25TdGF0ZSgnYWN0aXZlJyk7XG5cdH07XG5cblx0ci5yZWNvZ25pdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQuZXJyb3IgPT0gJ25vLXNwZWVjaCcgfHwgZXZlbnQuZXJyb3IgPT0gJ2F1ZGlvLWNhcHR1cmUnIHx8IGV2ZW50LmVycm9yID09ICdub3QtYWxsb3dlZCcpIHtcblx0XHQgIHIub25TdGF0ZShldmVudC5lcnJvcik7XG5cdFx0ICBpZ25vcmVfb25lbmQgPSB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRyLnJlY29nbml0aW9uLm9uZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0cmVjb2duaXppbmcgPSBmYWxzZTtcblx0XHRpZiAoaWdub3JlX29uZW5kKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChyLmZpbmFsX3RyYW5zY3JpcHQgPT0gJycpIHtcblx0XHRcdHIub25TdGF0ZSgncmVhZHknKTtcblx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdFx0ci5vblN0YXRlKCdjb21wbGV0ZScpO1xuXHRcdGlmICghIXIub25FbmQpIHtcblx0XHRcdHIub25FbmQoKTtcblx0XHR9XG5cdH07XG5cbiAgICByLnJlY29nbml0aW9uLm9ucmVzdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgIHIuaW50ZXJpbV90cmFuc2NyaXB0ID0gJyc7XG4gICAgICBmb3IgKHZhciBpID0gZXZlbnQucmVzdWx0SW5kZXg7IGkgPCBldmVudC5yZXN1bHRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChldmVudC5yZXN1bHRzW2ldLmlzRmluYWwpIHtcbiAgICAgICAgICByLmZpbmFsX3RyYW5zY3JpcHQgKz0gZXZlbnQucmVzdWx0c1tpXVswXS50cmFuc2NyaXB0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHIuaW50ZXJpbV90cmFuc2NyaXB0ICs9IGV2ZW50LnJlc3VsdHNbaV1bMF0udHJhbnNjcmlwdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgci5maW5hbF90cmFuc2NyaXB0ID0gci5jYXBpdGFsaXplKHIuZmluYWxfdHJhbnNjcmlwdCk7XG4gICAgICByLnNldFRleHQoci5maW5hbF9yZXN1bHRzLCByLmZpbmFsX3RyYW5zY3JpcHQpO1xuICAgICAgci5zZXRUZXh0KHIuaW50ZXJpbV9yZXN1bHRzLCByLmludGVyaW1fdHJhbnNjcmlwdCk7XG4gICAgICBpZiAoISFyLm9uUmVzdWx0KSB7XG5cdFx0ci5vblJlc3VsdCgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLy8gaW5mb3JtYXRpb25hbCB0ZXh0IGZvciBlYWNoIHN0YXR1cyBjb25kaXRpb25cbnZhciBhcnJheVN0YXR1c0VuID0ge1xuICAncmVhZHknIDogJ0NsaWNrIG9uIHRoZSBtaWNyb3Bob25lIGFuZCBiZWdpbiBzcGVha2luZycsXG4gICdhY3RpdmUnIDogJ0xpc3RlbmluZy4uLicgKyAnPHNwYW4gaWQ9XCJ2b2ljZS1hbmltYXRpb25cIj48L3NwYW4+JyxcbiAgJ25vLXNwZWVjaCcgOiAnTm8gc3BlZWNoIHdhcyBkZXRlY3RlZCAodmVyaWZ5IHlvdXIgbWljcm9waG9uZSBhdWRpbyBsZXZlbCknLFxuICAnYXVkaW8tY2FwdHVyZScgOiAnTm8gbWljcm9waG9uZSB3YXMgZm91bmQgKGVuc3VyZSB0aGF0IGEgbWljcm9waG9uZSBpcyBpbnN0YWxsZWQgYW5kIGNvbmZpZ3VyZWQgY29ycmVjdGx5KScsXG4gICdhbGxvdycgOiAnV2FpdGluZyBwZXJtaXNzaW9uLi4uJyxcbiAgJ25vdC1hbGxvd2VkJyA6ICdQZXJtaXNzaW9uIHRvIHVzZSBtaWNyb3Bob25lIHdhcyBkZW5pZWQgKGNoYW5nZSBpdCB0byBcImFsbG93XCIpJyxcbiAgJ3VwZ3JhZGUnIDogJ1NwZWVjaCByZWNvZ25pdGlvbiBpcyBub3Qgc3VwcG9ydGVkIHlldCBieSB0aGlzIGJyb3dzZXInXG59O1xuXG4vLyBidXR0b24gaW1hZ2VzIGZvciBzdGF0dXNcbnZhciBhcnJheUltYWdlTWljID0ge1xuICAncmVhZHknIDogJ21pYy5naWYnLFxuICAnY29tcGxldGUnIDogJ21pYy5naWYnLFxuICAnYWN0aXZlJyA6ICdtaWMtYW5pbWF0ZS5naWYnLFxuICAnbm8tc3BlZWNoJyA6ICdtaWMtYnJva2VuLmdpZicsXG4gICdkaXNhYmxlJyA6ICdtaWMtb2ZmLmdpZidcbn07XG5cbi8vIGZpbmFsIGFjdGlvbnNcbnZhciByZWNvID0gbmV3IFdlYlNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgcmVjby5zdGF0dXNUZXh0KCdzdGF0dXMnKTtcbiAgICByZWNvLnN0YXR1c0ltYWdlKCd2b2ljZS1pbWcnKTtcbiAgICByZWNvLmludGVyaW1SZXN1bHRzKCd2b2ljZS10cmFuc2NyaXB0LXRleHQnKTtcbiAgICByZWNvLmZpbmFsUmVzdWx0cygnc2VhcmNoLWlucHV0Jyk7XG4gICAgcmVjby5zdGF0dXNUZXh0KCd2b2ljZS10cmFuc2NyaXB0LXRleHQnKTtcblxuXHRyZWNvLm9uRW5kID0gZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAocmVjby5maW5hbF90cmFuc2NyaXB0ICE9ICcnKSB7XG5cdFx0XHRcbiAgICB2b2ljZVRyYW5zY3JpcHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFicycpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cblx0XHRcdC8vIGZvcmNlIGNsaWNrIHRvIG9wZW4gYSBuZXcgYnJvd3NlciB0YWJcblx0XHRcdGlucHV0Rm9jdXMoKTtcblx0XHRcdGNoZWNrVmFsdWUoKTtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWJ1dHRvblwiKS5jbGljaygpO1xuXHRcdH1cbn07XG5cbmZ1bmN0aW9uIG9wZW5Wb2ljZVRyYW5zY3JpcHQoKSB7XG4gIHZvaWNlVHJhbnNjcmlwdC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJzJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xufVxuZnVuY3Rpb24gY2xvc2VWb2ljZVRyYW5zY3JpcHQoKSB7XG4gIHZvaWNlVHJhbnNjcmlwdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFicycpLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59XG5cbnZvaWNlVHJhbnNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VWb2ljZVRyYW5zY3JpcHQpOyIsIi8qXHJcblx0R2xvYmFsIHVzZXIgcGFyYW1ldGVycyBmb3IgQVBJIGNhbGxzIChkZXBlbmRzICdmaW5kdG8tYXBpLXNlcnZpY2UnIHJ1bm5pbmcpXHJcbiovXHJcbnZhclx0dXNlckxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLnVzZXJMYW5ndWFnZSxcclxuXHRjb3VudHJ5ID0gdXNlckxhbmcuc3BsaXQoXCItXCIpLnBvcCgpLFxyXG5cdGxhdCA9IDAsXHJcblx0bG9uID0gMCxcclxuXHRoYXNHZW9sb2NhdGlvbiA9IDA7XHJcblxyXG4vKlxyXG5cdFdlYXRoZXJcclxuKi9cclxuXHJcbi8vIHJldHJpZXZlIGRldmljZSBkYXRlICYgdGltZVxyXG5mdW5jdGlvbiBnZXREYXRldGltZSgpIHtcclxuXHJcblx0Y29uc3RcdGRpdkRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLFxyXG5cdFx0XHRkaXZUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKSxcclxuXHRcdFx0bW9udGhOYW1lcyA9IFsnSmFudWFyeScsJ0ZlYnJ1YXJ5JywnTWFyY2gnLCdBcHJpbCcsJ01heScsJ0p1bmUnLCdKdWx5JywnQXVndXN0JywnU2VwdGVtYmVyJywnT2N0b2JlcicsJ05vdmVtYmVyJywnRGVjZW1iZXInXSxcclxuXHRcdFx0ZGF5TmFtZXMgPSBbJ1N1bmRheScsJ01vbmRheScsJ1R1ZXNkYXknLCdXZWRuZXNkYXknLCdUaHVyc2RheScsJ0ZyaWRheScsJ1NhdHVyZGF5J107XHJcblxyXG5cdC8vIGV4dHJhY3QgY3VycmVudCBkYXRlXHJcblx0dmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSk7XHJcblxyXG5cdGRpdkRhdGUuaW5uZXJIVE1MID0gKGRheU5hbWVzW2RhdGUuZ2V0RGF5KCldICsgJywgJyArIGRhdGUuZ2V0RGF0ZSgpICsgJyAnICsgbW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldKTsgLy8gZGF0ZS5nZXRGdWxsWWVhcigpXHJcblxyXG5cdHNldEludGVydmFsKCBmdW5jdGlvbigpIHtcclxuXHRcdC8vIGV4dHJhY3QgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcclxuXHRcdHZhclx0aG91cnMgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCksXHJcblx0XHRcdG1pbnV0ZXMgPSBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0Ly8gc2Vjb25kcyA9IG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpOyArICc6JyArIChzZWNvbmRzIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgc2Vjb25kc1xyXG5cclxuXHRcdGRpdlRpbWUuaW5uZXJIVE1MID0gKChob3VycyA8IDEwID8gXCIwXCIgOiBcIlwiKSArIGhvdXJzICsgJzonICsgKG1pbnV0ZXMgPCAxMCA/IFwiMFwiIDogXCJcIikgKyBtaW51dGVzKTtcclxuXHRcdFxyXG5cdH0sIDEwMDApO1xyXG59XHJcbi8vIGdldCB3ZWF0aGVyIGJ5IGdlb2xvY2F0aW9uXHJcbmZ1bmN0aW9uIGdldFdlYXRoZXIobGF0LCBsb24pIHtcclxuXHJcblx0Y29uc3QgXHR3V2FybmluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci13YXJuaW5nXCIpLFxyXG5cdFx0XHR3SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbmZvXCIpLFxyXG5cdFx0XHR3VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci10ZW1wXCIpLFxyXG5cdFx0XHR3Q2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1jaXR5XCIpO1xyXG5cclxuXHRcdC8vIGNhbGwgQVBJXHJcblx0XHRmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93ZWF0aGVyP2xhdD1cIitsYXQrXCImbG9uPVwiK2xvbitcIlwiKVxyXG5cdFx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcclxuXHRcdFx0cmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cdFxyXG5cdFx0XHQvLyByZW1vdmUgd2FybmluZ1xyXG5cdFx0XHR3V2FybmluZy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRcdFx0Ly8gc2V0IHdlYXRoZXIgZGF0YSBpbiBIVE1MIGVsZW1lbnRzXHJcblx0XHRcdHNldEluZm8oZGF0YS53ZWF0aGVyWzBdLmlkLCBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sIGRhdGEuc3lzLnN1bnJpc2UsIGRhdGEuc3lzLnN1bnNldCk7XHJcblx0XHRcdHNldFRlbXAoZGF0YS5tYWluLnRlbXApO1xyXG5cdFx0XHR3Q2l0eS5pbm5lckhUTUwgPSBcIjxwIGlkPSd3ZWF0aGVyLWNpdHknPlwiICsgZGF0YS5uYW1lICsgXCIsIFwiICsgZGF0YS5zeXMuY291bnRyeSArIFwiPC9wPlwiO1xyXG5cdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhcIiVjQVBJIGNhbGxlZDogV2VhdGhlclwiLCBsb2dBY3Rpb24pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKFwiQVBJIGVycm9yOiBXZWF0aGVyXCIsIGVycm9yKTtcclxuXHRcdH0pO1xyXG5cclxuXHJcblx0Ly8gc2V0IHdlYXRoZXIgaWNvbiBhbmQgZGVzY3JpcHRpb25cclxuXHRmdW5jdGlvbiBzZXRJbmZvKGlkLCBkZXNjcmlwdGlvbiwgc3VucmlzZSwgc3Vuc2V0KSB7XHJcblxyXG5cdFx0dmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG5cclxuXHRcdHN3aXRjaChTdHJpbmcoaWQpWzBdKSB7XHJcblx0XHJcblx0XHRjYXNlIFwiMlwiOiAvLyBUaHVuZGVyc3Rvcm1cclxuXHRcdFx0aW5mbyA9ICc8aSBkYXRhLWZlYXRoZXI9XCJjbG91ZC1saWdodG5pbmdcIj48L2k+JyArIGRlc2NyaXB0aW9uO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCIzXCI6IC8vIERyaXp6bGVcclxuXHRcdFx0aW5mbyA9ICc8aSBkYXRhLWZlYXRoZXI9XCJjbG91ZC1kcml6emxlXCI+PC9pPicgKyBkZXNjcmlwdGlvbjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiNVwiOiAvLyBSYWluXHJcblx0XHRcdGluZm8gPSAnPGkgZGF0YS1mZWF0aGVyPVwiY2xvdWQtcmFpblwiPjwvaT4nICsgZGVzY3JpcHRpb247XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIjZcIjogLy8gU25vd1xyXG5cdFx0XHRpbmZvID0gJzxpIGRhdGEtZmVhdGhlcj1cImNsb3VkLXNub3dcIj48L2k+JyArIGRlc2NyaXB0aW9uO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgXCI3XCI6IC8vIEF0bW9zcGhlcmVcclxuXHRcdFx0aW5mbyA9ICc8aSBkYXRhLWZlYXRoZXI9XCJhbGVydC1vY3RhZ29uXCI+PC9pPicgKyBkZXNjcmlwdGlvbjtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIFwiOFwiOiAvLyBDbGVhciBza3lcclxuXHRcdFx0aWYgKGlkID09IDgwMCkge1xyXG5cdFx0XHRcdGlmIChzdW5yaXNlID49IHRpbWVzdGFtcCAmJiBzdW5zZXQgPD0gdGltZXN0YW1wKSB7IC8vIGlzIG1vcm5pbmdcclxuXHRcdFx0XHRcdGluZm8gPSAnPGkgZGF0YS1mZWF0aGVyPVwic3VuXCI+PC9pPicgKyBkZXNjcmlwdGlvbjtcclxuXHRcdFx0XHR9IGVsc2UgeyAvLyBpcyBuaWdodFxyXG5cdFx0XHRcdFx0aW5mbyA9ICc8aSBkYXRhLWZlYXRoZXI9XCJtb29uXCI+PC9pPicgKyBkZXNjcmlwdGlvbjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7IC8vIENsb3VkXHJcblx0XHRcdFx0aW5mbyA9ICc8aSBkYXRhLWZlYXRoZXI9XCJjbG91ZFwiPjwvaT4nICsgZGVzY3JpcHRpb247XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRpbmZvID0gZGVzY3JpcHRpb247XHJcblx0XHR9XHJcblx0XHJcblx0XHR3SW5mby5pbm5lckhUTUwgPSBcIjxoMj5cIisgaW5mbyArXCI8L2gyPlwiO1xyXG5cdFx0ZmVhdGhlci5yZXBsYWNlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgZGVmYXVsdCB0ZW1wZXJhdHVyZSB2YWx1ZVxyXG5cdGZ1bmN0aW9uIHNldFRlbXAodGVtcCkge1xyXG5cclxuXHRcdGRhdGFUZW1wLmtlbHZpbiA9IHRlbXA7XHJcblx0XHRkYXRhVGVtcC5jZWxzaXVzID0gKHRlbXAgLTI3My4xNSk7XHJcblx0XHRkYXRhVGVtcC5mYWhyZW5oZWl0ID0gKCgodGVtcCAtMjczLjE1KSAqMS44KSArMzIpO1xyXG5cclxuXHRcdGlmIChkYXRhVGVtcC5rZWx2aW4gIT0gcGFyc2VJbnQoZGF0YVRlbXAua2VsdmluKSkge1xyXG5cdFx0XHRkYXRhVGVtcC5rZWx2aW4gPSBkYXRhVGVtcC5rZWx2aW4udG9GaXhlZCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGFUZW1wLmNlbHNpdXMgIT0gcGFyc2VJbnQoZGF0YVRlbXAuY2Vsc2l1cykpIHtcclxuXHRcdFx0ZGF0YVRlbXAuY2Vsc2l1cyA9IGRhdGFUZW1wLmNlbHNpdXMudG9GaXhlZCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGFUZW1wLmZhaHJlbmhlaXQgIT0gcGFyc2VJbnQoZGF0YVRlbXAuZmFocmVuaGVpdCkpIHtcclxuXHRcdFx0ZGF0YVRlbXAuZmFocmVuaGVpdCA9IGRhdGFUZW1wLmZhaHJlbmhlaXQudG9GaXhlZCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRhdGFUZW1wLmRlZmF1bHRbMF0gPSBkYXRhVGVtcC5jZWxzaXVzO1xyXG5cdFx0ZGF0YVRlbXAuZGVmYXVsdFsxXSA9IFwiQ1wiO1xyXG5cclxuXHRcdHdUZW1wLmlubmVySFRNTCA9IFwiPGEgaHJlZj0namF2YXNjcmlwdDp2b2lkKDApOycgaWQ9J3dlYXRoZXItdCcgb25jbGljaz0nY29udmVydFdlYXRoZXJUZW1wKCknPlwiICsgZGF0YVRlbXAuZGVmYXVsdFswXSArIFwiwrBDXCIgKyBcIjwvYT5cIjtcclxuXHR9XHJcbn1cclxuXHJcbnZhciBkYXRhVGVtcCA9IHtcclxuXHRcImRlZmF1bHRcIiA6IFswLCBcIlwiXSxcclxuXHRcImtlbHZpblwiIDogMCxcclxuXHRcImNlbHNpdXNcIiA6IDAsXHJcblx0XCJmYWhyZW5oZWl0XCIgOiAwXHJcbn07XHJcbi8vIGNvbnZlcnQgdGVtcGVyYXR1cmVcclxuZnVuY3Rpb24gY29udmVydFdlYXRoZXJUZW1wKCkge1xyXG5cclxuXHRjb25zdCB0ZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLXRcIik7XHJcblxyXG5cdHN3aXRjaCAoIGRhdGFUZW1wLmRlZmF1bHRbMV0gKSB7XHJcblx0XHRjYXNlIFwiQ1wiOiAvLyB0byBmYWhyZW5oZWl0XHJcblx0XHRcdGRhdGFUZW1wLmRlZmF1bHRbMF0gPSBkYXRhVGVtcC5mYWhyZW5oZWl0XHJcblx0XHRcdGRhdGFUZW1wLmRlZmF1bHRbMV0gPSBcIkZcIlxyXG5cdFx0XHR0ZW1wLmlubmVySFRNTCA9IGRhdGFUZW1wLmRlZmF1bHRbMF0gKyBcIsKwRlwiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJGXCI6IC8vIHRvIGtlbHZpblxyXG5cdFx0XHRkYXRhVGVtcC5kZWZhdWx0WzBdID0gZGF0YVRlbXAua2VsdmluXHJcblx0XHRcdGRhdGFUZW1wLmRlZmF1bHRbMV0gPSBcIktcIlxyXG5cdFx0XHR0ZW1wLmlubmVySFRNTCA9IGRhdGFUZW1wLmRlZmF1bHRbMF0gKyBcIsKwS1wiXHJcblx0XHRicmVhaztcclxuXHRcdGNhc2UgXCJLXCI6IC8vIGJhY2sgdG8gY2Vsc2l1c1xyXG5cdFx0XHRkYXRhVGVtcC5kZWZhdWx0WzBdID0gZGF0YVRlbXAuY2Vsc2l1c1xyXG5cdFx0XHRkYXRhVGVtcC5kZWZhdWx0WzFdID0gXCJDXCJcclxuXHRcdFx0dGVtcC5pbm5lckhUTUwgPSBkYXRhVGVtcC5kZWZhdWx0WzBdICsgXCLCsENcIlxyXG5cdFx0YnJlYWs7XHJcblx0fVxyXG59XHJcblxyXG4vLyB1c2VyIEdlb2xvY2F0aW9uIHBlcm1pc3Npb25cclxuXHJcbmZ1bmN0aW9uIGdldEdlb2xvY2F0aW9uKCkge1xyXG5cclxuXHRcdC8vIGNoZWNrIGlmIEdlb2xvY2F0aW9uIEFQSSBpcyBzdXBwb3J0ZWRcclxuXHRcdGlmICggXCJnZW9sb2NhdGlvblwiIGluIG5hdmlnYXRvciApIHtcclxuXHJcblx0XHRcdC8vIGdldCB1c2VyIGxvY2F0aW9uXHJcblx0XHRcdG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24gaGFuZGxlUG9zaXRpb24ocG9zaXRpb24pIHtcclxuXHRcclxuXHRcdFx0XHRsYXQgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcblx0XHRcdFx0bG9uID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuXHJcblx0XHRcdFx0Ly8gY2FsbCB3ZWF0aGVyXHJcblx0XHRcdFx0Z2V0V2VhdGhlcihsYXQsIGxvbik7XHJcblxyXG5cdFx0XHRcdGhhc0dlb2xvY2F0aW9uID0gMTtcclxuXHJcblx0XHRcdFx0Ly8gY2FsbCBsb2NhbCB0cmVuZHNcclxuXHRcdFx0XHRpZiAoIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZlTmF2JykgPT0gNikge1xyXG5cdFx0XHRcdFx0Z2V0TG9jYWwoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0ICBhbGVydChcIlNvcnJ5LCBHZW9sb2NhdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgZGV2aWNlLlwiKTtcclxuXHRcdH1cclxufVxyXG5cclxuLypcclxuXHRQcml2YWN5IHNjb3JlXHJcbiovXHJcblxyXG52YXIgZGF0YVByaXZhY3kgPSBudWxsO1xyXG5cclxuLy8gZ2F1Z2UgZ3JhcGhcclxuY29uc3QgZ2F1Z2VPcHRzID0ge1xyXG5cdGxpbmVzOiAyLCAvLyB0aGUgbnVtYmVyIG9mIGxpbmVzIHRvIGRyYXdcclxuXHRhbmdsZTogMCwgLy8gdGhlIHNwYW4gb2YgdGhlIGdhdWdlIGFyY1xyXG5cdGxpbmVXaWR0aDogMC4zNSwgLy8gdGhlIGxpbmUgdGhpY2tuZXNzXHJcblx0cG9pbnRlcjoge1xyXG5cdFx0bGVuZ3RoOiAwLjUsIC8vIHRoZSByYWRpdXMgb2YgdGhlIGlubmVyIGNpcmNsZVxyXG5cdFx0c3Ryb2tlV2lkdGg6IDAuMDM1LCAvLyB0aGUgdGhpY2tuZXNzXHJcblx0XHRjb2xvcjogJyMwMDAnIC8vIGZpbGwgY29sb3JcclxuXHR9LFxyXG5cdGxpbWl0TWF4OiB0cnVlLCAvLyBpZiB0cnVlLCB0aGUgcG9pbnRlciB3aWxsIG5vdCBnbyBwYXN0IHRoZSBlbmQgb2YgdGhlIGdhdWdlXHJcblx0Y29sb3JTdGFydDogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJyxcclxuXHRjb2xvclN0b3A6ICdyZ2JhKDI1NSwyNTUsMjU1LC4yKScsXHJcblx0c3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcblx0Z2VuZXJhdGVHcmFkaWVudDogdHJ1ZSxcclxuXHRoaWdoRHBpU3VwcG9ydDogdHJ1ZVxyXG59O1xyXG5jb25zdCBnYXVnZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYXVnZS1jYW52YXMnKTtcclxudmFyIGdhdWdlID0gbmV3IEdhdWdlKGdhdWdlQ2FudmFzKS5zZXRPcHRpb25zKGdhdWdlT3B0cyk7XHJcblx0Z2F1Z2UubWF4VmFsdWUgPSA4NTA7XHJcblx0Z2F1Z2UuYW5pbWF0aW9uU3BlZWQgPSAxMDtcclxuXHJcbi8vIGdldCBwcml2YWN5IHNjb3JlIG9mIGN1cnJlbnQgc2VhcmNoIHByb3ZpZGVyXHJcbmZ1bmN0aW9uIGdldFByaXZhY3lSYW5rKHVybCkge1xyXG5cclxuXHQvLyBnZXQgVExEIGRvbWFpbiBmcm9tIFVSTFxyXG5cdGZ1bmN0aW9uIGV4dHJhY3RIb3N0bmFtZSh1cmwsIHRsZCkge1xyXG5cdFx0bGV0IGhvc3RuYW1lO1xyXG5cclxuXHRcdC8vIGZpbmQgJiByZW1vdmUgcHJvdG9jb2wgKGh0dHAsIGZ0cCwgZXRjLikgYW5kIGdldCBob3N0bmFtZVxyXG5cdFx0aWYgKCB1cmwuaW5kZXhPZihcIjovL1wiKSA+IC0xICkge1xyXG5cdFx0XHRob3N0bmFtZSA9IHVybC5zcGxpdCgnLycpWzJdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aG9zdG5hbWUgPSB1cmwuc3BsaXQoJy8nKVswXTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBmaW5kICYgcmVtb3ZlIHBvcnQgbnVtYmVyXHJcblx0XHRob3N0bmFtZSA9IGhvc3RuYW1lLnNwbGl0KCc6JylbMF07XHJcblxyXG5cdFx0Ly8gZmluZCAmIHJlbW92ZSBcIj9cIlxyXG5cdFx0aG9zdG5hbWUgPSBob3N0bmFtZS5zcGxpdCgnPycpWzBdO1xyXG5cclxuXHRcdGlmICggdGxkICkge1xyXG5cdFx0XHRsZXQgaG9zdG5hbWVzID0gaG9zdG5hbWUuc3BsaXQoJy4nKTtcclxuXHRcdFx0aG9zdG5hbWUgPSBob3N0bmFtZXNbaG9zdG5hbWVzLmxlbmd0aC0yXSArICcuJyArIGhvc3RuYW1lc1tob3N0bmFtZXMubGVuZ3RoLTFdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBob3N0bmFtZTtcclxuXHR9XHJcblx0dmFyIHVybCA9IGV4dHJhY3RIb3N0bmFtZSh1cmwsIHRydWUpO1xyXG5cclxuXHQvLyBjYWxsIEFQSSAtIFByaXZhY3kgTW9uaXRvclxyXG5cdGZldGNoKFwiaHR0cHM6Ly9hcGkucHJpdmFjeW1vbml0b3IuY29tL3Njb3JlLz9xPVwiK3VybCtcIlwiKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblxyXG5cdFx0cmVzcG9uc2UuanNvbigpLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuXHRcdFx0ZGF0YVByaXZhY3kgPSBkYXRhO1xyXG5cclxuXHRcdFx0dmFyIHNjb3JlID0gZGF0YS5zY29yZSxcclxuXHRcdFx0XHQvLyBuYW1lID0gZGF0YS5uYW1lLFxyXG5cdFx0XHRcdHJhdGluZyA9IFwiXCIsXHJcblx0XHRcdFx0aWNvbiA9IFwiZXllXCI7XHJcblxyXG5cdFx0aWYgKHNjb3JlICE9IG51bGwpIHtcclxuXHJcblx0XHRcdGlmIChzY29yZSA+PSAzMDAgJiYgc2NvcmUgPD0gNTc5KSB7XHJcblx0XHRcdFx0cmF0aW5nID0gXCJWZXJ5IHBvb3IgcHJpdmFjeVwiO1xyXG5cdFx0XHRcdGljb24gPSBcImFsZXJ0LXRyaWFuZ2xlXCI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHNjb3JlID49IDU4MCAmJiBzY29yZSA8PSA2NjkpIHtcclxuXHRcdFx0XHRyYXRpbmcgPSBcIkZhaXIgcHJpdmFjeVwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChzY29yZSA+PSA2NzAgJiYgc2NvcmUgPD0gNzM5KSB7XHJcblx0XHRcdFx0cmF0aW5nID0gXCJHb29kIHByaXZhY3lcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2NvcmUgPj0gNzQwICYmIHNjb3JlIDw9IDc5OSkge1xyXG5cdFx0XHRcdHJhdGluZyA9IFwiVmVyeSBnb29kIHByaXZhY3lcIjtcclxuXHRcdFx0XHRpY29uID0gXCJ0aHVtYnMtdXBcIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoc2NvcmUgPj0gODAwICYmIHNjb3JlIDw9IDg1MCkge1xyXG5cdFx0XHRcdHJhdGluZyA9IFwiRXhjZXB0aW9uYWwgcHJpdmFjeVwiO1xyXG5cdFx0XHRcdGljb24gPSBcInNoaWVsZFwiO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIHNjb3JlID0gTWF0aC5mbG9vcihzY29yZSAvIDEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmF0aW5nID0gXCJObyByYXRlZCB5ZXRcIjtcclxuXHRcdFx0aWNvbiA9IFwiaW5mb1wiO1xyXG5cdFx0XHRzY29yZSA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgXHRwcml2YWN5SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpdmFjeS1pbmZvXCIpLFxyXG5cdFx0XHRcdHByaXZhY3lSYW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcml2YWN5LXJhbmtcIik7XHJcblx0XHRcclxuXHRcdHByaXZhY3lJbmZvLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRwcml2YWN5SW5mby5pbm5lckhUTUwgPSBcIjxpIGRhdGEtZmVhdGhlcj0nXCIrIGljb24gK1wiJz48L2k+PGgyPlwiKyByYXRpbmcgK1wiPC9oMj5cIjtcclxuXHRcdHByaXZhY3lSYW5rLmlubmVySFRNTCA9IFwiXCI7XHJcblx0XHRwcml2YWN5UmFuay5pbm5lckhUTUwgPSB1cmw7XHJcblx0XHRwcml2YWN5UmFuay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly93d3cucHJpdmFjeW1vbml0b3IuY29tL3JhdGluZy8/cT1cIiArIHVybCk7XHJcblx0XHRmZWF0aGVyLnJlcGxhY2UoKTtcclxuXHRcdGdhdWdlLnNldChzY29yZSk7XHJcblx0XHRnYXVnZS5zZXRUZXh0RmllbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYXVnZS10ZXh0ZmllbGRcIikpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiJWNBUEkgY2FsbGVkOiBQcml2YWN5XCIsIGxvZ0FjdGlvbik7XHJcblxyXG5cdFx0fSk7XHJcblx0fSlcclxuXHQuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG5cdFx0Y29uc29sZS5lcnJvcihcIkFQSSBlcnJvcjogUHJpdmFjeVwiLCBlcnJvcik7XHJcblx0fSk7XHJcblxyXG59XHJcblxyXG4vKlxyXG5cdFRyZW5kc1xyXG5cdC0gc2hvdyB0cmVuZGluZyBkYXRhIChwb3B1bGFyIHNlYXJjaCB0ZW1ycywgY29udGVudHMsIHBsYWNlcyBhbmQgZXZlbnRzKSBmcm9tIGV4dGVybmFsIEFQSXNcclxuKi9cclxuXHJcbi8vIEFQSSBjYWxsZXJzXHJcbmZ1bmN0aW9uIGdldFdlYigpIHtcclxuXHJcblx0YXBpV3JhcHBlcihcclxuXHRcdFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3dlYj9jb3VudHJ5PVwiK2NvdW50cnkrXCJcIiwgXHJcblx0XHRcIldlYlwiLFxyXG5cdFx0WydUcmVuZGluZyBTZWFyY2hlcycsICd0cmVuZGluZy11cCddXHJcblx0KTtcclxufVxyXG5mdW5jdGlvbiBnZXRTb2NpYWwoKSB7XHJcblxyXG5cdGFwaVdyYXBwZXIoXHJcblx0XHRcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zb2NpYWw/Y291bnRyeT1cIitjb3VudHJ5K1wiXCIsIFxyXG5cdFx0XCJTb2NpYWxcIixcclxuXHRcdFsnVHJlbmRpbmcgVG9waWNzJywgJ2hhc2gnXVxyXG5cdCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VmlkZW8oKSB7XHJcblxyXG5cdGFwaVdyYXBwZXIoXHJcblx0XHRcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92aWRlbz9jb3VudHJ5PVwiK2NvdW50cnkrXCImdXNlckxhbmc9XCIrdXNlckxhbmcrXCJcIiwgXHJcblx0XHRcIlZpZGVvXCIsXHJcblx0XHRbJ01vc3QgV2F0Y2hlZCcsICdmaWxtJ11cclxuXHQpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBnZXRJbWFnZSgpIHtcclxuXHJcblx0YXBpV3JhcHBlcihcclxuXHRcdFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2ltYWdlPyZ1c2VyTGFuZz1cIit1c2VyTGFuZytcIlwiLFxyXG5cdFx0XCJJbWFnZVwiLFxyXG5cdFx0W1wiVHJlbmRpbmcgSW1hZ2VzXCIsIFwiY2FtZXJhXCJdXHJcblx0KTtcclxufVxyXG5mdW5jdGlvbiBnZXRBdWRpbygpIHtcclxuXHJcblx0YXBpV3JhcHBlcihcclxuXHRcdFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2F1ZGlvP3R5cGU9YXJ0aXN0cyZjb3VudHJ5PVwiK2NvdW50cnkrXCJcIiwgXHJcblx0XHRcIkF1ZGlvXCIsXHJcblx0XHRbJ01vc3QgTGlzdGVuZWQnLCdoZWFkcGhvbmVzJ11cclxuXHQpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFNob3BwaW5nKCkge1xyXG5cclxuXHRhcGlXcmFwcGVyKFxyXG5cdFx0XCJodHRwczovL2ZpbmR0by5oZXJva3VhcHAuY29tL3Nob3BwaW5nXCIsXHJcblx0XHRcIlNob3BwaW5nXCIsXHJcblx0XHRbXCJUcmVuZGluZyBQcm9kdWN0c1wiLCBcInNob3BwaW5nLWJhZ1wiXVxyXG5cdCk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0TG9jYWwoKSB7XHJcblxyXG5cdGFwaVdyYXBwZXIoXHJcblx0XHRcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2NhbD9sYXQ9XCIrbGF0K1wiJmxvbj1cIitsb24rXCJcIixcclxuXHRcdFwiTG9jYWxcIixcclxuXHRcdFtcIk5lYXJieSBZb3VcIiwgXCJtYXBcIl1cclxuXHQpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBnZXROZXdzKCkge1xyXG5cclxuXHRhcGlXcmFwcGVyKFxyXG5cdFx0XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbmV3cz9jb3VudHJ5PVwiK2NvdW50cnkrXCJcIixcclxuXHRcdFwiTmV3c1wiLFxyXG5cdFx0W1wiVG9wIEhlYWRsaW5lc1wiLCBcImJvb2ttYXJrXCJdXHJcblx0KTtcclxufVxyXG5mdW5jdGlvbiBnZXRBY2FkZW1pYygpIHtcclxuXHJcblx0YXBpV3JhcHBlcihcclxuXHRcdFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FjYWRlbWljXCIsXHJcblx0XHRcIkFjYWRlbWljXCIsXHJcblx0XHRbXCJUb3AgQ2l0YXRpb25zXCIsIFwiZWRpdC0yXCJdXHJcblx0KTtcclxufVxyXG5mdW5jdGlvbiBnZXRDb2RlKCkge1xyXG5cclxuXHRhcGlXcmFwcGVyKFxyXG5cdFx0XCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY29kZVwiLCBcclxuXHRcdFwiQ29kZVwiLFxyXG5cdFx0WydQcm9ncmFtbWluZyBUcmVuZHMnLCAndGVybWluYWwnXVxyXG5cdCk7XHJcbn1cclxuXHJcbi8vIHN0b3JlIGRhdGEgZnJvbSBBUEkgY2FsbHNcclxudmFyXHRkYXRhQVBJID0gW107XHJcblxyXG4vLyBjaGVjayBpZiBBUElzIGRhdGEgaXMgc3RvcmVkXHJcbmZ1bmN0aW9uIGNoZWNrRGF0YShhcGlUaXRsZSkge1xyXG5cclxuXHRmb3IgKHZhciBpIGluIGRhdGFBUEkpIHtcclxuXHJcblx0XHRpZiAoYXBpVGl0bGUgPT0gZGF0YUFQSVtpXS5jYXRlZ29yeSkge1xyXG5cclxuXHRcdFx0cmV0dXJuIGk7IC8vIHBvc2l0aW9uIG9mIGRhdGEgc3RvcmVkIGluIGFycmF5XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBudWxsOyAvLyBub3QgZm91bmRcclxufVxyXG5cclxuLy8gbWFuYWdlIHRhYnNcclxuZnVuY3Rpb24gb3BlblRyZW5kc1RhYihldmVudCwgdGFiTmFtZSkge1xyXG5cdHZhciBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcclxuXHR0YWJjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRyZW5kcy10YWJjb250ZW50XCIpO1xyXG5cdGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcblx0ICB0YWJjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9XHJcblx0dGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidHJlbmRzLXRhYmxpbmtzXCIpO1xyXG5cdGZvciAoaSA9IDA7IGkgPCB0YWJsaW5rcy5sZW5ndGg7IGkrKykge1xyXG5cdCAgdGFibGlua3NbaV0uY2xhc3NOYW1lID0gdGFibGlua3NbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG5cdH1cclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJOYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG59XHJcblxyXG4vLyBBUEkgd3JhcHBlciAoZmV0Y2ggbW9kZWwpXHJcbmZ1bmN0aW9uIGFwaVdyYXBwZXIoYXBpVVJMLCBhcGlUaXRsZSwgYXBpSW5mbykge1xyXG5cclxuXHRjb25zdCBcdGJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZW5kcy1ibG9jaycpLFxyXG5cdFx0XHR0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVuZHMtdGl0bGUnKTtcdFxyXG5cclxuXHQvLyAzLiBjb25zdHJ1Y3RvciAtIGRpc3BsYXkgZGF0YSBvbiBIVE1MXHJcblx0ZnVuY3Rpb24gZGlzcGxheURhdGEoZGF0YSkge1xyXG5cclxuXHRcdC8vIDAuIGNsZWFyIGJsb2NrXHJcblx0XHRibG9jay5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuXHRcdC8vIDMuIGFkZCB0YWJcclxuXHRcdGJsb2NrLmlubmVySFRNTCA9IFwiPGRpdiBpZD0ndHJlbmRzLXRhYic+PC9kaXY+XCI7XHJcblxyXG5cdFx0Y29uc3QgdHJlbmRzVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyZW5kcy10YWInKTtcclxuXHJcblx0XHQvLyAzLiBhZGQgdGFibGlua3MgKGJ1dHRvbnMpICYgdGFiY29udGVudCAoZGl2cylcclxuXHRcdGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG5cclxuXHRcdFx0Ly8gaGlkZSB0YWIgaWYgaXMganVzdCBvbmVcclxuXHRcdFx0aWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG5cclxuXHRcdFx0XHR0cmVuZHNUYWIuaW5uZXJIVE1MICs9ICc8YnV0dG9uIGNsYXNzPVwidHJlbmRzLXRhYmxpbmtzXCIgb25jbGljaz1cIm9wZW5UcmVuZHNUYWIoZXZlbnQsICcrICdcXCcnICtkYXRhW2ldLnRpdGxlKyAnXFwnJyArJylcIj4nKyBkYXRhW2ldLnRpdGxlICsnPC9idXR0b24+JztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0cmVuZHNUYWIuaW5uZXJIVE1MICs9ICc8YnV0dG9uIGNsYXNzPVwidHJlbmRzLXRhYmxpbmtzXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCIgb25jbGljaz1cIm9wZW5UcmVuZHNUYWIoZXZlbnQsICcrICdcXCcnICtkYXRhW2ldLnRpdGxlKyAnXFwnJyArJylcIj4nKyBkYXRhW2ldLnRpdGxlICsnPC9idXR0b24+JztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGlkTGlzdCA9IGRhdGFbaV0udGl0bGUgKyAnLW9sJztcclxuXHRcdFx0XHJcblx0XHRcdHRyZW5kc1RhYi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmVuZFwiLCBcIjxkaXYgaWQ9J1wiK2RhdGFbaV0udGl0bGUrXCInIGNsYXNzPSd0cmVuZHMtdGFiY29udGVudCc+PG9sIGlkPSdcIitpZExpc3QrXCInPjwvb2w+PC9kaXY+XCIpO1xyXG5cclxuXHRcdFx0Ly8gMy4gYWRkIGl0ZW1zXHJcblx0XHRcdGZvciAodmFyIGogaW4gZGF0YVtpXS5kYXRhKSB7XHJcblxyXG5cdFx0XHRcdGlmIChkYXRhW2ldLmRhdGFbal0udXJsKSB7IC8vIGNhcmQgd2l0aCB1cmxcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTGlzdCkuaW5uZXJIVE1MICs9ICc8bGk+PGEgaHJlZj1cIicrIGRhdGFbaV0uZGF0YVtqXS51cmwgKydcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIicrZGF0YVtpXS5jcmVkaXRzWzJdKydcIiB0aXRsZT1cIicrIGRhdGFbaV0uZGF0YVtqXS5kZXNjcmlwdGlvbiArJ1wiPicrIGRhdGFbaV0uZGF0YVtqXS50aXRsZSArJzwvYT48L2xpPic7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7IC8vIHRhZ1xyXG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWRMaXN0KS5pbm5lckhUTUwgKz0gJzxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwiJytkYXRhW2ldLmNyZWRpdHNbMl0rJ1wiIHRpdGxlPVwiJysgZGF0YVtpXS5kYXRhW2pdLmRlc2NyaXB0aW9uICsnXCI+JysgZGF0YVtpXS5kYXRhW2pdLnRpdGxlICsnPC9hPjwvbGk+JztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIDMuIGFkZCBjcmVkaXRzXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTGlzdCkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJlbmRcIiwgXCI8cCBjbGFzcz0nY3JlZGl0cyc+RGF0YSBieSA8YSBocmVmPSdcIitkYXRhW2ldLmNyZWRpdHNbMV0rXCInIHRhcmdldD0nX2JsYW5rJyByZWw9J25vb3BlbmVyJz5cIitkYXRhW2ldLmNyZWRpdHNbMF0rXCI8L2E+PC9wPlwiKVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIDQuIGNsaWNrIG9uIGZpcnN0IHRhYi1idXR0b25cclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHJlbmRzLXRhYlwiKS5maXJzdEVsZW1lbnRDaGlsZC5jbGljaygpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQvLyBldmVudCBsaXN0ZW5lciAtIGNsaWNrIGhhbmRsZXIgZm9yICd0YWcnIGl0ZW1zXHJcblx0ZnVuY3Rpb24gbGlzdGVuZXJUYWdzKCkge1xyXG5cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWcnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuXHRcdFx0XHQvLyBwdXQgdmFsdWUgb24gZm9ybSBpbnB1dCBhbmQgc2Nyb2xsIHRvIGl0XHJcblx0XHRcdFx0Zm9ybUlucHV0LnZhbHVlID0gaXRlbS5pbm5lclRleHQ7XHJcblx0XHRcdFx0Y2hlY2tWYWx1ZSgpO1xyXG5cdFx0XHRcdGZvcm1JbnB1dC5mb2N1cygpO1xyXG5cclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvLyAwLiBsb2FkaW5nIGFuaW1hdGlvblxyXG5cdGJsb2NrLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2Pic7XHJcblxyXG5cdC8vIDEuIHVwZGF0ZSB0aXRsZSAmIGljb25cclxuXHR0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cdHRpdGxlLmlubmVySFRNTCA9ICgnPGgyPjxpIGRhdGEtZmVhdGhlcj1cIicrYXBpSW5mb1sxXSsnXCI+PC9pPicrYXBpSW5mb1swXSsnPGgyPicpO1xyXG5cdGZlYXRoZXIucmVwbGFjZSgpO1xyXG5cclxuXHQvLyAyLiBmZXRjaCBkYXRhXHJcblx0aWYgKCBjaGVja0RhdGEoYXBpVGl0bGUpID09IG51bGwgKSB7IC8vIGlmIGRvbid0IHN0b3JlZCB5ZXRcclxuXHRcdFxyXG5cdFx0ZmV0Y2goYXBpVVJMKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdHJlc3BvbnNlLmpzb24oKS50aGVuKGZ1bmN0aW9uKGRhdGEpe1xyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIiVjQVBJIGNhbGxlZDogXCIrYXBpVGl0bGUrXCJcIiwgbG9nQWN0aW9uKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyAyLiBzdG9yZSBkYXRhIGluIGFycmF5XHJcblx0XHRcdFx0ZGF0YUFQSS5wdXNoKHtcclxuXHRcdFx0XHRcdFwiY2F0ZWdvcnlcIjogYXBpVGl0bGUsXHJcblx0XHRcdFx0XHRcImRhdGFcIjogZGF0YVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvLyAzLiBzaG93IGZldGNoZWQgZGF0YVxyXG5cdFx0XHRcdGRpc3BsYXlEYXRhKGRhdGEpO1xyXG5cdFx0XHRcdGxpc3RlbmVyVGFncygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe1xyXG5cclxuXHRcdFx0Y29uc29sZS5lcnJvcihcIkFQSSBlcnJvcjogXCIgKyBhcGlUaXRsZSArICcgfCAnICsgZXJyb3IpO1xyXG5cclxuXHRcdFx0Ly8gMy4gc2hvdyBlcnJvclxyXG5cdFx0XHRibG9jay5pbm5lckhUTUwgPSBcIjxoMj5FcnJvciBjYWxsaW5nIFwiK2FwaVRpdGxlK1wiIEFQSTwvaDI+XCI7XHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiJWNDYWNoZSBmb3VuZDogXCIrYXBpVGl0bGUrXCIgQVBJIGRhdGFcIiwgbG9nQ2FjaGUpO1xyXG5cclxuXHRcdC8vIDMuIHNob3cgc3RvcmVkIGRhdGFcclxuXHRcdGRpc3BsYXlEYXRhKCBkYXRhQVBJW2NoZWNrRGF0YShhcGlUaXRsZSldLmRhdGEgKTtcclxuXHRcdGxpc3RlbmVyVGFncygpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qXHJcblx0QXV0b2NvbXBsZXRlXHJcbiovXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gQmluZyBBdXRvc3VnZ2VzdCBBUElcclxuICAgICQoXCIjc2VhcmNoLWlucHV0XCIpLmF1dG9jb21wbGV0ZSh7XHJcbiAgICAgICAgc291cmNlOiBmdW5jdGlvbihyZXF1ZXN0LCByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG5cdFx0XHRcdHVybDogXCJodHRwczovL2FwaS5iaW5nLmNvbS9vc2pzb24uYXNweD9tYXJrZXQ9XCIgKyB1c2VyTGFuZyArIFwiJnF1ZXJ5PVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlcXVlc3QudGVybSkgKyBcIiZKc29uVHlwZT1jYWxsYmFjayZKc29uQ2FsbGJhY2s9P1wiLFxyXG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdFx0dmFyIHN1Z2dlc3Rpb25zID0gW107XHJcblx0XHRcdFx0XHQkLmVhY2goZGF0YVsxXSwgZnVuY3Rpb24gKGksIHZhbCkge1xyXG5cdFx0XHRcdFx0XHRzdWdnZXN0aW9ucy5wdXNoKHZhbCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyByZXR1cm4gbGltaXRlZCBzdWdnZXN0aW9uc1xyXG5cdFx0XHRcdHJlc3BvbnNlKHN1Z2dlc3Rpb25zLnNsaWNlKDAsIDUpKTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgXHR9KTtcclxuICAgICAgICB9XHJcblx0fSk7XHJcblxyXG5cdC8vIGdldCBkYXRlXHJcblx0Z2V0RGF0ZXRpbWUoKTtcclxuXHJcbn0sIGZhbHNlKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvYXBwLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==