/* $("h1").addClass("wrong");

$("h1").removeClass("wrong");

$("h1").toggleClass("wrong");

$("input").val("hello");


$("#password").attr("type", "text");

$("#password").attr("type");

$("h1").html("Hello <i> how </i>");

$("h1").text("Hello");
 */

/* $("button").click(function () {
    $(this).css({ color: "green", fontWeight: "bold" });

})

$("input[type='email']").keypress(function (event) {
    console.log(event);
})

$("input[type='email']").keypress(function (event) {
    if (event.which === 13) { console.log("hello"); }
})

$("h1").on("mouseenter", function () { $(this).css("color", "green"); })

$("h1").on("mouseleave", function () { $(this).css("color", "black"); })

$("button").click(function () {
    $("p.effects").fadeIn("10000");
})

$("button").click(function () {
    $("p.effects").fadeOut("10000");
}) */

$("button").click(function () {
    $("p.effects").slideToggle("20000");
})



