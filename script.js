$(document).ready(function(){
    $.getJSON("https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/", function(data){
        $("<img>").attr("src", data.images[0].url).appendTo(".50s");
    });
});