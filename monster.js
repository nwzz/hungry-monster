
const apiKey = '1';
const apiBase = 'https://www.themealdb.com/api/json/v1';

const getMealName = meal => {
    const url = `${apiBase}/${apiKey}/search.php?s=${meal}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(meal => {
        
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal-decor'
        const mealsInfo = `
        <img src="${meal.strMealThumb}"></img>
        <h3 class="meal-name">${meal.strMeal}</h3>
        `
        mealDiv.innerHTML = mealsInfo;
        mealsDiv.appendChild(mealDiv);
    });
    
    //for (let i = 0; i < meals.length; i++) {
       // 
        








        // const img = document.createElement('img');
        // img.innerText = meal.strMealThumb;
        // const h3 = document.createElement('h3');
        // h3.innerText = meal.strMeal;
        // mealDiv.appendChild(img);
        // mealDiv.appendChild(h3);
         
        // console.log(meal.strMealThumb);

    







    // const mealsDiv = document.getElementById('meals');
    // meals.forEach(meal => {
    //     const mealDiv = document.createElement('div');
    //     mealDiv.className = 'meal';
    //     const mealInfo = `
    //         <h3 class="meal-name">${meals.strMeal}</h3>
    //         <p>${meals.strCategory}</p>
    //         <button onclick="displayMealsDetail('${meals.strMeal}')">Details</button>
    //     `;
    //     mealDiv.innerHTML = mealInfo;
    //     mealsDiv.appendChild(mealDiv);
    // });
}


const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal').value;
    getMealName(inputMeal)
})





// const updateUI = data => {
//     document.getElementById('show_city').innerText = data.name || "Unknown Location!";
//     document.getElementById('show_temperature').innerText = data.main.temp;
//     document.getElementById('weather_status').innerText = data.weather[0].main;
//     document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
//     document.getElementById('city').value = "";
// }