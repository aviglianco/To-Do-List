$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
})

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(200, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input").keypress(function(event) {
    if (event.which === 13) {
        var toDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDo + "</li>");
    }
})

$(".fa-edit").on("click", function() {
    $("input").fadeToggle();
})

$(".eraseAll").on("click", function() {
    $("li").fadeToggle(200, function() {
        $("li").remove();
    });
})