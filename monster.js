
const apiKey = '1';
const apiBase = 'https://www.themealdb.com/api/json/v1';

const getMealName = meal => {
    const url = `${apiBase}/${apiKey}/search.php?s=${meal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data))
}

const displayMeals = meals => {
   for (let i = 0; i < meals.length; i++) {
        const meal = meals[i];
        console.log(meal.strMeal);
    }
 }
const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal').value;
    getMealName(inputMeal)
})
getMealName();





// const updateUI = data => {
//     document.getElementById('show_city').innerText = data.name || "Unknown Location!";
//     document.getElementById('show_temperature').innerText = data.main.temp;
//     document.getElementById('weather_status').innerText = data.weather[0].main;
//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     document.getElementById('city').value = "";
// }