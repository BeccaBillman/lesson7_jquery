
//change the background color h3 element when mouse hovers over it $("h3").hover(function()
{
$(this).css("background-color", "yellow");
}, function()
{ 
    $(this).css("background-color", "pink");
});

//hover() will trigger display2 method each time mouse hovers over header $(“h3”).hover(display2);