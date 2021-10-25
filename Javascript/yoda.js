var completeVerse;

function send() {
    //let yodaText = document.getElementById('yoda-text').value;
    //document.getElementById('original-text').innerHTML = yodaText;
    document.getElementById('translation-text').innerHTML = "Sorry, the free Yoda API I am using only allows a certain amount of translations per day and hour. Come back later and try again.";

    let book = document.getElementById('book').value;
    let chapter = document.getElementById('chapter').value;
    let verse = document.getElementById('verse').value;
    
    $.getJSON(
        `https://bible-api.com/${book}+${chapter}:${verse}`,
        function(data) {
            completeVerse = data.text;
            document.getElementById('original-text').innerHTML = completeVerse;
            
            $.getJSON(
                `https://api.funtranslations.com/translate/yoda.json?text=${completeVerse}.`,
                function(data) {
                    var translated = data.contents.translated;
        
                    document.getElementById('translation-text').innerHTML = translated;
            });
    });
}