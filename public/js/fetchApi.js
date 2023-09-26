let root = document.getElementById('root')

async function nutritionFormHandler(input) {
    event.preventDefault();
    console.log("Your button worked!")
    const data = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=4xf4bbqjoGLfyf31OWdx7G3tGya1IgsrvJfScbhT&query=${input}`);
    return data.json();
};

function clearDOM() {
    root.textContent = ''
}

function getSearchResults () {
    clearDOM()
    let foodsArray = []
    const userInput = document.querySelector('#foodItem').value.trim();
    nutritionFormHandler(userInput)
    .then((result) => {
        for(let i = 0; i < result.foods.length; i++) {
            foodsArray.push(result.foods[i]);
        }
        console.log(foodsArray);

        let counter = 0;
        foodsArray.forEach(element => {
            if(element.foodNutrients[3].value == 0){
                return;
            }
            let card = document.createElement('div');
            let title = document.createElement('h3');
            let calories = document.createElement('p');
            let addFood = document.createElement('button');

            card.classList.add('w-25', 'mx-3', 'my-3', 'bg-light');
            title.innerHTML = element.description;
            card.append(title);
            calories.innerHTML = `${element.foodNutrients[3].value} calories`;
            card.append(calories)
            addFood.innerHTML = 'Add to My Food List'
            addFood.setAttribute('id',`uniqueID${counter}`)
            card.append(addFood)

            root.append(card)

            counter++;
        });
    })
    for(let i = 0; i < foodsArray.length; i++) {
        document
        .querySelector(`#uniqueID${i}`)
        .addEventListener('click', (event) => {
            console.log(this.calories)
        })
    }
};

document
.querySelector('#search-nutrition')
.addEventListener('submit', getSearchResults);