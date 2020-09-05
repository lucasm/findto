# Findto.app

A search tool for the Web diversity.

Findto is a open source visual search tool, with one mission: put people in control of the search algorithms, encouraging discoverability and choice on the Web. You can use the power of multiple search engines, sites and apps to quickly find any content on the Web.


### Features

- **Search Categories** — Quickly search - the same term - in multiple search engines, or find exactly what you are looking for directly on the most popular sites and apps.

- **Trends** — Trending searches, content and places nearby you.

- **Privacy Score** — A rank of how committed is the search provider (or tech company behind them) about your privacy and treating personal data.

- **Weather** — Local date, time and weather.

- **Autosuggestions** — Search terms suggestions as you type.

- **Speech Recognition** — Use your voice to search, anywhere.

- **Accessibility** — Light and dark theme, access keys, declarative labels and mutable layout.


### Motivations

Ok, why do this?

Because the Web is bigger than biggest players. Sometimes we forgot of how this is important for strengthen our democracies, our own knowledge and to support - or become inspired using - new and innovative digital experiences.

How make searches really free? How bring a way to put people in control of the search algorithms, and not the inverse? How privative is this search? What are others searching on this subject? Where else can I search? This is the questions that motivated me to create Findto.

And also as a personal challenge for me. To develop a PWA using vanilla JavaScript, CSS and HTML on the front-end. And a Express server to pre-process APIs for the app on the back-end.


### Search Categories

For chose the items available on the search categories, I used the comparatives tools of Alexa, SimilarWeb and AlternativeTo to find the the most popular services on the Web and alternatives for them.

- **Web** — Find everything with search engines.
```
Google, Bing, DuckDuckGo, Yahoo, Qwant, Startpage, searx, Yandex, Baidu, Info, Yippy, Mojeek, Swisscows, Gibiru
```

-  **Social** — Find posts, profiles, pages and stories.
```
Twitter, Facebook, Instagram, LinkedIn, Pinterest, reddit, TikTok, Tumblr, Snapchat, Periscope, Meetup, VK, Ello, Myspace
```

-  **Video** — Find videos, movies, TV shows, channels and live streams.
```
YouTube, Twitch, Netflix, Prime Video, Dailymotion, Vimeo, Hulu, Disney+, TED, Fandango, Plex, Vudu, Metacafe, Veoh, Aol
```

*  **Audio** — Find songs, artists, albums, lyrics, podcasts and radio stations.
```
Spotify, SoundCloud, Apple Music, Last.fm, Pandora, TuneIn, Deezer, TIDAL, Genius, Musixmatch, iHeartRadio, Shoutcast, Hype Machine, Bandcamp
```

*  **Image** — Find GIFs, stock photos, illustrations, 3D models and paints.
```
GIPHY, Flickr, Unsplash, Pexels, Freepik, Pixabay, Shutterstock, Getty Images, Adobe Stock, SmugMug, 500px, Poly, CC, Imgur, DeviantArt, Dribbble, Behance
```

*  **Local** — Find places, events, maps, routes and accommodations.
```
Foursquare, Google Maps, Bing Maps, Yelp, Tripadvisor, Booking, Airbnb, Moovit, Uber, HERE WeGo, Mapquest
```

*  **Shopping** — Find products.
```
Amazon, AliExpress, Ebay, Walmart, Target, Best Buy, Etsy, Wish, Macys, Groupon, Craigslist
```

*  **News** — Find news.
```
Pocket, Medium, Flipboard, Digg, Feedly, Reuters, CNN, NY Times, BBC, Guardian, HuffPost, Forbes, Bloomberg, Washington Post, Aljazeera, AP
```

*  **Academic** — Find definitions, scientific publications, researches and Q&As.
```
Wikipedia, Google Scholar, Microsoft Academic, Academia, ResearchGate, arxiv, PLOS ONE, CORE, BASE, Stack Exchange, Quora, Brainly, Wolfram Alpha, Golden
```

*  **Code** — Find repositories, packages and modules.
```
GitHub, Stack Overflow, GitLab, Bitbucket, CodePen, searchcode, npm, Yarn, PyPI, NuGet, Packagist, RubyGems, Crates
```

*  **Jobs** — Find permanent, remote or freelance work.
```
USAJOBS, Upwork,
```

*  **Torrent** — Find shared files.
``` 
UNRELEASED - Some files on torrent sites may infringe copyright. To avoid misinterpretations or even lawsuit, this category is current suspended.
```

## Contributing

View the [opened issues](https://github.com/lucasmezs/findto/issues) or create a new, before send pull requests.

**Donate** — If you would like to support the development by making a donation you can do so! [Become a supporter on Patreon](https://www.patreon.com/lucasmezs) for help pay app costs (domain, hosting and APIs calls). You also help build next features!

**Feedback** — [Send your feedback](https://lucasmezs.typeform.com/to/YRBtGI) <3

## Privacy

Findto just redirect you to external services, by design, sending clean URLs parameters to avoid default tracking of search services. Note that, even with this effort, some of them can still track your searches and collect your personal data using other methods to identify you, like cookies and device fingerprint.

Public user info, like browser language and country, or private info, like geolocation and microphone access (when enabled by user), are used as parameters for display contextual data on the app. To safeguard users' privacy, Findto uses a back-end layer called 'API Service' to process all APIs requests in isolation, without identify user, to try avoid third parties track, store or combine user data.

Findto uses cookies only to save user preferences and temporarily store contextual data. Also has a analytics tool enabled to anonymously improve the user experience, as described in [Privacy Policy](https://github.com/lucasmezs/findto/blob/master/PRIVACY.md).

## Legal

Licensed under [MIT license](https://github.com/lucasmezs/findto/blob/master/LICENSE.md).

**External APIs** — Contextual data in the app is made possible by them. Thanks to:

- [Web Speech API](https://developer.mozilla.org/docs/Web/API/Web_Speech_API) — speech recognition
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) — caching
- [Bing Autosuggest API](https://azure.microsoft.com/services/cognitive-services/autosuggest) — autosuggestions
- [Privacy Monitor API](https://www.privacymonitor.com/api) — privacy scores
- [OpenWeatherMap API](https://openweathermap.org) —  weather forecasting
- [Google Trends RSS](https://trends.google.com/trends/trendingsearches/daily) — search trends
- [Twitter API](https://developer.twitter.com/products/twitter-api) — trending topics
- [TMDb API](https://developers.themoviedb.org) / [YouTube API](https://developers.google.com/youtube) — videos
- [Tenor GIF API](https://tenor.com/gifapi) — image terms
- [Last.fm API](https://www.last.fm/api) / [iTunes RSS](http://rss.itunes.apple.com/) — music and podcasts
- [Best Buy API](https://developer.bestbuy.com) — products
- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) / [Foursquare Places API](https://developer.foursquare.com/places) — location and places
- [News API](https://newsapi.org) — news headlines
- [GitHub Trending API](https://github.com/huchenme/github-trending-api) / [DEV API](https://docs.dev.to/api) — repos and programming articles
- [Microsoft Academic API](https://academic.microsoft.com/topics) — topics and citations

**Copyright and Service Violation** — All trademarks and external services found on this app belong to their respective owners and have attribution to the original source. All rights reserved to the owners. If you believe that your intelectual property or a service has been used incorrectly, please, mail to legal@lucasm.dev.

**Content Removal** — Even though Findto have links for third-party websites and applications, is impossible to revise the content of each them. For any law violation or bad conduct by some service, please, consider report this as a issue.
