// Assuming you have a variable to store the current form section
let current_fs, next_fs, previous_fs; 
let opacity;

// Function to show the next form section
function nextForm() {
  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  // Add class 'active' to the next form section for styling purposes
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  // Show the next form section
  next_fs.show();

  // Hide the current form section
  current_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
      // Increase the opacity of the next form section as the current one fades out
      opacity = 1 - now;
      current_fs.css({
        'display': 'none',
        'position': 'relative'
      });
      next_fs.css({ 'opacity': opacity });
    },
    duration: 600
  });
}

// Function to show the previous form section
function previousForm() {
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  // Remove 'active' class from the current step in the progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

  // Show the previous form section
  previous_fs.show();

  // Hide the current form section
  current_fs.animate({ opacity: 0 }, {
    step: function (now, mx) {
      // Increase the opacity of the previous form section as the current one fades out
      opacity = 1 - now;
      current_fs.css({
        'display': 'none',
        'position': 'relative'
      });
      previous_fs.css({ 'opacity': opacity });
    },
    duration: 600
  });
}

// Attach click event handlers to the 'Next' and 'Previous' buttons
$(".next").click(nextForm);
$(".previous").click(previousForm);
