// Makes it so that it goes to top everytime you refresh or load to page

$( window ).on( "load", function() {
    $(this).scrollTop(0);
});