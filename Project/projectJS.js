//Function to generate the meal plan page
function generateMealPlan() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;

    var mealPlanContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meal Plan</title>
        <style>
            body {font-family: Arial, Helvetica, sans-serif;}
            .meal-plan {margin: 20px;}
            .meal-plan h2 {text-align: center;}
            .meal-plan textarea {width: 100%;}
        </style>
    </head>

    <body>
        <div class="meal-plan">
            <h2>${name}'s Weekly Meal Plan</h2>
            <p><strong>Goal for the Week:</strong> ${goal}</p>
            <h3>Monday – Sunday</h3>
            <h4>Breakfast:</h4>
            <textarea readonly>${breakfast}</textarea>
            <h4>Snack 1:</h4>
            <textarea readonly>${snack1}</textarea>
            <h4>Lunch:</h4>
            <textarea readonly>${lunch}</textarea>
            <h4>Snack 2:</h4>
            <textarea readonly>${snack2}</textarea>
            <h4>Dinner:</h4>
            <textarea readonly>${dinner}</textarea>
        </div>

        <script>
            function printPage() {
                window.print();
            }
            function downloadPage() {
                var blob = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
                var link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'meal-plan.html';
                link.click();
            }
            window.onload = function() {
                printPage();
                downloadPage();
            }
        </script>
    </body>
    </html>
        `;
        
//Meal plan content on new page
document.open();
document.write(mealPlanContent);
document.close();
}

//Function to clear form
function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

//Function to validate email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}