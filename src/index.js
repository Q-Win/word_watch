import $ from 'jquery'

$(document).ready(() => {
  // have fun!
  var submitWordButton = document.getElementById("submit-new-word")
  submitWordButton.addEventListener("click",clickSubmit, true);

})


var request = new XMLHttpRequest();

function getTopWord(){
  request.open('GET', "https://wordwatch-api.herokuapp.com/api/v1/top_word")
  request.onload = function() {
    var word = JSON.parse(request.responseText)
    var key = Object.keys(word.word)
    var count = word.word[key]
    formatWord(key, count)
  };
  request.send();

}

function formatWord(word, count){
    $("#top-word").empty();
    $("#top-word").append(`<h3>${word} is used a total ${count} times</h3>`)
}

function postWord(word) {

  var body = {"word": {"value": `${word}`}};

  $.ajax({
    type:"POST",
    url: "https://wordwatch-api.herokuapp.com/api/v1/words",
    data: body,
    dataType: "json"
  })
  event.preventDefault()
}


function clickSubmit(){
  var userText = document.getElementById("user-text").value
  var word_array = userText.split(" ")
  for (var i = 0; i<word_array.length; i++){
    postWord(word_array[i])

  }
  getTopWord();
}

getTopWord();
