$(document).ready(function(){
    const gamesListCont = $("#resultListCont");

    const params = new URLSearchParams();
    params.append("limit", 5);
    
    fetch("https://zelda.fanapis.com/api/games?" + params)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            console.log(result);
            let games = result.data;

            games.forEach(function(game) {
                let listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                let link = document.createElement('a');
                link.textContent = game.name;
                link.href = 'game.html?id=' + game.id;
                listItem.appendChild(link);
                gamesListCont.append(listItem);
            });

        })
        .catch(function(err) {
            console.log(err);
        });

    
});