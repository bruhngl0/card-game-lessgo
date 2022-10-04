

let check;

fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(res=> res.json())
    .then(data => {
        console.log(data.deck_id)
        check = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    document.querySelector("button").addEventListener('click', draw)

    function draw(){
        const url1 = `https://www.deckofcardsapi.com/api/deck/${check}/draw/?count=2`
    fetch(url1  )
        .then(res=> res.json())
        .then(data=>{
        console.log(data)
        document.querySelector(".img1").src = data.cards[0].image
        document.querySelector(".img2").src = data.cards[1].image
        let val1 = convertToNumber(data.cards[0].value)
        let val2 = convertToNumber(data.cards[1].value)

        if(val1 > val2){
            document.querySelector(".res").innerHTML = "Letsgoo!! Player 1 wins"
        }
        else if(val2 > val1){
            document.querySelector(".res").innerHTML = "YESSIRRR!! Player 2 wins"

        }
        else if(val1 === val2){
            document.querySelector(".res").innerHTML = "IT'S TIME FOR WAR!"
        }



    })
    .catch(err =>{
        console.log(`error ${err}`)
    })
}

function convertToNumber(val){
if( val === "KING"){
    return 14
}
else if( val === "QUEEN"){
    return 13
}
else if( val === "JACK"){
    return 12
}
else{
    return Number(val)
}



}
   