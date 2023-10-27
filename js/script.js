document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('recipeForm');
    const recipeName = document.getElementById('recipeName');
    const ingredients = document.getElementById('ingredients');
    const instructions = document.getElementById('instructions');
    const submitBtn = document.getElementById('submitBtn');

    recipeForm.addEventListener('submit', function(event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        let isValid = true;

        if (recipeName.value.trim() === '') {
            isValid = false;
            alert('Recipe Name cannot be empty');
        }

        if (ingredients.value.trim() === '') {
            isValid = false;
            alert('Ingredients cannot be empty');
        }

        if (instructions.value.trim() === '') {
            isValid = false;
            alert('Instructions cannot be empty');
        }

        return isValid;
    }
});
