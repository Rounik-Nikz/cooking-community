
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResultsList = document.getElementById("search-results-list");

    const recipes = [
        {
            title: "Crane Asada",
            ingredients: "beef, marinade, grill",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe-crane-asada.html",
        },
        {
            title: "Greek Ribs",
            ingredients: "pork, seasoning, oven",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe-greekribs.html",
        },
        {
            title: "Vegetable Soup",
            ingredients: "carrots, onions, celery",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe-vegetablesoup.html",
        },
        {
            title: "Banana Pancakes",
            ingredients: "bananas, flour, milk",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe.html",
        },
        // Add more recipes here
    ];

    searchButton.addEventListener("click", () => {
        searchRecipes();
    });

    function searchRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const searchTerms = searchTerm.split(' ');
        const filteredRecipes = recipes.filter((recipe) => {
            return searchTerms.some((term) => (
                recipe.title.toLowerCase().includes(term) || 
                recipe.ingredients.toLowerCase().includes(term)
            ));
        });
        displayRecipes(filteredRecipes);
    }

    function displayRecipes(recipesToDisplay) {
        searchResultsList.innerHTML = "";

        if (recipesToDisplay.length === 0) {
            searchResultsList.innerHTML = "<p>No recipes found.</p>";
        } else {
            recipesToDisplay.forEach((recipe) => {
                const recipeItem = document.createElement("div");
                recipeItem.classList.add("recipe");
                recipeItem.innerHTML = `
                    <a href="${recipe.link}">
                        <h5>${recipe.title}</h5>
                        <p>Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime}</p>
                    </a>
                `;
                searchResultsList.appendChild(recipeItem);
            });
        }
    }
});
