$(document).ready(() => {
    var url = "http://localhost:3000/jokes/random"
    $('#jokebutton').click(() => {
        $.get(url, (data) => {
            console.log(data[0][0]);
            $('#joke > #question').text(data[0][0].jokequestion)
            $('#joke > #answer').text(data[0][0].jokeanswer)
        })
    })
})