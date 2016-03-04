$(function() {

  // Toggle visibility of password fields
  $('section.users#registrations_edit').on('click', 'a#change_password', function(e) {
    e.preventDefault();
    $('div#password_modification').toggle();
  });

  if ($('section.users#registrations_edit').length) {
    alert('Hey there.');
  }
  
});
