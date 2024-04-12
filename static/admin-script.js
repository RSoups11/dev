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
    var addButtonEducation = document.getElementById('add-education-button');
    var addButtonExperience = document.getElementById('add-experience-button');
    var addButtonCertificates = document.getElementById('add-certificates-button');
    var addButtonInterest = document.getElementById('add-interest-button');
    var addButtonSkills = document.getElementById('add-skills-button');
    var addButtonExpertise = document.getElementById('add-expertise-button');

    addButtonEducation.addEventListener('click', function() {
      let template = document.querySelector('.education-entry-template');
      if (!template) {
        console.error('Template not found.');
        return;
      }
      
      let clone = template.cloneNode(true);
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


    addButtonExperience.addEventListener('click', function() {
        let template = document.querySelector('.experience-entry-template');
        if (!template) {
          console.error('Template not found.');
          return;
        }
        
        let clone = template.cloneNode(true);
        clone.style.display = 'block';
        clone.id = '';
        clone.querySelector('input').required = true;
        clone.querySelector('textarea').required = true;
  
  
        var newExperienceContainer = document.getElementById('new-experience');
        if (!newExperienceContainer) {
          console.error('The new-experience element was not found.');
          return;
        }
        
        console.log(newExperienceContainer); // This should show the element
        newExperienceContainer.appendChild(clone);
      });


      addButtonCertificates.addEventListener('click', function() {
        let template = document.querySelector('.certificates-entry-template');
        if (!template) {
          console.error('Template not found.');
          return;
        }
        
        let clone = template.cloneNode(true);
        clone.style.display = 'block';
        clone.id = '';
        clone.querySelector('input').required = true;
        clone.querySelector('textarea').required = true;
  
  
        var newCertificateContainer = document.getElementById('new-certificate');
        if (!newCertificateContainer) {
          console.error('The new-certificate element was not found.');
          return;
        }
        
        console.log(newCertificateContainer); // This should show the element
        newCertificateContainer.appendChild(clone);
      });

      addButtonInterest.addEventListener('click', function() {
        let template = document.querySelector('.interest-entry-template');
        if (!template) {
          console.error('Template not found.');
          return;
        }
        
        let clone = template.cloneNode(true);
        clone.style.display = 'block';
        clone.id = '';
        clone.querySelector('input').required = true;
  
  
        var newInterestContainer = document.getElementById('new-interest');
        if (!newInterestContainer) {
          console.error('The new-interest element was not found.');
          return;
        }
        
        console.log(newInterestContainer); // This should show the element
        newInterestContainer.appendChild(clone);
      });

      addButtonSkills.addEventListener('click', function() {
        let template = document.querySelector('.skills-entry-template');
        if (!template) {
          console.error('Template not found.');
          return;
        }
        
        let clone = template.cloneNode(true);
        clone.style.display = 'block';
        clone.id = '';
        clone.querySelector('input').required = true;
  
  
        var newSkillContainer = document.getElementById('new-skills');
        if (!newSkillContainer) {
          console.error('The new-interest element was not found.');
          return;
        }
        
        console.log(newSkillContainer); // This should show the element
        newSkillContainer.appendChild(clone);
      });


      addButtonExpertise.addEventListener('click', function() {
        let template = document.querySelector('.expertise-entry-template');
        if (!template) {
          console.error('Template not found.');
          return;
        }
        
        let clone = template.cloneNode(true);
        clone.style.display = 'block';
        clone.id = '';
        clone.querySelector('input').required = true;
  
  
        var newExpertiseContainer = document.getElementById('new-expertise');
        if (!newExpertiseContainer) {
          console.error('The new-expertise element was not found.');
          return;
        }
        
        console.log(newExpertiseContainer); // This should show the element
        newExpertiseContainer.appendChild(clone);
      });

      document.getElementById('default').addEventListener('click', function() {
        fetch('/default-sass', {
          method: 'POST',
          headers: {
            // Include any necessary headers, like Content-Type or CSRF tokens
          },
          // If you need to send a body, uncomment the following line:
          // body: JSON.stringify({ /*...*/ })
        })
        .then(response => {
          if (response.ok) {
            return response.json(); // or response.json() if the server sends back JSON
          }
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          // Handle success. If you want to redirect the user after the operation:
          window.location.href = '/admin'; // Replace with the path you want to redirect to
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
      });
});
