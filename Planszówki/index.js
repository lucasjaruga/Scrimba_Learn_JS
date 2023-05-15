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

// homework: zwrócić posortowane po tytule bez edycji (pracować na kopii arraya - deepcopy lub deepclone)

// 2. jaki jest średni czas gry w danym gatunku. Przedstawić w formie obiektu i wyświetlić w konsoli
// zrobić z tego tabelę w htmlu i podstawić wyniki
/**
 * {
 *  "economy" : 90,
 *  "push your luck": 20
 * ....
 * }
 */

Object.freeze(data);

function gameFilter(game, numberOfPlayers, gameGenre) {
    console.log(`numberOfPlayers: ${numberOfPlayers}, gameGenre: ${gameGenre}`)
    const minPlayers = game.minPlayers <= numberOfPlayers;
        const maxPlayers = game.maxPlayers >= numberOfPlayers;
        const genre = game.genre === gameGenre;
        return minPlayers && maxPlayers && genre;
}

/**
 * @param numberOfPlayers - number of players we want to search for 
 * @param genre - type of game
 */
function whichGame(numberOfPlayers, gameGenre) {
    const result = data.filter(game => {
        const minPlayers = game.minPlayers <= numberOfPlayers;
        const maxPlayers = game.maxPlayers >= numberOfPlayers;
        const genre = game.genre === gameGenre;
        return minPlayers && maxPlayers && genre;
    });

    const result2 = data.filter(gameFilter);

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