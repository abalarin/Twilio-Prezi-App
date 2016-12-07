var listSize = 0;
$(function (){

  // Send post req to server every 2 sec to check for updated messages in Database
  setInterval(function(){
    $.post( "/", function( data ) {
      // Check size of message list
      currentListSize = data.data.length;

      // If size is bigger than previously update page
      if ( currentListSize > listSize){
        // JQuery Prepend new message to the ul on screen with an effect
        $("ul")
          .prepend('<li>' + data.data[listSize].Body + '</li>')
          .hide()
          .fadeIn('slow');
        listSize += 1;
      }
    });
  }, 2000);
});
