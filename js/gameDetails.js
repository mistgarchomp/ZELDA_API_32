// Recuperamos el ID del juego que está en la URL
const urlParams = new URLSearchParams(window.location.search);
const gameID = urlParams.get("id");

const gameDetailsCont = $("#gameDetailsCont");

fetch("	https://zelda.fanapis.com/api/games/" + gameID)
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result.data);
        let gameData = result.data;
        let detailsHTML = `
                <img src="img/${gameID}.jpg">
                <h2>${gameData.name}</h2>
                <p>${gameData.description}</p>
                <p>Fecha de lanzamiento: ${gameData.released_date}</p>
                <p>Desarrollador: ${gameData.developer}</p>
                <p>Publisher: ${gameData.publisher}</p>
                
        `;
        gameDetailsCont.html(detailsHTML);
    })
    .catch(function(err){
        console.log(err);
        
    });