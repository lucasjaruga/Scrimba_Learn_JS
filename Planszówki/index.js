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
]

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

    // const result2 = data.filter(gameFilterByNoPlayersAndGenre);

    result.sort(compareGameTime)    

    return result
}

function compareGameTime(game1, game2){
    return game2.time - game1.time
}

console.log("---------WYNIK SORTOWANIA PO ILOŚCI GRACZY ORAZ GATUNKU---------")
// console.log(whichGame(1, "party"))
// console.log(`*********`)
console.log(whichGame(2, "party"))
console.log(`*********`)
console.log(whichGame(8, "party"))
console.log(`*********`)
console.log(whichGame(3, "strategy"))

// HOMEWORK
// 1. Zwrócić posortowane po tytule, bez edycji oryginalnej tablicy (pracować na kopii arraya - deepcopy lub deepclone)

let data_deepcopy = JSON.parse(JSON.stringify(data))

function whichGame2(numberOfPlayers, gameGenre) {
    
    const result = data_deepcopy.filter(game => {
        const minPlayers = game.minPlayers <= numberOfPlayers;
        const maxPlayers = game.maxPlayers >= numberOfPlayers;
        const genre = game.genre === gameGenre;
        return minPlayers && maxPlayers && genre;
    });

    // const result2 = data.filter(gameFilterByNoPlayersAndGenre);

    result.sort(sortByTitle)    

    return result
}

console.log("---------WYNIK SORTOWANIA PO TYTULE---------")
console.log(whichGame2(2, "party"))
console.log(`*********`)
console.log(whichGame2(8, "party"))
console.log(`*********`)
console.log(whichGame2(3, "strategy"))

// sorting function
function sortByTitle(game1, game2){
    let name1 = game1.name.toLowerCase()
    let name2 = game2.name.toLowerCase()

    return name1.localeCompare(name2)
}

// 2. jaki jest średni czas gry w danym gatunku. Przedstawić w formie obiektu i wyświetlić w konsoli

/**
 * {
 *  "economy" : 90,
 *  "push your luck": 20
 * ....
 * }
 */

let data_deepcopy2 = JSON.parse(JSON.stringify(data))

let genresToCheck = [`party`, `push your luck`, `strategy`]


function avgTimeForGenre(arrayWithGenres){

    let mapWithResults = new Map()

    for(let i = 0; i < arrayWithGenres.length; i++){
        const result = data_deepcopy2.filter(game => {
            return game.genre === arrayWithGenres[i]
        })

        let timeSum = sumGamesTime(result)
        let noGames = result.length
        let avgTime = calcAvgTime(timeSum, noGames)

        mapWithResults.set(arrayWithGenres[i], avgTime)
    }
    
    const finalResultObject = Object.fromEntries(mapWithResults)

    // return console.log(finalResultObject)
    let noRowsInTable = arrayWithGenres.length
    generateTable(noRowsInTable, finalResultObject)
}

function sumGamesTime(arrayWithGames){
    let result = 0
    for(let i = 0; i < arrayWithGames.length; i++){
        result += arrayWithGames[i].time
    }

    return result
}

function calcAvgTime(time, noGames){
    return time / noGames

}

// console.log("---------WYNIK OKREŚLENIA ŚREDNIEGO CZASU GRY DLA DANEGO GATUNKU---------")
avgTimeForGenre(genresToCheck)

// 3. zrobić z tego tabelę w htmlu i podstawić wyniki

function generateTable(noRowsToCreate, objectWithData) {
    let generatedTable = ""
    const tableEL = document.getElementById("table-el")
    const objectParam = Object.getOwnPropertyNames(objectWithData)
    
   for (let i = 0; i < noRowsToCreate; i++) {
        generatedTable += `<tr>
                            <td>${objectParam[i]}</td>
                            <td>${objectWithData[objectParam[i]]}</td>
                            </tr>`
   }
    
   tableEL.innerHTML = generatedTable
}