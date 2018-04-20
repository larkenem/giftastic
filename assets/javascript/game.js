$(document).ready(function () {

    var main = $("body");
    var topics = ["say what!?", "girl, please", "OMG", "oh, hell no!", "LOL", "YAS!", "WTF?!",
        "FML"];
    var btns = main.find("#buttons");

    function renderButtons() {

        $("#buttons").empty();

        for (x = 0; x < topics.length; x++) {

            var topicsButton = $("<button>");
            topicsButton.attr("data-topics", topics[x]);
            topicsButton.text(topics[x]);
            btns.append(topicsButton);
        };

        $("button").on("click", function () {

            var x = $(this).attr("data-topics");
            console.log(x);
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x +
                "&api_key=NvJThpJjjt7FbQnlc8ajTkBkcMsflaVV&limit=10";
            
            $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                .then(function (response) {

                    console.log(queryURL);
                    console.log(response);

                    var results = response.data;

                    for (var x = 0; x < results.length; x++) {

                        var gifDiv = $("<div>");
                        var p = $("<p>").text("Rating: " + results[x].rating);
                        var gifImage = $("<img>");

                        gifImage.attr("src", results[x].images.fixed_width.url);
                        gifDiv.append(p);
                        gifDiv.append(gifImage);
                        gifImage.attr("data-still", results[x].images.fixed_width_still.url);
                        gifImage.attr("data-animate", results[x].images.fixed_width.url);
                        gifImage.attr("data-state", "animate");
                        gifImage.attr("class", "gif");

                        $("#gifs").prepend(gifDiv);

                    };

                    $(".gif").on("click", function () {

                        var state = $(this).attr("data-state");

                        if (state === "animate") {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                            } 

                        else {
                            $(this).attr("src", $(this).attr("data-animate"));
                            $(this).attr("data-state", "animate");
                            };
                    });

                    renderButtons();

                });
        });
    };

    $("#add-gif").on("click", function (event) {

        event.preventDefault();

        var newInput = $("#gif-input").val().trim();

        topics.push(newInput);

        renderButtons();

    });

    renderButtons();

});