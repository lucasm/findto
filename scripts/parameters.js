/*
	Global variables
*/
var 
	helper = document.getElementById('helper');

var
	searchForm = document.getElementById('search-form'), // get "form" element (to change value of "action" attribute)
	inputSubmit = document.getElementById('search-input'), // get "input" element (to change "name" attribute)
	mainColor = document.getElementById("body"), // get main background color
	logoImage = document.getElementById("search-img"), // get logo image
	helperInput = document.getElementById('helper'); // get helper "input" (to change attributes "name" & "value")

/*
	Search parameters
*/

// Google
function google() {
	document.getElementById("google").checked=true;
	xUrl="https://www.google.com/search?q=";
	xColor="#4285f4";
	xImage="google";
	t1();
}
function googleImages() {
	searchForm.action="https://www.google.com/search?q=";
	helper.name="tbm";
	helper.value="isch";
}
function googleVideos() {
	searchForm.action="https://www.google.com/search?q=";
	helper.name="tbm";
	helper.value="vid";
}
function googleNews() {
	searchForm.action="https://www.google.com/search?q=";
	helper.name="tbm";
	helper.value="nws";
}
function googleShopping() {
	searchForm.action="https://www.google.com/search?q=";
	helper.name="tbm";
	helper.value="shop";
}
function googleBooks() { 
	searchForm.action="https://www.google.com/search?q=";
	helper.name="tbm";
	helper.value="bks";
}
function googleMaps() {
	xUrl="https://maps.google.com/maps/search/";
	xColor="#4285f4";
	xImage="google";
	t3();
}
function googleTranslate() {
	xUrl="https://translate.google.com/?q=";
	t1();
}

// Bing
function bing() {
	document.getElementById("bing").checked=true;
	xUrl="https://www.bing.com/search?q=";
	xColor="#068e8e";
	xImage="bing";
	t1();
}
function bingImages() {
	searchForm.action='https://www.bing.com/images/search?=';
}
function bingVideos() {
	searchForm.action='https://www.bing.com/videos/search?=';
}
function bingNews() {
	searchForm.action='https://www.bing.com/news/search?=';
}
function bingMaps() {
	searchForm.action="https://www.bing.com/maps?q=";
	mainColor.style.backgroundColor="#068e8e";
	logoImage.style.backgroundImage="url('images/logos/bing.svg')";
}
function bingEvents() {
	searchForm.action='https://www.bing.com/events/search/?=';
}
function bingTranslator() {
	searchForm.action="https://www.bing.com/translator/";
	inputSubmit.name="text";
}

// Yahoo
function yahoo() {
	document.getElementById("yahoo").checked = true;
	xUrl="https://search.yahoo.com/search?p=";
	xColor="#6001d2";
	xImage="yahoo";
	t1();
}
function yahooImages() {
	searchForm.action='https://images.search.yahoo.com/search/images?p=';
}
function yahooVideos() {
	searchForm.action='https://video.search.yahoo.com/search/video?p=';
}
function yahooNews() {
	searchForm.action='https://news.search.yahoo.com/search?p=';
}
function yahooLocal() {
	searchForm.action='https://search.yahoo.com/local/?p=';
	inputSubmit.name='p';
}
function yahooAnswers() {
	searchForm.action='https://answers.search.yahoo.com/search?p=';
}
function yahooShopping() {
	searchForm.action='https://shopping.search.yahoo.com/search?p=';
}
function yahooFinance() {
	searchForm.action='https://finance.search.yahoo.com/search?p=';
}

