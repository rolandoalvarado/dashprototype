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
    e.preventDefault();
    $("#instance-info-wrap").show();
    $("#instance-wrap").css('width', '20%');
    $(".vm-item").show();
  })

  $('#new-instance').click(function(e) {
    e.preventDefault();
    $('#instance-create').removeClass('is-hidden');
  })

  $('#cancel').click(function(){
    	$('.new-modal').addClass('is-hidden');
	});

	$('#create').click(function(e) {
	  e.preventDefault();
	  $('.new-modal').addClass('is-hidden');

	  //Render the instance item
	  $("#instance-item-template").tmpl().insertAfter('#new-instance');

	  $('.vm-created').click(function(e) {
  	  e.preventDefault();

      // Show instance panel
      $("#instance-info-wrap").show();
      $("#instance-wrap").css('width', '20%');
  	})
	})

  /* Crude JS for Image Type Control */
  $('#edit-image-type').click(function(event) {
    event.preventDefault();
    $('#edit-image-type').addClass('is-hidden');
    $('#image-type-items').removeClass('is-hidden');
    $('#save-image-type').removeClass('is-hidden');
    $('#cancel-image-type').removeClass('is-hidden');
  })

  $('#save-image-type').click(function(event) {
    event.preventDefault();
    $('#edit-image-type').removeClass('is-hidden');
    $('#image-type-items').addClass('is-hidden');
    $('#save-image-type').addClass('is-hidden');
    $('#cancel-image-type').addClass('is-hidden');
  })

  $('#cancel-image-type').click(function(event) {
    event.preventDefault();
    $('#edit-image-type').removeClass('is-hidden');
    $('#image-type-items').addClass('is-hidden');
    $('#save-image-type').addClass('is-hidden');
    $('#cancel-image-type').addClass('is-hidden');
  })

  $('#item-1').click(function(event) {
    $('#image-type-value').text("Default Image 1");
  })

  $('#item-2').click(function(event) {
    $('#image-type-value').text("Image 2");
  })

  $('#item-3').click(function(event) {
    $('#image-type-value').text("Image 3");
  })

  $('#item-4').click(function(event) {
    $('#image-type-value').text("Image 4");
  })

  $('#item-5').click(function(event) {
    $('#image-type-value').text("Image 5");
  })

  /* Crude JS for Flavor Control */
  $('#edit-flavor').click(function(event) {
    event.preventDefault();
    $('#edit-flavor').addClass('is-hidden');
    $('#flavor-options').removeClass('is-hidden');
    $('#save-flavor').removeClass('is-hidden');
    $('#cancel-flavor').removeClass('is-hidden');
  })

  $('#save-flavor').click(function(event) {
    event.preventDefault();
    $('#edit-flavor').removeClass('is-hidden');
    $('#flavor-options').addClass('is-hidden');
    $('#save-flavor').addClass('is-hidden');
    $('#cancel-flavor').addClass('is-hidden');
  })

  $('#cancel-flavor').click(function(event) {
    event.preventDefault();
    $('#edit-flavor').removeClass('is-hidden');
    $('#flavor-options').addClass('is-hidden');
    $('#save-flavor').addClass('is-hidden');
    $('#cancel-flavor').addClass('is-hidden');
  })

  /* Crude JS for Flavor Control using Select Box */
  $('#edit-flavor2').click(function(event) {
    event.preventDefault();
    $('#edit-flavor2').addClass('is-hidden');
    $('#flavor-value').addClass('is-hidden');
    $('#flavor-options2').removeClass('is-hidden');
    $('#flavor-select').removeClass('is-hidden');
    $('#save-flavor2').removeClass('is-hidden');
    $('#cancel-flavor2').removeClass('is-hidden');
  })

  $('#save-flavor2').click(function(event) {
    event.preventDefault();
    $('#edit-flavor2').removeClass('is-hidden');
     $('#flavor-value').removeClass('is-hidden');
    $('#flavor-options2').addClass('is-hidden');
    $('#flavor-select').addClass('is-hidden');
    $('#save-flavor2').addClass('is-hidden');
    $('#cancel-flavor2').addClass('is-hidden');
  })

  $('#cancel-flavor2').click(function(event) {
    event.preventDefault();
    $('#edit-flavor2').removeClass('is-hidden');
     $('#flavor-value').removeClass('is-hidden');
    $('#flavor-options2').addClass('is-hidden');
    $('#flavor-select').addClass('is-hidden');
    $('#save-flavor2').addClass('is-hidden');
    $('#cancel-flavor2').addClass('is-hidden');
  })

  /* Crude JS for Instance Copy Control */
  $('#edit-copy').click(function(event) {
    event.preventDefault();
    $('#edit-copy').addClass('is-hidden');
    $('#copy-slider').removeClass('is-hidden');
    $('#save-copy').removeClass('is-hidden');
    $('#cancel-copy').removeClass('is-hidden');
  })

  $('#save-copy').click(function(event) {
    event.preventDefault();
    $('#edit-copy').removeClass('is-hidden');
    $('#copy-slider').addClass('is-hidden');
    $('#save-copy').addClass('is-hidden');
    $('#cancel-copy').addClass('is-hidden');
  })

  $('#cancel-copy').click(function(event) {
    event.preventDefault();
    $('#edit-copy').removeClass('is-hidden');
    $('#copy-slider').addClass('is-hidden');
    $('#save-copy').addClass('is-hidden');
    $('#cancel-copy').addClass('is-hidden');
  })

  /* Crude JS Keypair Control */
  $('#edit-keypair').click(function(event) {
    event.preventDefault();
    $('#edit-keypair').addClass('is-hidden');
    $('#keypair-options').removeClass('is-hidden');
    $('#save-keypair').removeClass('is-hidden');
    $('#cancel-keypair').removeClass('is-hidden');
  })

  $('#save-keypair').click(function(event) {
    event.preventDefault();
    $('#edit-keypair').removeClass('is-hidden');
    $('#keypair-options').addClass('is-hidden');
    $('#save-keypair').addClass('is-hidden');
    $('#cancel-keypair').addClass('is-hidden');
  })

  $('#cancel-keypair').click(function(event) {
    event.preventDefault();
    $('#edit-keypair').removeClass('is-hidden');
    $('#keypair-options').addClass('is-hidden');
    $('#save-keypair').addClass('is-hidden');
    $('#cancel-keypair').addClass('is-hidden');
  })

  $('#keypair-none').click(function(event) {
    $('#keypair-value').text("None");
  })

  $('#keypair-1').click(function(event) {
    $('#keypair-value').text("Keypair 1");
  })

  /* Crude JS Password Control */
  $('#set-password').click(function(event) {
    event.preventDefault();
    $('#password-input').removeClass('is-hidden');
    $('#save-password').removeClass('is-hidden');
    $('#cancel-password').removeClass('is-hidden');
    $('#set-password').addClass('is-hidden');
    $('#password-value').addClass('is-hidden');
  })

  $('#save-password').click(function(event) {
    event.preventDefault();
    var password = document.getElementById('password-input').value;
    $('#password-input').addClass('is-hidden');
    $('#save-password').addClass('is-hidden');
    $('#cancel-password').addClass('is-hidden');
    $('#set-password').removeClass('is-hidden');
    $('#password-value').removeClass('is-hidden');
    $('#password-value').text(password);
  })

  $('#cancel-password').click(function(event) {
    event.preventDefault();
    $('#password-input').addClass('is-hidden');
    $('#save-password').addClass('is-hidden');
    $('#cancel-password').addClass('is-hidden');
    $('#set-password').removeClass('is-hidden');
    $('#password-value').removeClass('is-hidden');
  })

  $('#flavor-group').hover(
    function(event) {
    $('#flavor-details').removeClass('is-hidden');
    },
    function(event) {
    $('#flavor-details').addClass('is-hidden');
    }
  )

});