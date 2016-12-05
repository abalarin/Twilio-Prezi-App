var listSize = 0;
$(function (){
  var jax = $.post( "/", function( data ) {
    listSize = data.data.length;
    for (var i = 0; i < data.data.length; i++) {
      $("ul").prepend('<li>' + data.data[i].Body + '</li>');
    }
  });

  setInterval(function(){
    $.post( "/", function( data ) {
      currentListSize = data.data.length;
      if ( currentListSize > listSize){
        $("ul").prepend('<li>' + data.data[listSize].Body + '</li>');
        listSize += 1;
      }
    });
  }, 2000);
});
