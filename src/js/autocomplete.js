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
					console.log("%cAPI call - Autocomplete", logAction);
					var suggestions = [];
					$.each(data[1], function (i, val) {
						suggestions.push(val);
					});
				// limit suggestions
				response(suggestions.slice(0, 5));
				}
        	});
        }
	});

}, false);