
var container = document.getElementById("container");

async function getweather() {
    try {
        let city = document.getElementById("city").value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4bee1e90437fea3574fc20d672193ae&units=metric`)

        data = await res.json();
        appenddata(data)
    }
    catch (error) {
        let res = document.createElement("h1");
        res.innerHTML = '<img src="https://www.pngall.com/wp-content/uploads/8/Wrong-Logo.png" alt="" width="250" height="250">'
        container.append(res);
        alert("Please Enter Valid City Name!!")
    }
}
function appenddata(data) {
    container.innerHTML = null;
    var div1 = document.createElement("div");
    var div2 = document.createElement("div")
    let img = document.createElement("iframe");
    img.src = (`https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`)


    let name = document.createElement("h2");
    name.innerText = "City Name : " + data.name;

    let temp = document.createElement("h3");
    temp.innerText = "Temperature : " + data.main.temp + " °C";

    let pressure = document.createElement("h3");
    pressure.innerText = "Pressure : " + data.main.pressure + " Pa";

    let hum = document.createElement("h3");
    hum.innerText = "Humidity : " + data.main.humidity + " g/Kg";

    let sunrise = document.createElement("h3");
    sunrise.innerText = "Sunrise : " + new Date(data.sys.sunrise * 1000);

    let sunset = document.createElement("h3")
    sunset.innerText = "Sunset : " + new Date(data.sys.sunset * 1000);

    let maxtemp = document.createElement("h3");
    maxtemp.innerText = "Max Temp : " + data.main.temp_max + " °C";

    let mintemp = document.createElement("h3");
    mintemp.innerText = "Min Temp : " + data.main.temp_min + " °C";

    div1.append(img);
    div2.append(name, temp, pressure, hum, sunrise, sunset, maxtemp, mintemp);
    container.append(div1, div2);
}