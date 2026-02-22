import './style.css'



 /*document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Clicked ' + btn.textContent);
  });
});
*/


/* each view more gets its own button, for each day of the week*/
const sundayButton = document.getElementById("sun-view-more");
sundayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".sun-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      sundayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      sundayButton.textContent = "View More?";
    }
  
  });
});

const mondayButton = document.getElementById("mon-view-more");
mondayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".mon-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      mondayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      mondayButton.textContent = "View More?";
    }
  
  });
});

const tuesdayButton = document.getElementById("tue-view-more");
tuesdayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".tue-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      tuesdayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      tuesdayButton.textContent = "View More?";
    }
  
  });
});

const wednesdayButton = document.getElementById("wed-view-more");
wednesdayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".wed-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      wednesdayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      wednesdayButton.textContent = "View More?";
    }
  
  });
});

const thursdayButton = document.getElementById("thu-view-more");
thursdayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".thu-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      thursdayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      thursdayButton.textContent = "View More?";
    }
  
  });
});

const fridayButton = document.getElementById("fri-view-more");
fridayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".fri-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      fridayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      fridayButton.textContent = "View More?";
    }
  
  });
});

const saturdayButton = document.getElementById("sat-view-more");
saturdayButton.addEventListener("click", function() {
  const shows = document.querySelectorAll(".sat-more-shows-container");

   shows.forEach(function(show) {

    if(show.style.display === ""){
      show.style.display = "flex";
      saturdayButton.textContent = "View Less";
    } else if(show.style.display === "flex"){
      show.style.display = "";
      saturdayButton.textContent = "View More?";
    }
  
  });
});