// DuckDuckGo
function duckgo() {
	document.getElementById("duckgo").checked = true;
	xUrl="https://duckduckgo.com/?q=";
	xColor="#DE5833";
	xImage="duckduckgo";
	t1();
}
function duckgoImages() {
	searchForm.action='https://duckduckgo.com/?q=';
	helper.name='ia';
	helper.value='images';
}
function duckgoVideos() {
	searchForm.action='https://duckduckgo.com/?q=';
	helper.name='ia';
	helper.value='videos';
}
function duckgoMeanings() {
	searchForm.action='https://duckduckgo.com/?q=';
	helper.name='ia';
	helper.value='meanings';
}
function  duckgoStock() {
	searchForm.action='https://duckduckgo.com/?q=';
	helper.name='ia';
	helper.value='stock';
}
function  duckgoNews() {
	searchForm.action='https://duckduckgo.com/?q=';
	helper.name='iar';
	helper.value='news';
}

// Startpage
function startpage() {
	searchForm.onsubmit=true;
	document.getElementById("startpage").checked=true;
	searchForm.action="https://www.startpage.com/do/asearch";
	inputSubmit.name="query";
	helper.name="op";
	helper.value="tua1";
	mainColor.style.backgroundColor="#6573ff";
	logoImage.style.backgroundImage="url('images/logos/startpage.svg')";
}
function startpageImages() { // &nj=0
	searchForm.action='https://www.startpage.com/do/asearch';
	helper.name="cat";
	helper.value="pics";
}
function startpageVideos() { // &nj=0
	searchForm.action='https://www.startpage.com/do/asearch';
	helper.name="cat";
	helper.value="video";
}

// Qwant
function qwant() {
	document.getElementById("qwant").checked=true;
	xUrl="https://www.qwant.com/?q=";
	xColor="#ff3b4a";
	xImage="qwant";
	t1();
}
function qwantImages() {
	searchForm.action="https://www.qwant.com/?q=";
	helper.name="t";
	helper.value="images";
}
function qwantVideos() {
	searchForm.action="https://www.qwant.com/?q=";
	helper.name="t";
	helper.value="videos";
}
function qwantSocial() {
	searchForm.action="https://www.qwant.com/?q=";
	helper.name="t";
	helper.value="social";
}
function qwantNews() {
	searchForm.action="https://www.qwant.com/?q=";
	helper.name="t";
	helper.value="news";
}
function qwantShopping() {
	searchForm.action="https://www.qwant.com/?q=";
	helper.name="t";
	helper.value="shopping";
}
function qwantMusic() {
	searchForm.action="https://www.qwant.com/music/search?q=";
}

// searx
function searx() {
	document.getElementById("searx").checked=true;
	xUrl="https://searx.me/?q=";
	xColor="#3faa7f";
	xImage="searx";
	t1();
}
function searxFiles() {
	helper.name="categories";
	helper.value="files";
}
function searxImages() {
	helper.name="categories";
	helper.value="images";
}
function searxIt() {
	helper.name="categories";
	helper.value="it";
}
function searxMap() {
	helper.name="categories";
	helper.value="map";
}
function searxMusic() {
	helper.name="categories";
	helper.value="music";
}
function searxVideo() {
	helper.name="categories";
	helper.value="videos";
}
function searxScience() {
	helper.name="categories";
	helper.value="science";
}
function searxNews() {
	helper.name="categories";
	helper.value="news";
}

// Yandex
function yandex() {
	document.getElementById("yandex1").checked=true;
	xUrl="https://www.yandex.com/search/?text=";
	xQuery="text";
	xColor="#ecbd02";
	xImage="yandex";
	t2();
}
function yandexImages() {
	searchForm.action='https://yandex.com/images/search?text=';
	inputSubmit.name = 'text';
}
function yandexVideos() {
	searchForm.action='https://yandex.com/video/search?text=';
	inputSubmit.name = 'text';
}
function yandexMaps() {
	searchForm.action='https://maps.yandex.com/?text=';
	inputSubmit.name = 'text';
}
function yandexTranslate() {
	searchForm.action='https://translate.yandex.com/?text=';
	inputSubmit.name = 'text';
}
function yandexMusic() {
	searchForm.action='https://music.yandex.ru/search?text=';
	inputSubmit.name = 'text';
}
function yandexNews() {
	searchForm.action='https://news.yandex.ru/yandsearch?rpt=nnews2&text=';
	inputSubmit.name = 'text';
}

