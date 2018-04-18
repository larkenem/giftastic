$(document).ready(function(){

    var main = $("body");
    var topics = ["say what!?", "girl, please", "OMG", "oh, hell no!", "LOL", "YAS!"];
    var btns = main.find("#buttons");

    for (x = 0; x < topics.length; x++){
        console.log(topics[0]);

        var topicsButton = $("<button>");

        // topicsButton.addClass("topics-button topics topics-button-color");

        topicsButton.attr("data-topics", topics[x]);

        topicsButton.text(topics[x]);

        btns.append(topicsButton);

        // var b = $("<button>" + topics[0] + "</button>")
        // buttons.appendTo(b);
    }

});