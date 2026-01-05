let bodyVar = document.body
let backgroundPicture = ['pic/1.jpg', 'pic/2.jpg', 'pic/3.jpg', 'pic/4.jpg', 'pic/5.jpg']
let randomprevious = -1
function setRandomPicture(){
    let random;
    do{
        random = Math.floor( Math.random() * backgroundPicture.length ) 
    }while(random === randomprevious )
    randomprevious = random
    document.body.style.backgroundImage =  "url('"+backgroundPicture[random]+"')"
}
setRandomPicture()

/////////////////////////////////////////////
let cityDatas = [
    {name: 'tehran' , win: 43 , cloud:'Sunny', humidity:'26%', wind_speer:32},
    {name: 'shiraz' , win: 54 , cloud:'Cloudy', humidity:'53%', wind_speer:41},
    {name: 'tabriz' , win: 21 , cloud:'Windy', humidity:'43%', wind_speer:54}
]

// let buttonClick = document.querySelector('.btn-search')
// let showResult = document.querySelector('.weather.loading')
// let input = document.querySelector('.search-bar')

// let cityName = document.querySelector('.city')
// let tempName = document.querySelector('.temp')
// let descriptionName = document.querySelector('.description')
// let humidityName = document.querySelector('.humidity')
// let windName = document.querySelector('.wind')


// buttonClick.addEventListener('click', function(){
//     updateWeather()
//     setRandomPicture()
// })

// function updateWeather(){
   
//     cityDatas.find(function(getCity){
//         if (input.value === getCity.name){
//             showResult.style.visibility = 'visible'
//             showResult.style.setProperty('max-height', '14rem', 'important');  
//             cityName.innerHTML = 'Weather in '+  getCity.name 
//             tempName.innerHTML = getCity.win + '°C'
//             descriptionName.innerHTML = getCity.cloud
//             humidityName.innerHTML = 'Humidity: '+getCity.humidity
//             windName.innerHTML = 'Wind speed: '+getCity.wind_speer +' km/h'
            
//         }
//     })
// }

/// اشتباه که انجام دادم اینه که من باید کلاس loading رو حذف میکردم نه اینکه بیام اونو از درون سی اس اس بردارم یا کامنت کنم
// صحیح در زیر است

let buttonClick = document.querySelector('.btn-search')
let showResult = document.querySelector('.weather')
let input = document.querySelector('.search-bar')

let cityName = document.querySelector('.city')
let tempName = document.querySelector('.temp')
let descriptionName = document.querySelector('.description')
let humidityName = document.querySelector('.humidity')
let windName = document.querySelector('.wind')


buttonClick.addEventListener('click', function(){
    updateWeather()
    setRandomPicture()
})

function updateWeather(){
    cityDatas.find(function(getCity){
        if (input.value === getCity.name){
            showResult.style.visibility = 'visible' 
            document.querySelector('.weather').classList.remove('loading')
            cityName.innerHTML = 'Weather in '+  getCity.name 
            tempName.innerHTML = getCity.win + '°C'
            descriptionName.innerHTML = getCity.cloud
            humidityName.innerHTML = 'Humidity: '+getCity.humidity
            windName.innerHTML = 'Wind speed: '+getCity.wind_speer +' km/h'
        }
    })
}