// Baidu
function baidu() {
	document.getElementById("baidu").checked=true;
	xUrl="https://www.baidu.com/s?wd=";
	xQuery="wd";
	xColor="#385FDE";
	xImage="baidu";
	t2();
}
function baiduImages() {
	searchForm.action="http://image.baidu.com/search/index?tn=baiduimage&word=";
	inputSubmit.name="word";
	helper.name="tn";
	helper.value="baiduimage";
}
function baiduVideos() {
	searchForm.action="http://v.baidu.com/v?word=";
	inputSubmit.name="word";
}
function baiduMusic() {
	searchForm.action="http://music.baidu.com/search?key=";
	inputSubmit.name="key";
}
function baiduNews() {
	searchForm.action="https://news.baidu.com/ns?word=";
	inputSubmit.name="word";
}
function baiduMaps() {
	searchForm.action='http://map.baidu.com/m?fr=ps01000&word=';
	inputSubmit.name='word';
	helper.name="fr";
	helper.value="ps01000";
}

// Social

function facebook() {
	document.getElementById("facebook").checked=true;
	xUrl="https://www.facebook.com/public?query=";
	xQuery="query";
	xColor="#3B579D";
	xImage="facebook";
	t2();
}
function twitter() {
	xUrl="https://twitter.com/search?q=";
	xColor="#1da1f3";
	xImage="twitter";
	t1();
}
function instagram() {
	xUrl="https://www.instagram.com/explore/tags/";
	xColor="#d92d77";
	xImage="instagram";
	t3();
}
function linkedin() {
	xUrl="https://www.linkedin.com/search/results/index/?keywords=";
	xQuery="keywords";
	xColor="#0077b5";
	xImage="linkedin";
	t2();
}
function tumblr() {
	xUrl="https://www.tumblr.com/search/";
	xColor="#001935";
	xImage="tumblr";
	t3();
}
function pinterest() {
	xUrl="https://pinterest.com/search/pins/?q=";
	xColor="#e60023";
	xImage="pinterest";
	t1();
}
function medium() {
	xUrl="https://medium.com/search?q=";
	xColor="#1c1b1a";
	xImage="medium";
	t1();
}
function reddit() {
	xUrl="https://www.reddit.com/search?q=";
	xColor="#ff4500";
	xImage="reddit";
	t1();
}
function periscope() {
	xUrl="https://www.periscope.tv/search?q=";
	xColor="#40a4c4";
	xImage="periscope";
	t1();
}
function meetup() {
	xUrl="https://www.meetup.com/find/?=";
	xQuery="keywords";
	xColor="#f64060";
	xImage="meetup";
	t2();
}
function vk() {
	xUrl="https://vk.com/search?q=";
	xColor="#2B587A";
	xImage="vk";
	t1();
}
function ello() {
	xUrl="https://ello.co/search?terms=";
	xQuery="terms";
	xColor="#111";
	xImage="ello";
	t2();
}
function myspace() {
	xUrl="https://myspace.com/search?q=";
	xColor="#030303";
	xImage="myspace";
	t1();
}
function snapchat() {
	xUrl="https://map.snapchat.com/";
	xColor="#efe800";
	xImage="snapchat";
	t3();
}

// Video

