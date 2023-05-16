const data = [{
    name: "Sushi Go",
    minPlayers: 2,
    maxPlayers: 5,
    time: 45,
    genre: "party"
},
{
    name: "Stwory z Obory",
    minPlayers: 1,
    maxPlayers: 5,
    time: 30,
    genre: "party"
},
{
    name: `Warhammer 40k`,
    minPlayers: 2,
    maxPlayers: 2,
    time: 120,
    genre: `battle`
},
{
    name: `Game of Thrones`,
    minPlayers: 2,
    maxPlayers: 6,
    time: 240,
    genre: `politics`
},
{
    name: `Świńska gra`,
    minPlayers: 1,
    maxPlayers: 8,
    time: 20,
    genre: `push your luck`
},
{
    name: `Łąka`,
    minPlayers: 2,
    maxPlayers: 4,
    time: 90,
    genre: `strategy`
},
{
    name: `Karczma pod Pękatym kuflem`,
    minPlayers: 2,
    maxPlayers: 6,
    time: 90,
    genre: `economy`
},
{
    name: `Ładny tytuł gry`,
    minPlayers: 3,
    maxPlayers: 5,
    time: 30,
    genre: `strategy`
}
];

Object.freeze(data);

/**
 * @function - this is just a filter patern for other function.  Use it if you wanna filter boardgames by noPlayers and genre
 */
function gameFilterByNoPlayersAndGenre(game, numberOfPlayers, gameGenre) {

    console.log(`numberOfPlayers: ${numberOfPlayers}, gameGenre: ${gameGenre}`)

    const minPlayers = game.minPlayers <= numberOfPlayers;
    const maxPlayers = game.maxPlayers >= numberOfPlayers;
    const genre = game.genre === gameGenre;
    
    return minPlayers && maxPlayers && genre;
}

/**
 * @param numberOfPlayers - number of players we want to search for 
 * @param gameGenre - genre of game
 */
function whichGame(numberOfPlayers, gameGenre) {
    
    const result = data.filter(game => {
        const minPlayers = game.minPlayers <= numberOfPlayers;
        const maxPlayers = game.maxPlayers >= numberOfPlayers;
        const genre = game.genre === gameGenre;
        return minPlayers && maxPlayers && genre;
    });

    const result2 = data.filter(gameFilterByNoPlayersAndGenre);

    result.sort(compareGameTime)
  

    return result
}

function compareGameTime(game1, game2){
    return game1.time - game2.time
}

console.log(whichGame(1, "party"))
console.log(`*********`)
console.log(whichGame(2, "party"))
console.log(`*********`)
console.log(whichGame(8, "party"))


// HOMEWORK
// 1. Zwrócić posortowane po tytule, bez edycji oryginalnej tablicy (pracować na kopii arraya - deepcopy lub deepclone)

// creating deepcopy of array with boardgames
let data_deepcopy = JSON.parse(JSON.stringify(data))

/**
 * @function - this is just a filter patern for other function. Use it if you wanna filter boardgames by titles
 */
function gameFilterByTitle(game) {
    const gameTitle = game.name;
    return gameTitle;
}

/**
 * @param arrayWithBoardGames - array with boardgames which we wanna sort by theirs titles
 */
function sortByTitle(arrayWithBoardGames){
    
}



// 2. jaki jest średni czas gry w danym gatunku. Przedstawić w formie obiektu i wyświetlić w konsoli
// 3. zrobić z tego tabelę w htmlu i podstawić wyniki

/**
 * {
 *  "economy" : 90,
 *  "push your luck": 20
 * ....
 * }
 */