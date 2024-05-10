const changeText = document.querySelector('.changeText')
const btn = document.querySelector('.btn')
const checkSingle = document.querySelector('.checkSingle')
const twoPart = document.querySelector('.twoPart')
const answer =  document.querySelector('.answer')

let radios = document.querySelectorAll('input[type="radio"]');



    const getmet = async()=> {

        for (let radio of radios) {
            if (checkSingle.checked) {
                let respons = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
                let data = await respons.json();
                changeText.innerText = data.joke;
                answer.innerText = ""
            }
            else if (twoPart.checked){
                let respons = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
                let data = await respons.json();
                changeText.innerText = data.setup;
                answer.innerText = data.delivery;
            }
        }
    
       
        
    }
    btn.addEventListener('click', function(){
        getmet()
    })









// const getmet = async()=> {

    
//     let respons = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
//     let data = await respons.json();
//     changeText.innerText = data.joke;
    
// }
// btn.addEventListener('click', function(){
//     getmet()
// })









