/*
    Bing Autosuggest API
    https://api.bing.com/osjson.aspx?market=en-US&query=peace
*/

$(function () {
    $("#search-input").autocomplete({
        source: function (request, response) {
            // console.log("source");
            $.ajax({
                url: "https://api.bing.com/osjson.aspx?market=en-US&query=" + encodeURIComponent(request.term) + "&JsonType=callback&JsonCallback=?",
                dataType: "jsonp",

            success: function (data) {
                // console.log(data);
                var suggestions = [];
                $.each(data[1], function (i, val) {
                    suggestions.push(val);
                });
                // returns a list of suggestions
                response(suggestions.slice(0, 5));

                }
            });
        }
    });
});