function youtube() {
	document.getElementById("youtube").checked=true;
	xUrl="https://www.youtube.com/results?search_query=";
	xQuery="search_query";
	xColor="#ff2626";
	xImage="youtube";
	t2();
}
function vimeo() {
	xUrl="https://vimeo.com/search?q=";
	xColor="#00ADEF";
	xImage="vimeo";
	t1();
}
function twitch() {
	xUrl="https://www.twitch.tv/directory/all/";
	xColor="#6441a5";
	xImage="twitch";
	t3();
}
function dailymotion() {
	xUrl="https://www.dailymotion.com/search/";
	xColor="#0af";
	xImage="dailymotion";
	t3();
}
function netflix() {
	xUrl="https://www.netflix.com/search?q=";
	xColor="#e50914";
	xImage="netflix";
	t1();
}
function hulu() {
	xUrl="https://www.hulu.com/search?q=";
	xColor="#3DBB3D";
	xImage="hulu";
	t1();
}
function msnVideo() {
	xUrl="https://www.msn.com/en-us/video/searchresults?q=";
	xColor='#303030';
	xImage="msn";
	t1();
}
function aolVideo() {
	xUrl='https://www.aol.com/video/search/?q=';
	xColor='#39F';
	xImage="aol";
	t1();
}
function ted() {
	xUrl="https://www.ted.com/search?q=";
	xColor="#E62B1E";
	xImage="ted";
	t1();
}
function vudu() {
	xUrl="https://www.vudu.com/movies/#search/";
	xColor="#2372D6";
	xImage="vudu";
	t3();
}
function metacafe() {
	xUrl="https://www.metacafe.com/videos_about/";
	xColor="#3456B5";
	xImage="metacafe";
	t3();
}
function viewster() {
	xUrl="https://www.viewster.com/search/";
	xColor="#f59719";
	xImage="viewster";
	t3();
}

// Image

function flickr() {
	document.getElementById("flickr").checked = true;
	xUrl="https://www.flickr.com/search/?q=";
	xColor="#ff0084";
	xImage="flickr";
	t1();
}
function deviantArt() {
	xUrl="https://www.deviantart.com/?q=";
	xColor="#05CC47";
	xImage="deviantart";
	t1();
}
function imgur() {
	xUrl="https://imgur.com/search?q=";
	xColor="#1bb76e";
	xImage="imgur";
	t1();
}
function _500px() {
	xUrl="https://500px.com/search?q=";
	xColor="#0099e5";
	xImage="500px";
	t1();
}
function smugMug() {
	xUrl="https://www.smugmug.com/search/?q=";
	xColor="#7dbb00";
	xImage="smugmug";
	t1();
}
function shutterstock() {
	xUrl="https://www.shutterstock.com/search?searchterm=";
	xQuery="searchterm";
	xColor="#EE3124";
	xImage="shutterstock";
	t2();
}
function gettyImages() {
	xUrl="https://www.gettyimages.com/photos/";
	xColor="#333";
	xImage="getty-images";
	t3();
}
function adobeStock() {
	xUrl="https://stock.adobe.com/search?k=";
	xQuery="k";
	xColor="#ff4486";
	xImage="adobe-stock";
	t2();
}
function pexels() {
	xUrl="https://www.pexels.com/search/";
	xColor="#444";
	xImage="pexels";
	t3();
}
function unsplash() {
	xUrl="https://unsplash.com/search/photos/";
	xColor="#222";
	xImage="unsplash";
	t3();
}
function pixabay() {
	xUrl="https://pixabay.com/photos/?q=";
	xColor="#3eb060";
	xImage="pixabay";
	t1();
}
function freepik() {
	xUrl="https://www.freepik.com/search?query=";
	xQuery="query";
	xColor="#1273EB";
	xImage="freepik";
	t2();
}
function poly() {
	xUrl="https://poly.google.com/search/";
	xColor="#e4405f";
	xImage="poly";
	t3();
}
function giphy() {
	xUrl="https://giphy.com/search/";
	xColor="#7067ff";
	xImage="giphy";
	t3();
}

// Audio

