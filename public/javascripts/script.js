var listSize = 0;
$(function (){
  setInterval(function(){
    $.post( "/", function( data ) {
      currentListSize = data.data.length;
      if ( currentListSize > listSize){
        var listItem = $("ul").prepend('<li>' + data.data[listSize].Body + '</li>').hide();
        listItem.fadeIn('slow');
        listSize += 1;
      }
    });
  }, 2000);
});
