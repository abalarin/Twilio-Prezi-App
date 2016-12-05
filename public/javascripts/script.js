var listSize = 0;
$(function (){
  // var jax = $.post( "/", function( data ) {
  //   listSize = data.data.length;
  //   for (var i = 0; i < data.data.length; i++) {
  //     var size = data.data[i].Body.length;
  //     console.log(size);
  //     for (var j = 0; j < size; j++) {
  //       var msg = data.data[i].Body[j];
  //       $("ul").prepend('<li id=' + msg + '>' + msg + '</li>');
  //     }
  //   }
  // });

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
