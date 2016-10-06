/*
$(document).ready(function(){
    
    $.getJSON("https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/", function(data){
        //$("<img>").attr("src", data.images[0].url).appendTo("#fifties");
        $(".artist-title").append(data.name);
        $(".artist-image").attr("src", data.images[0].url);
    });
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Elvis+Presley&api_key=d7c4e66cb9d80c4c8dede52e9805d669&format=json&callback=?", function(data){
        $(".artist-desc").append(data.artist.bio.summary);
    });
    
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=rock+n+roll&api_key=d7c4e66cb9d80c4c8dede52e9805d669&format=json&callback=?", function(data){
        $(".genre-title").append(data.tag.name);
        $(".genre-desc").append(data.tag.wiki.summary);
    }); 
    
});


$("section").hide();

$("#fifties").show();

$(".next").on("click", function(){
    $("#fifties").fadeOut();
    $("#sixties").fadeIn();
});
*/
$(document).ready(function(){
    var section = $("section");
    var prevArrow = $(".prev");
    var nextArrow = $(".next");
    
    
    // Arrow navigation
    prevArrow.hide();

    nextArrow.click(function(e){
        e.preventDefault();
        prevArrow.show();
        $(".current").removeClass("current").fadeOut().next().fadeIn().addClass("current");
        if($("#seventies").hasClass("current")){
            nextArrow.hide();
        }
    });

    prevArrow.click(function(e){
        e.preventDefault();
        nextArrow.show();
        $(".current").removeClass("current").fadeOut().prev().fadeIn().addClass("current");
        if($("#intro").hasClass("current")){
            prevArrow.hide();
        }
    });
    
    // NAV list navigation4
    $(function(){
        $(".timeline ul li a").click(function(e){
            e.preventDefault();
            var $anchor = $(this);
            $(".current").removeClass("current").fadeOut();
            $($anchor.attr("href")).fadeIn().addClass("current");
        })
    });
});