function spotify() {
	document.getElementById("spotify").checked=true;
	xUrl="https://open.spotify.com/search/results/";
	xColor="#24CF5F";
	xImage="spotify";
	t3();
}
function soundcloud() {
	xUrl="https://soundcloud.com/search?q=";
	xColor="#f50";
	xImage="soundcloud";
	t1();
}
function tunein() {
	xUrl="https://tunein.com/search/?query=";
	xQuery="query";
	xColor="#0fb4aa";
	xImage="tunein";
	t2();
}
function shoutcast() {
	xUrl="https://directory.shoutcast.com/search?query=";
	xQuery="query";
	xColor="#2bcdd4";
	xImage="shoutcast";
	t2();
}
function tidal() {
	xUrl="https://listen.tidal.com/search?q=";
	xColor="#333";
	xImage="tidal";
	t1();
}
function lastfm() {
	xUrl="https://www.last.fm/search?q=";
	xColor="#b90000";
	xImage="last-fm";
	t1();
}
function musixmatch() {
	xUrl="https://www.musixmatch.com/search/";
	xColor="#FF0E83";
	xImage="musixmatch";
	t3();
}
function shazam() {
	xUrl="http://www.shazam.com/search/";
	xColor="#08F";
	xImage="shazam";
	t3();
}
function iheart() {
	xUrl="https://www.iheart.com/search/?q=";
	xColor="#C6002B";
	xImage="iheart-radio";
	t1();
}
function pandora() {
	xUrl="https://www.pandora.com/search/";
	xColor="#3668ff";
	xImage="pandora";
	t3();
}
function deezer() {
	xUrl="https://www.deezer.com/search/";
	xColor="#252525";
	xImage="deezer";
	t3();
}
function napster() {
	xUrl="https://napster.com/search?query=";
	xQuery="query";
	xColor="#2ca6de";
	xImage="napster";
	t2();
}
function _8tracks() {
	xUrl="http://8tracks.com/explore/";
	xColor="#2f364a";
	xImage="8tracks";
	t3();
}
function hypemachine() {
	xUrl="http://hypem.com/search/";
	xColor="#83c441";
	xImage="hype-machine";
	t3();
}
function bandcamp() {
	xUrl="https://bandcamp.com/search?q=";
	xColor="#408ea3";
	xImage="bandcamp";
	t1();
}
function genius() {
	xUrl="https://genius.com/search?q=";
	xColor="#e2e257";
	xImage="genius";
	t1();
}

// Local

function foursquare() {
	document.getElementById("foursquare").checked=true;
	xUrl="https://foursquare.com/explore?q=";
	xColor="#204dcc";
	xImage="foursquare";
	t1();
}
function googleMaps2() {
	xUrl="https://maps.google.com/maps/search/";
	xColor="#4285f4";
	xImage="google-maps";
	t3();
}
function yelp() {
	xUrl="https://www.yelp.com/search?find_desc=";
	xQuery="find_desc";
	xColor="#af0606";
	xImage="yelp";
	t2();
}
function mapQuest() {
	xUrl="https://www.mapquest.com/search/results?query=";
	xQuery="query";
	xColor="#a5cc00";
	xImage="mapquest";
	t2();
}
function airbnb() {
	xUrl="https://www.airbnb.com/s/";
	xColor="#FF5A5F";
	xImage="airbnb";
	t3();
}
function here() {
	xUrl="https://wego.here.com/search/";
	xColor="#00bcb7";
	xImage="here";
	t3();
}
function moovit() {
	xUrl="https://moovitapp.com/?from=";
	xQuery='from';
	xColor="#FF6131";
	xImage="moovit";
	t2();
}
function tripAdvisor() {
	xUrl="https://www.tripadvisor.com/Search?q=";
	xColor="#00a680";
	xImage="tripadvisor";
	t1();
}

// Shopping

