$("h1").each(function () {
    // condition checking for class bingo
    if($(this).attr("class") != 'bingo'){
  var NewElement = $("<h2>"); //creating new element
  //adding attributes to new element
  $.each(this.attributes, function (i, attrib) {
    $(NewElement).attr(attrib.name, attrib.value);
  });
  //replacing old element with new one
  $(this).replaceWith(function () {
    return $(NewElement).append($(this).contents());
  });}
});
