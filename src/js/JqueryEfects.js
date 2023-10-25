$("#menu").mouseover(function() {
    $(this).css("background-color", "white");
    $(this).css("color", "red");
    $(this).animate({
        opacity: 1.0,
        fontSize: "18px",
    }, 50 );
});

$("#menu").mouseleave(function() {
    $(this).css("background-color", "rgb(1, 1, 1)");
    $(this).css("color", "white");
    $(this).animate({
        opacity: 1.0,
        fontSize: "20px",
        borderWidth: "10px"
    }, 50 );        
});