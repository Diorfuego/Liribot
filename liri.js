require("dotenv").config();
//Variable Alert!
var keys = require("./keys");
var request = require("request");
var Spotify = require("node-spotify-api");
var moment = require("moment"); //formats concerts api
var fs = require("fs");

var input = process.argv;  //what command line takes in
var action = input[2];
var inputs = input[3]; //what the user types in after, the paramenters

switch (action) {
    case "spotify-this-song": // "spotify this song" anacts the function 
    Spotify(inputs);
    break;

    case "movie-this":
    Spotify(inputs);
    break;

    case "concert-this":
    Spotify(inputs);
    break;
 
    case "do-what-it-says":
    Spotify(inputs);
    break;

}

//movie function, takes in query url
function movie(inputs) {
    var queryUrl = 
    "" + inputs + "";

request(queryUrl, function(error, response, body) {

    var results = JSON.parse(body); //parse the body so its easier to console log results
    console.log("Title: " + results.Title);
    console.log("Release Year: " + results.Year);
    console.log("IMDB Rating: " + results.imdbRating);
    console.log("Rotten Tomatoes Rating: " + results.Ratings[1].Value);
    console.log("Country: " + results.Country);
    console.log("Language: " + results.Language);
    console.log("Plot: " + results.Plot);
    console.log("Actors: " + results.Actors);
}

}

// Concert call for the api
function concert(inputs) {
    var queryURl =
    "" + inputs + "";

request(queryURl, function(error, response, body) {
    if (!inputs) {
        inputs = "Not Today, Jack";
    }
 var result = JSON.parse(body)[0]; //easier to type out for the console log
 if (!error && response.statusCode === 200) {

        console.log("City: " + result.venue.city);
        console.log("Venue Name: " + result.venue.name);
    console.log(
        "Date of Event: " + moment(result.datetime).formtat("MM/DD/YYY")
    );
 }
});
}


// this function reads  random.txt file
function doIt(inputs) { 
    fs.readFile("random.txt", "utf-8", function(err,buf) {
        console.log(buf.toString());
    });

    }
    //Calls API for Spotify
    function spotify(inputs) {
        var spotify = new Spotify({
            id:
            secret:

        });
    }

    if (!inputs) {
        inputs = "the Sign";
    }
    spotify.search({ type: "track", query: inputs }, function(err,data){
        if (err) {
            console.log("error occurred:" + err);
            return;
        }

        var songInfo = data.tracks.items;
        console.log("Artist(s): " + songInfo[0].artists[0].name);
        console.log("Song Name: " + songInfo[0].name);
        console.log("Preview Link: " + songInfo[0].preview_url);
        console.log("Album: " + songInfo[0].album.name)

    });
    

}




