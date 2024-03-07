$(function () {
    var flame = $("#flame");
    var txt = $("h1");

    flame.on({
        click: function () {
            flame.removeClass("burn").addClass("puff");
            $(".smoke").each(function () {
                $(this).addClass("puff-bubble");
            });
            $("#glow").remove();
            txt.hide()
                .html("It <b>will</b> come true..")
                .delay(750)
                .fadeIn(300);
            $("#candle").animate(
                {
                    opacity: ".5",
                },
                100
            );

            setTimeout(function () {
                alert("Jangan bosan-bosan sama Dhana ya... 🥹");
                alert("Maaciii... 🫶🏻✨");
                window.location.replace("index.html");
            }, 5000);
        },
    });
});
