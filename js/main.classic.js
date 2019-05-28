$.ajaxSetup({ cache: false });

function initiateProfile(id) {
  var profile_data;

  $.getJSON('data/profiles.json', function (data) {
    profile_data = data[id];
    
    $('.trn-name').text(profile_data.name);
    $('.trn-studies').text(profile_data.studies);
    $('.trn-stage').text(profile_data.stage);
    $('.trn-alter').text(profile_data.alter);
    $('.trn-dauer').text(profile_data.tdauer);
    $('.trn-werdegang').text(profile_data.werdegang);
    $('.trn-mail').text(profile_data.mail);
    $('.trn-ptext').text(profile_data.ptext);
    $('.trn-picture').attr("src", profile_data.photosm);
    $('.trn-video').attr("src", profile_data.video);
    
    $('#page-top').scrollTop(0);
  });
}

function initiateTrainees() {
  $('.content-title').text("Die Trainees");
  var profile_data;
  $.getJSON('data/profiles.json', function (data) {
    profile_data = data;
    for (var i = 0; i < Object.keys(profile_data).length; i++) {
      var trainee_id = "trn" + i;
      var clone = $($("#profileCardTemplate").html());
      $('.trn-name', clone).text(profile_data[trainee_id].name);
      $('.profile-card', clone).attr("data-profileid", trainee_id);
      $('.card-img', clone).attr("src", profile_data[trainee_id].photo);
      $('.trow-1').append(clone);
    }
  });
}

// (function ($) {
$(document).ready(function () {
  //= require('../data/profiles.json');
  // $('#nav-link-tables').click(async function () {

  $(document).on("click", '#nav-link-start', function () {
    console.log("jo");
    $.ajax({
      url: "sections/start.html",
      dataType: "html",
      crossDomain: true,
      cache: false,
      success: function(html){
        $('.content-title').text("Trainees zeigen Gesicht");
        $('#page-content').html(html);
        console.log("jo");
      },
      error: function(a,b,c){
        console.log(a,b,c);
      }
    });
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-start").parent(".nav-item").addClass("active");
  });

  $(document).on("click", '#nav-link-trainees', function () {
    $('#page-content').load("sections/trainees.html", function () {
      initiateTrainees();
    });
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-trainees").parent(".nav-item").addClass("active");
  });

  $(document).on("click", '#nav-link-quiz', function () {
    $('#page-content').load("sections/quiz.html", function () {
      $('.content-title').text("Quiz");
      $.getScript("js/quiz.js")
        .done(function (script, textStatus) {
          console.log(textStatus);
        })
        .fail(function (jqxhr, settings, exception) {
          console.log("Triggered ajaxError handler.", exception);
        })
    });
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-quiz").parent(".nav-item").addClass("active");
  });

  $('.nav-link:not([id])').click(function () {
    $('#page-content').load("sections/blank.html");
  });

  $(document).on("click", ".profile-card", function () {
    var profileId = $(this).data('profileid');
    $('#page-content').load("sections/profile.html", function () {
        $('.content-title').text("");
    	initiateProfile(profileId);
    });
  });

  $(document).on("click", '#trn-back-button', function () {
    $('#page-content').load("sections/trainees.html", function () {
      $('.content-title').text("Trainees zeigen Gesicht");
      initiateTrainees();
    });
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-trainees").parent(".nav-item").addClass("active");
  });

  // $( document ).ready(function() {
  $('#page-content').load("sections/start.html", function () { });
  // })(jQuery);
});
