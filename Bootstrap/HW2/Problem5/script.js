// TODO(you): Write the JavaScript necessary to complete the problem.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

// When the user clicks on the checkbox img, change it to checked.png
// and add the corresponding result (found in data-choice id) to the results div.
// Uncheck all the other checkboxes within the parent div.

var unlocked = true;

g = document.querySelectorAll(".checkbox");
for (i = 0; i < g.length; i++) {
	g[i].addEventListener("click", function () {
        if (unlocked) {

            var parent = this.parentNode;
            var grandparent = parent.parentNode;
            var children = grandparent.children;

            for (k = 0; k < grandparent.children.length; k++) {
                var children = grandparent.children[k];

                for (j = 0; j < children.children.length; j++) {
                    if (children.children[j].className == "checkbox") {
                        children.children[j].src = "images/unchecked.png";
                    }
                }
            }

            
            
            //If has class 'checked'
            if (this.parentNode.classList.contains("checked")) {
                
                this.src = "images/unchecked.png";
                //Removed the class 'unchecked' from all divs in the parent section

                for (k = 0; k < grandparent.children.length; k++) {
                    var children = grandparent.children[k];

                    for (j = 0; j < children.children.length; j++) {
                        children.classList.remove("unchecked");
                        //Remove the class 'checked' from sibling divs
                        children.classList.remove("checked");

                    }
                }

                //Remove the class 'checked' from the div
                this.parentNode.classList.remove("checked");

                
            } else {

            this.src = "images/checked.png";
                for (k = 0; k < grandparent.children.length; k++) {
                    var children = grandparent.children[k];

                    for (j = 0; j < children.children.length; j++) {
                        children.classList.add("unchecked");

                        children.classList.remove("checked");
                    }
                }

                this.parentNode.classList.remove("unchecked");
                this.parentNode.classList.add("checked");

                //Add the data-choice id to the results div, and remove all other ones with data-question-id the same as the parent div
                var results = document.getElementById("results");
                var resultsChildren = results.children;
                for (i = 0; i < resultsChildren.length; i++) {
                    if (resultsChildren[i].dataset.questionId == this.parentNode.dataset.questionId) {
                        results.removeChild(resultsChildren[i]);
                    }
                }

                var newResult = document.createElement("div");
                newResult.dataset.questionId = this.parentNode.dataset.questionId;
                newResult.dataset.choiceId = this.parentNode.dataset.choiceId;
                newResult.innerHTML = RESULTS_MAP[this.parentNode.dataset.choiceId];
                console.log(newResult)
                results.appendChild(newResult);


            }

            //If the results div has 3 children, lock the checkboxes
            var results = document.getElementById("results");
            var resultsChildren = results.children;
            if (resultsChildren.length >= 3) {
                unlocked = false;
                
                //Add the most common data-question-id to the header id "result-title"
                var results = document.getElementById("results");
                var resultsChildren = results.children;
                var questionIdArray = [];
                for (i = 0; i < resultsChildren.length; i++) {
                    questionIdArray.push(resultsChildren[i].dataset.choiceId);
                }
                var questionIdArraySorted = questionIdArray.sort();
                console.log(questionIdArraySorted);
                
                //Find the most common data-question-id
                var mostCommon = 0;
                var mostCommonCount = 0;
                for (i = 0; i < questionIdArraySorted.length; i++) {
                    var count = 0;
                    for (j = 0; j < questionIdArraySorted.length; j++) {
                        if (questionIdArraySorted[i] == questionIdArraySorted[j]) {
                            count++;
                        }
                    }
                    if (count > mostCommonCount) {
                        mostCommon = questionIdArraySorted[i];
                        mostCommonCount = count;
                    }
                }
                console.log(mostCommon);

                //Set the result-title to the results map title
                var resultTitle = document.getElementById("result-title");
                resultTitle.innerHTML = RESULTS_MAP[mostCommon].title;

                //Set the result-text to the results map text
                var resultText = document.getElementById("result-text");
                resultText.innerHTML = RESULTS_MAP[mostCommon].contents;

            }

        }
    });
}

// When the user clicks on the "Restart Quiz" button, uncheck all checkboxes
// and remove all results from the results div.

var restart = document.getElementById("restart-button");
restart.addEventListener("click", function () {
    unlocked = true;
    console.log("restart")
    var checkboxes = document.querySelectorAll(".checkbox");
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].src = "images/unchecked.png";
        checkboxes[i].parentNode.classList.remove("checked");
        checkboxes[i].parentNode.classList.remove("unchecked");
    }

    var results = document.getElementById("results");
    var resultsChildren = results.children;
    for (i = 0; i < resultsChildren.length; i++) {
        results.removeChild(resultsChildren[i]);
    }

    //Set result-title to blank and result text
    var resultTitle = document.getElementById("result-title");
    resultTitle.innerHTML = "";
    var resultText = document.getElementById("result-text");
    resultText.innerHTML = "";
   
    window.scrollTo(0, 0);
   
});


var button = document.getElementById("restart-button");
button.addEventListener("mouseover", function () {
    this.style.backgroundColor = "#E0E0E0";
}
);

button.addEventListener("mouseout", function () {
    this.style.backgroundColor = "#cecece";
}
);
