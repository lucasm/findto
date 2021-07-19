new autoComplete({
    selector: '#search-input',
    source: function(term, response){
        $.getJSON("https://api.bing.com/osjson.aspx?market=" + userLang + "&query=" + encodeURIComponent(term.i) + "&JsonType=callback&JsonCallback=?",
        { q: term },
        function(data){
            response(data);
            console.log(data)
        });
    }
});