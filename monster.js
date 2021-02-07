
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
        <button onclick="displayMealDetail('${meal.strMeal}')" >Details</button>
        `
        mealDiv.innerHTML = mealsInfo;
        mealsDiv.appendChild(mealDiv);
    });
}
displayMealDetail = meal => {
    //  const divTemper = document.getElementById('meals');
    //  divTemper.style.display = none;
    const url = `${apiBase}/${apiKey}/search.php?s=${meal}`
    fetch(url)
    
    .then(response => response.json())
    .then(data => renderMealInfo(data.meals[0]));
}
const renderMealInfo = meal => {
    const mealDive = document.getElementById('meal-detail');
    mealDive.className = 'meal-decor2'
    const mealInfo2 = `
    <img src="${meal.strMealThumb}"></img>
    <p>Ingridents: ${meal.strIngredient1}</p>
    <p>Ingridents: ${meal.strIngredient2}</p>
    <p>Ingridents: ${meal.strIngredient3}</p>
    <p>Ingridents: ${meal.strIngredient4}</p>
    <p>Ingridents: ${meal.strIngredient5}</p>
    <p>Ingridents: ${meal.strIngredient6}</p>
    <p>Ingridents: ${meal.strIngredient7}</p>
    <p>Ingridents: ${meal.strIngredient8}</p>
    `
    mealDive.innerHTML = mealInfo2;
}



const searchBtn = document.getElementById('search_button');
searchBtn.addEventListener('click', () => {
    const inputMeal = document.getElementById('meal').value;
    getMealName(inputMeal)
})

