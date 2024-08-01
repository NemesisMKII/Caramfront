$(document).ready(() => {
    var url = "https://caremback.onrender.com/jokes/random"
    $('#jokebutton').click(() => {
        $.get(url, (data) => {
            console.log(data[0][0]);
            $('#joke > #question').text(data[0][0].jokequestion)
            $('#joke > #answer').text(data[0][0].jokeanswer)
        })
    })
})