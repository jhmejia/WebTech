// TODO(you): Write the JavaScript necessary to complete the problem.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

// When the user clicks on the checkbox img, change it to checked.png
// and add the corresponding result (found in data-choice id) to the results div.
// Uncheck all the other checkboxes within the parent div.

g = document.querySelectorAll(".checkbox");
for (i = 0; i < g.length; i++) {
	g[i].addEventListener("click", function () {


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
        }
        });
}

