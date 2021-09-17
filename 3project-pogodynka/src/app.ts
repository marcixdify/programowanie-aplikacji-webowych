export class App {
    apiKey = '68caf2c48879f95743bb493a36ee0d8e';
    btnAdd: HTMLButtonElement;
    cityInput: HTMLInputElement;
    cityName: string;
    data: string;
    weaterBox: HTMLDivElement;
    data1: string;
    constructor() {
        this.getInput();
        this.getData();
        setInterval(()=> this.refreshData(), 120000)
    }

    async saveCityInfo(city: string) {

        const weather = await this.getWeather(city);

        if (weather.cod !== "404") {
            this.saveData(weather.name);
        }
    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }

    async createWeatherElement(city: string, localStorageName: string): Promise<any> {
        const weatherData = await this.getWeather(city);
        console.log(weatherData)
        const temp = Math.round(parseInt(weatherData["main"].temp, 10) - 273.15);
        const weatherType = weatherData.weather[0].main;
        const pressure = weatherData["main"].pressure;
        const humidity = weatherData["main"].humidity;
        this.createBox(temp, weatherType, city, localStorageName, pressure, humidity);
    }

    saveData(data: any) {
        let keys = Object.keys(localStorage).length - 1;
        localStorage.setItem('weatherData' + keys, JSON.stringify(data));
        this.createWeatherElement(data, 'weatherData' + keys)
    }

    

    getData() {
        let keys = Object.keys(localStorage).length - 1;
        if (keys > 0) {
            for (let i = 0; i < keys; i++) {
                const data = localStorage.getItem('weatherData' + i);
                const localStorageName = 'weatherData' + i;
                const parseData = JSON.parse(data);
                this.createWeatherElement(parseData, localStorageName)
                console.log(parseData)
            }
        } else {
            return {};
        }
    }
    refreshData(){
        const allElements = document.querySelectorAll(".city-container")
        allElements.forEach(element => {
            element.parentElement.removeChild(element)
        });  
        this.getData();      
    }

    getInput() {
        this.btnAdd = document.querySelector(".btn-add")
        this.cityInput = document.querySelector("#cityInput");
        this.btnAdd.addEventListener("click", () => this.showData())
    }

    showData() {
        const dataInput = this.cityInput.value;
        this.saveCityInfo(dataInput);
    }


    createBox(temp: number, weaterType: string, city: string, localStorageName: string, pressure: string, humidity: string) {
        const weaterBox = document.querySelector(".city");
        const divElement = document.createElement("div");
        const buttonElement = document.createElement("button")
        buttonElement.classList.add("del-btn");
        buttonElement.addEventListener("click", function () {
            divElement.parentElement.removeChild(divElement)
            localStorage.removeItem(localStorageName);
        })
        buttonElement.innerText = "Usun";
        divElement.classList.add("city-container");
        this.createTemp(divElement, temp)
        this.createWeather(divElement, weaterType)
        this.createCountry(divElement, city)
        this.createPressure(divElement, pressure)
        this.createHumidity(divElement, humidity)
        weaterBox.appendChild(divElement)
        divElement.appendChild(buttonElement)
    }
    createCountry(elem: HTMLDivElement, city: string) {
        const spanElement = document.createElement("div");
        spanElement.classList.add("city-country");
        spanElement.innerText = city;
        elem.appendChild(spanElement)
    }
    createTemp(elem: HTMLDivElement, temp: number) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city-temp");
        spanElement.innerHTML = temp.toString() + "&#x2103";
        elem.appendChild(spanElement)
    }
    createWeather(elem: HTMLDivElement, weatherType: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city-weater");
        spanElement.innerHTML = weatherType
        elem.appendChild(spanElement)
    }
    createPressure(elem: HTMLDivElement, pressure: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city-weater");
        spanElement.innerHTML = "Ciśnienie: " + pressure;
        elem.appendChild(spanElement)
    }
    createHumidity(elem: HTMLDivElement, humidity: string) {
        const spanElement = document.createElement("span");
        spanElement.classList.add("city-weater");
        spanElement.innerHTML = "Wilgotność: " + humidity;
        elem.appendChild(spanElement)
    }

}