function amazon() {
	document.getElementById("amazon").checked=true;
	xUrl="https://www.amazon.com/s/field-keywords=";
	xColor="#ff9900";
	xImage="amazon";
	t3();
}
function ebay() {
	xUrl="https://www.ebay.com/sch/i.html?_nkw=";
	xQuery="_nkw";
	xColor="#0063d2";
	xImage="ebay";
	t2();
}
function walmart() {
	xUrl="https://www.walmart.com/search/?query=";
	xQuery="query";
	xColor="#007dc6";
	xImage="walmart";
	t2();
}
function target() {
	xUrl="https://www.target.com/s?searchTerm=";
	xQuery="searchTerm";
	xColor="#c00";
	xImage="target";
	t2();
}
function bestBuy() {
	xUrl="https://www.bestbuy.com/site/searchpage.jsp?st=";
	xQuery="st";
	xColor="#e6ca00";
	xImage="best-buy";
	t2();
}
function groupon() {
	xUrl="https://www.groupon.com/browse/?query=";
	xQuery="query";
	xColor="#53a318";
	xImage="groupon";
	t2();
}
function wish() {
	xUrl="https://www.wish.com/search/";
	xColor="#2fb8ec";
	xImage="wish";
	t3();
}
function craigslist() {
	xUrl="https://craigslist.org/search/sss?query=";
	xQuery="query";
	xColor="#551A8B";
	xImage="craigslist";
	t2();
}
function etsy() {
	xUrl="https://www.etsy.com/search?q=";
	xColor="#F56400";
	xImage="etsy";
	t1();
}
function aliExpress() {
	xUrl="https://www.aliexpress.com/wholesale?SearchText=";
	xQuery="SearchText";
	xColor="#e62e04";
	xImage="aliexpress";
	t2();
}
function macys() {
	xUrl="https://www.macys.com/shop/featured/";
	xColor="#E22130";
	xImage="macys";
	t3();
}

//	News

function reuters() {
	document.getElementById("reuters").checked=true;
	xUrl="https://www.reuters.com/search/news?blob=";
	xQuery="blob";
	xColor="#ff8000";
	xImage="reuters";
	t2();
}
function cnn() {
	xUrl="https://edition.cnn.com/search/?q=";
	xColor="#cc0000";
	xImage="cnn";
	t1();
}
function theGuardian() {
	xUrl="https://theguardian.com/search/";
	xColor="#005689";
	xImage="the-guardian";
	t3();
}
function bbc() {
	xUrl="https://www.bbc.co.uk/search?q=";
	xColor="#262626";
	xImage="bbc";
	t1();
}
function nyt() {
	xUrl="https://www.nytimes.com/search?query=";
	xQuery="query";
	xColor="#1a1a1a";
	xImage="new-york-times";
	t2();
}
function huffPost() {
	xUrl="https://www.huffingtonpost.com/search?keywords=";
	xQuery="keywords";
	xColor="#0dbe98";
	xImage="huff-post";
	t2();
}
function forbes() {
	xUrl="https://www.forbes.com/search/?q=";
	xColor="#0f2d5f";
	xImage="forbes";
	t1();
}
function bloomberg() {
	xUrl="https://www.bloomberg.com/search?query=";
	xQuery="query";
	xColor="#2800D8";
	xImage="bloomberg";
	t2();
}
function washPost() {
	xUrl="https://www.washingtonpost.com/newssearch/?query=";
	xQuery="query";
	xColor="#111";
	xImage="washington-post";
	t2();
}
function aljazeera() {
	xUrl="https://www.aljazeera.com/search/?q=";
	xColor="#fa9000";
	xImage="aljazeera";
	t1();
}
function afp() {
	xUrl="https://www.afp.com/search/results/";
	xColor="#0085c8";
	xImage="afp";
	t3();
}
function flipboard() {
	xUrl="https://flipboard.com/search/";
	xColor="#F52828";
	xImage="flipboard";
	t3();
}
function digg() {
	xUrl="http://digg.com/search?q=";
	xColor="#222";
	xImage="digg";
	t1();
}

// Reference

