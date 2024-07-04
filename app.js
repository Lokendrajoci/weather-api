let apiKey = "1abd020963de590594c2025bdaa27148";

document.querySelector(".findButton").addEventListener("click", async () => {
  let latitude = document.querySelector("#latitude").value;
  let longitude = document.querySelector("#longitude").value;

  if (latitude === "" || longitude === "") {
    window.alert("Empty field");
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=Metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      let data = await response.json();
      console.log(data);

      const existingDescription = document.querySelector(".weatherDescription");
      if (existingDescription) existingDescription.remove();

   
      const weatherDescrp = document.createElement("div");
      weatherDescrp.className = "weatherDescription";
      weatherDescrp.appendChild(
       
document.createTextNode(
  `The temperature in ${data.name} is ${data.main.temp} °C.`
)
      )

      

      document.querySelector(".find").appendChild(weatherDescrp);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      window.alert("Failed to retrieve weather data.");
    }
  }
});