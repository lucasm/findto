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
			"color": "#30d4ec",
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
			"name": "Mojeek",
			"action": "https://www.mojeek.com/search",
			"query": "q",
			"color": "#92cc5a",
			"childs" : [
				{
					"name": "Images",
					"params": ["fmt","images"]
				},
				{
					"name": "News",
					"params": ["fmt","news"],
				},
			]
		},
		{
			"name": "Brave",
			"action": "https://search.brave.com/search",
			"query": "q",
			"color": "#ff714e",
			"childs": [
				{
					"name": "Images",
					"action": "https://search.brave.com/images",
					"query": "q"
				},
				{
					"name": "Videos",
					"action": "https://search.brave.com/videos",
					"query": "q"
				},
				{
					"name": "News",
					"action": "https://search.brave.com/news",
					"query": "q"
				}
			]
		},
		{
			"name": "Yandex",
			"action": "https://www.yandex.com/search/",
			"query": "text",
			"color": "#f5d967",
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
			"color": "#748fff",
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
			"name": "Swisscows",
			"action": "https://swisscows.com/web",
			"query": "query",
			"color": "#ff6161"
		},
		{
			"name": "Gibiru",
			"action": "https://gibiru.com/results.html",
			"query": "q",
			"color": "#ec5265"
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
			"color": "#ff83cd"
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
			"name": "Discord",
			"action": "https://discord.com/guild-discovery",
			"query" : 'query',
			"color": "#7681ff"
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
			"color": "#ff5573"
		 },
		 {
			"name": "Quora",
			"action": "https://www.quora.com/search",
			"query": "q",
			"color": "#ff6966"
		},
		{
			"name": "VK",
			"action": "https://vk.com/search",
			"query": "q",
			"color": "#55a4ff"
		 },
		 {
			"name": "Myspace",
			"action": "https://myspace.com/search",
			"query": "q",
			"color": "#f5f5f5"
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
			"color": "#ff5e5e"
		 },
		 {
			"name": "Twitch",
			"action": "https://www.twitch.tv/search",
			"query" : "term",
			"color": "#aa72ff"
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
			"color": "#30ca84"
		 },
		 {
			"name": "Disney+",
			"action": "https://disneyplus.com/",
			"query": "q",
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
			"color": "#ff5c6e"
		},
		{
			"name": "YouTube Music",
			"action": "https://music.youtube.com/search",
			"query": "q",
			"color": "#ff5454"
		},
		{
			"name": "Pandora",
			"action": "https://www.pandora.com/search/",
			"query": false,
			"color": "#5d85ff"
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
			"name": "Last.fm",
			"action": "https://www.last.fm/search",
			"query": "q",
			"color": "#ff5151"
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
			"name": "TuneIn",
			"action": "https://tunein.com/search/",
			"query": "query",
			"color": "#36d7cd"
		}
		// ,{
		// 	"name": "Shoutcast",
		// 	"action": "https://directory.shoutcast.com/search",
		// 	"query": "query",
		// 	"color": "#2bcdd4"
		// }
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
			"color": "#4ca0ff"
		},
		{
			"name": "Walmart",
			"action": "https://www.walmart.com/search/",
			"query": "query",
			"color": "#ffc220"
		},
		{
			"name": "Etsy",
			"action": "https://www.etsy.com/search",
			"query": "q",
			"color": "#ff8b3b"
		},
		{
			"name": "Target",
			"action": "https://www.target.com/s",
			"query": "searchTerm",
			"color": "#ff5151"
		},
		{
			"name": "Best Buy",
			"action": "https://www.bestbuy.com/site/searchpage.jsp",
			"query": "st",
			"color": "#ead853"
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
			"color": "#88cc56"
		},
		{
			"name": "Craigslist",
			"action": "https://craigslist.org/search/sss",
			"query": "query",
			"color": "#a96be2"
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
			"name": "Pocket",
			"action": "https://app.getpocket.com/search/",
			"query": false,
			"color": "#ff576c"
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
			"name": "Stack Overflow",
			"action": "https://stackoverflow.com/search",
			"query": "q",
			"color": "#ffa055"
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
			"color": "#ff6565"
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
			"color": "#4dda7d"
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
			"action": "https://thepiratebay10.org/search/",
			"query": false,
			"color": "#e89d6a"
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
	],
	"products": [
		{
			"name": "Product Hunt",
			"action": "https://www.producthunt.com/search",
			"query": "q",
			"color": "#ff744c"
		},
		{
			"name": "Kickstarter",
			"action": "https://www.kickstarter.com/discover/advanced",
			"query": "term",
			"color": "#46e6a1"
		},
		{
			"name": "Indiegogo",
			"action": "https://www.indiegogo.com/explore/all",
			"query": "q",
			"color": "#f16fac"
		},
		{
			"name": "Patreon",
			"action": "https://www.patreon.com/search",
			"query": "q",
			"color": "#ff6069"
		}
	],
	"stock": [
		{
			"name": "finviz",
			"action": "https://finviz.com/search.ashx",
			"query": "p",
			"color": "#d8d8d8"
		}
	]
 }
// console.log(typeof searchParams, searchParams);