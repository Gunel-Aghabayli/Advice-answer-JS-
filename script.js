const clickBtn = document.querySelector(".clickBtn")
const pTeqi = document.querySelector(".pTeqi")
const second = document.getElementById("second")


clickBtn.addEventListener("click", function(){
    fetch('https://api.adviceslip.com/advice')
    .then(response=>{console.log(response)
    if(response.ok){
        return response.json()
    }else{
        throw "Error cixdi"
    }
    })
    .then (data=>{
        pTeqi.innerHTML=data.slip.advice;
        second.innerHTML=data.slip.id;
})

})