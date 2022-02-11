const input=document.querySelector('.entry-city')
const button=document.querySelector('.search-icon')
const list=document.querySelector('.items')
const footer=document.querySelector('.footer')
const buttonDelete=document.createElement('button')
const sliderArrows=document.querySelector('.slider-arrows')
const btnTest=document.querySelector('.her')
button.addEventListener("click",()=>{
    getWeather()
    buttonDelete.classList.add('btn-delete')
    buttonDelete.innerHTML='Очистить'
    footer.appendChild(buttonDelete)

})

input.addEventListener("keydown",(e)=>{
    if(e.keyCode==13){
        getWeather()
        buttonDelete.classList.add('btn-delete')
     buttonDelete.innerHTML='Очистить'

    footer.appendChild(buttonDelete)
    }
})
function getWeather(){
    let city=input.value
    input.value=''
    fetch(`https://api.weatherapi.com/v1/current.json?key=0023282d696c468da1095804220302 &q=${city}&aqi=no`)
    .then(response=>response.json())
    .then(data=>getData(data))
    function getData(data){
        icon=data.current.condition.icon
        temp=data.current.temp_c
        feel=data.current.feelslike_c
        water=data.current.humidity
        wind=data.current.wind_kph
        text=data.current.condition.text  
              

        let widjet=document.createElement('section')
        let widjetHover=document.createElement('section')
        let img=document.createElement('img')
        let cityTitle=document.createElement('div')
        let textCity=document.createElement('div')
        let tempCity=document.createElement('div')
        let feelCity=document.createElement('div')
        let hover=document.createElement('img')


        let tempHover=document.createElement('div')
            let windHover=document.createElement('div')
            let feelHover=document.createElement('div')
            let visHover=document.createElement('div')
            let waterHover=document.createElement('div')
            tempHover.classList.add('temp-hover')
            windHover.classList.add('wind-hover')
            feelHover.classList.add('feel-hover')
            visHover.classList.add('vis-hover')
            waterHover.classList.add('water-hover')

            tempHover.innerHTML=`Температура:${temp}°C`
            windHover.innerHTML=`Ветер:${wind}км/ч`
            feelHover.innerHTML=`Ощущается как: ${feel}°C`
            waterHover.innerHTML=`Влажность:${water}%`

        hover.classList.add('arrow')
        tempCity.classList.add('temp')
        cityTitle.classList.add('title')
        widjet.classList.add('item')
        widjetHover.classList.add('item-hover')
        img.classList.add('img')
        feelCity.classList.add('feel')
        textCity.classList.add('text-city')

    
        cityTitle.innerHTML=city
        tempCity.innerHTML=`${temp}°`
        img.src=icon
        feelCity.innerHTML=`Ощущается как ${feel}°C`
        textCity.innerHTML=text
        hover.src='/arrow.svg'
        function widjetInfo(){
            widjet.appendChild(cityTitle)
            widjet.appendChild(img)
            widjet.appendChild(tempCity)
            widjet.appendChild(textCity)
            widjet.appendChild(feelCity)
            widjet.appendChild(hover)}
        function widjetRemove(){
            widjet.removeChild(cityTitle)
            widjet.removeChild(img)
            widjet.removeChild(tempCity)
            widjet.removeChild(textCity)
            widjet.removeChild(feelCity)
            widjet.removeChild(hover)}
        function hoverItem(){
            widjet.appendChild(cityTitle)
            widjet.appendChild(tempHover)
            widjet.appendChild(windHover)
            widjet.appendChild(feelHover)
            widjet.appendChild(waterHover)
            widjet.appendChild(hover)
        }


        list.appendChild(widjet)
        widjetInfo()
      
        buttonDelete.addEventListener("click",()=>{
            widjet.remove()
            buttonDelete.remove()
        })

        hover.onmouseover = function(event) {
            let target = event.target;
            target.style.background = '';
            widjet.classList.add('item-hover')
            widjet.classList.remove('item')
            widjetRemove()


            hoverItem()

            
          };
          
          hover.onmouseout = function(event) {
            let target = event.target;
            target.style.background = '';
            widjet.classList.add('item')
            widjet.classList.remove('item-hover')
            widjet.removeChild(cityTitle)
            widjet.removeChild(tempHover)
            widjet.removeChild(windHover)
            widjet.removeChild(feelHover)
            widjet.removeChild(waterHover)
            widjet.removeChild(hover)
            
            
            widjet.appendChild(cityTitle)
            widjet.appendChild(img)
            widjet.appendChild(tempCity)
            widjet.appendChild(textCity)
            widjet.appendChild(feelCity)
            widjet.appendChild(hover)
          };

          cssScrollSnapPolyfill()

    }

}