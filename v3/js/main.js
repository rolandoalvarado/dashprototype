$(document).ready(function(){
	$('.btn-navbar').click(function(){

	});

  // Creates as new project
	$('#new-proj').click(function(e) {
	  e.preventDefault();

    // Render template
    $("#project-item-template").tmpl({name: 'sample'}).insertAfter('#new-proj');

    // Clear instance panel and remove instances
   $("#instance-info-wrap").hide();
   $("#instance-wrap").css('width', '80%');
   $(".vm-item").hide();

   // Control project name input process
   $('#project-input').focus(function() {
     $('#project-text').addClass('is-hidden');
     $("#project-input").removeClass('is-hidden');
   }).blur(function() {
     $('#project-text').removeClass('is-hidden');
     $("#project-input").addClass('is-hidden');
     $('#project-text').html($('#project-input').val());
   })

   $('#project-text').click(function() {
      $('#project-text').addClass('is-hidden');
      $("#project-input").removeClass('is-hidden');
    });

    // Control project description input process
    $('#description').click(function() {
      $('#description').addClass('is-hidden');
      $("#description-box").removeClass('is-hidden');
    })

    $('#description-box').focus(function() {
       $('#description').addClass('is-hidden');
       $("#description-box").removeClass('is-hidden');
     }).blur(function() {
       $('#description').removeClass('is-hidden');
       $("#description-box").addClass('is-hidden');
       $('#description').html($('#description-box').val());
     })
  })

  $('.a-project').click(function(e) {
    e.preventDefault()
    $("#instance-info-wrap").show();
    $("#instance-wrap").css('width', '20%');
    $(".vm-item").show();
  })

});