function wikipedia() {
	document.getElementById('wikipedia').checked=true;
	xUrl="https://en.wikipedia.org/w/index.php?search=";
	xQuery="search";
	xColor="#888";
	xImage="wikipedia";
	t2();
}
function googleScholar() {
	xUrl='https://scholar.google.com/scholar?q=';
	xColor="#4285f4";
	xImage="google-schoolar";
	t1();
}
function microsoftAcademic() {
	xUrl="https://preview.academic.microsoft.com/search?q=";
	xColor="#0078d7";
	xImage="microsoft-academic";
	t1();
}
function quora() {
	xUrl="https://www.quora.com/search?q=";
	xColor="#b92b27";
	xImage="quora";
	t1();
}
function wolframAlpha() {
	xUrl="https://www.wolframalpha.com/input/?i=";
	xQuery="i";
	xColor="#f47f1d";
	xImage="wolframalpha";
	t2();
}
function academia() {
	xUrl="https://www.academia.edu/people/search?q=";
	xColor="#41454a";
	xImage="academia";
	t1();
}
function internetArchive() {
	xUrl="https://archive.org/search.php?query=";
	xQuery="query";
	xColor="#333";
	xImage="internet-archive";
	t2();
}
function stackExchange() {
	xUrl="https://stackexchange.com/search?q=";
	xColor="#356db6";
	xImage="stack-exchange";
	t1();
}
function researchgate() {
	xUrl="https://www.researchgate.net/search?q=";
	xColor="#0cb";
	xImage="researchgate";
	t1();
}
function arxiv() {
	searchForm.onsubmit=true;
	searchForm.action="https://arxiv.org/search/?query=";
	inputSubmit.name="query";
	helper.name="searchtype";
	helper.value="all";
	mainColor.style.backgroundColor="#b31b1b";
	logoImage.style.backgroundImage="url('images/logos/arxiv.svg')";
}
function plosone() {
	xUrl='https://journals.plos.org/plosone/search?q=';
	xColor='#333';
	xImage="plos-one";
	t1();
}

// Projects

function github() {
	document.getElementById('github').checked=true;
	xUrl="https://github.com/search?q=";
	xColor="#24292e";
	xImage="github";
	t1();
}
function codepen() {
	xUrl="https://codepen.io/search/pens?q=";
	xColor="#191919";
	xImage="codepen";
	t1();
}
function dribbble() {
	xUrl="https://dribbble.com/search?q=";
	xColor="#ea4c89";
	xImage="dribbble";
	t1();
}
function behance() {
	xUrl="https://www.behance.net/search?search=";
	xQuery="search";
	xColor="#0057ff";
	xImage="behance";
	t2();
}
function producthunt() {
	xUrl="https://www.producthunt.com/search?q=";
	xColor="#da552f";
	xImage="product-hunt";
	t1();
}
function kickstarter() {
	xUrl="https://www.kickstarter.com/discover/advanced?term=";
	xQuery="term";
	xColor="#034752";
	xImage="kickstarter";
	t2();
}
function indiegogo() {
	xUrl="https://www.indiegogo.com/explore/all?q=";
	xColor="#EB1478";
	xImage="indiegogo";
	t1();
}

// Torrent

function pirateBay() {
	document.getElementById('piratebay').checked=true;
	xUrl="https://thepiratebay.org/search/";
	xColor="#9d6844";
	xImage="the-pirate-bay";
	t3();
}
function rarbg() {
	xUrl="https://rarbgproxied.org/torrents.php?search=";
	xQuery="search";
	xColor="#3860bb";
	xImage="rarbg";
	t2();
}
function torrentz2() {
	xUrl="https://torrentz2.eu/search?f=";
	xQuery="f";
	xColor="#369";
	xImage="torrentz2";
	t2();
}
function zooqle() {
	xUrl="https://zooqle.com/search?q=";
	xColor="#b5b359";
	xImage="zooqle";
	t1();
}
function extraTorrent() {
	xUrl="http://extratorrent.cd/search/?search=";
	xQuery="search";
	xColor="#0067a9";
	xImage="extra-torrent";
	t2();
}
function yts() {
	xUrl="https://yts.am/browse-movies/";
	xColor="#6AC045";
	xImage="yts";
	t3();
}
function _1337x() {
	xUrl="http://1337x.to/search/";
	xColor="#d63600";
	xImage="1337x";
	t3();
}
function eztv() {
	xUrl="https://eztv.ag/search/";
	xColor="#10559e";
	xImage="eztv";
	t3();
}