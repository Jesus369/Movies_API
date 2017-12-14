let body = $("body ")
let moviesContainer = $('#moviesContainer')
let displayMovieInfo = $('#displayMovieInfo')

let url = 'http://www.omdbapi.com/?s=batman&apikey=db875066'

$.get(url, function( data ) {

  $(data.Search).each(function(index,movie) {

    $('<div>').attr({ class : 'movieDivContainer' })
    .append($('<p>').attr({ id: 'posterHolder' }).html(`<a href="#"><img src="${movie.Poster}"/></a>`))
    .append($('<p>').attr({ id : 'titleHolder'  }).html(`<a href="#">${movie.Title}</a>`)).click(function(){

      console.log('this title was clicked')
      displayingMovieInfo(imdbID)
      return false;

    }).appendTo($(moviesContainer))

    let imdbID = movie.imdbID
    console.log(imdbID)

  })
})

function displayingMovieInfo ( imdbID ) {

  let infoURL = 'http://www.omdbapi.com/?i=' + imdbID + '&apikey=db875066'

  $.get(infoURL, function(detail)  {
    $(detail).each(function(index,info){
      $('<div>').attr({ class : "infoListings", id: "infoList"})
      .append($('<img>').attr("src",info.Poster))
      .append($('<h2>').html(`${info.Genre}`))
      .append($("<p>").html(`${info.Plot}`))
      .append($("<h4>").html(`${info.Year}`))
      .append($("<h4>").html(`${info.Rated}`))
      .append($("<h4>").html(`${info.Runtime}`)).appendTo($(displayMovieInfo))
      $("#infoList").hide().html($("#infoList").html()).show(1000)
      return false;
    })
  })
}
