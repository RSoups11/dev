document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName("accordion-toggle");
    Array.from(acc).forEach(function(toggle) {
        toggle.addEventListener("click", function() {
            var content = this.nextElementSibling;
            // This log is for debugging; it should log to the console when you click
            console.log('Accordion toggled, current display is:', content.style.display);

            if (content.style.display == "block") {
                content.style.display = "none";
                this.querySelector(".arrow").textContent = '▼'; // Change arrow direction
            } else {
                content.style.display = "block";
                this.querySelector(".arrow").textContent = '▲'; // Change arrow direction
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-education-button');
    if (!addButton) {
      console.error('Add education button not found.');
      return;
    }
    
    addButton.addEventListener('click', function() {
      var template = document.querySelector('.education-entry-template');
      if (!template) {
        console.error('Template not found.');
        return;
      }
      
      var clone = template.cloneNode(true);
      clone.style.display = 'block';
      clone.id = '';
      clone.querySelector('input').required = true;
      clone.querySelector('textarea').required = true;

      
      var newEducationContainer = document.getElementById('new-education');
      if (!newEducationContainer) {
        console.error('The new-education element was not found.');
        return;
      }
      
      console.log(newEducationContainer); // This should show the element
      newEducationContainer.appendChild(clone);
    });
  });