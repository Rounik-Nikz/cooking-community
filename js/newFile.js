// search.js
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const searchResultsList = document.getElementById("search-results-list");

    const recipes = [
        {
            title: "Crane Asada",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe-crane-asada.html",
        },
        {
            title: "Greek Ribs",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe-greekribs.html",
        },
        {
            title: "Vegetable Soup",
            prepTime: "15min",
            cookTime: "5min",
            link: "final/single-recipe-vegetablesoup.html",
        },
        {
            title: "Banana Pancakes",
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
        const searchTerms = searchInput.value.toLowerCase().split(' ');
        const filteredRecipes = recipes.filter((recipe) => {
            return searchTerms.some((term) => recipe.title.toLowerCase().includes(term));
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
