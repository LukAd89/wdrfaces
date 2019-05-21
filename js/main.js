function getProfileData(id) {
  return new Promise((resolve, reject) => {
    $.getJSON('data/profiles.json', data => {
      if(id == -1) resolve(data);
      resolve(data[id]);
    });
  });
}

async function initiateProfile(id) {
  let profile_data = await getProfileData(id);
  //await $('.card-header').text(profile_data.name);
  $('.trn-name').text(profile_data.name);
  $('.trn-studies').text(profile_data.studies);
  $('.trn-stage').text(profile_data.stage);
  
  //zusätzlich für profile.html
 
  $('.trn-alter').text(profile_data.alter);
  $('.trn-dauer').text(profile_data.tdauer);
  $('.trn-werdegang').text(profile_data.werdegang);
  $('.trn-mail').text(profile_data.mail);
  $('.trn-antw1').text(profile_data.antw1);
  $('.trn-antw2').text(profile_data.antw2);
  $('.trn-antw3').text(profile_data.antw3);
  $('.trn-antw4').text(profile_data.antw4);
  $('.trn-antw5').text(profile_data.antw5);
  $('.trn-antw6').text(profile_data.antw6);
  $('.trn-antw7').text(profile_data.antw7);
  $('.trn-ptext').text(profile_data.ptext);
  
  await $('.trn-picture').attr("src", profile_data.photosm);
  await $('.trn-video').attr("src", profile_data.video);
}

async function initiateTrainees() {
  let profile_data = await getProfileData(-1);
  for (let i = 0; i < Object.keys(profile_data).length; i++) {
    let trainee_id = "trn" + i;
    let clone = await $($("#profileCardTemplate").html());
    await $('.trn-name', clone).text(profile_data[trainee_id].name);
    await $('.profile-card', clone).attr("data-profileid", trainee_id);
    await $('.card-img', clone).attr("src", profile_data[trainee_id].photo);
    await $('.trow-1').append(clone);
  }
}

(function ($) {
  //= require('../data/profiles.json');
  // $('#nav-link-tables').click(async function () {

  $(document).on("click", '#nav-link-start', async function () {
    await $('#page-content').load("sections/start.html", async () => {});
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-start").parent(".nav-item").addClass("active");
  });

  $(document).on("click", '#nav-link-trainees', async function () {
    await $('#page-content').load("sections/trainees.html", async () => {
      await initiateTrainees();
    });
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-trainees").parent(".nav-item").addClass("active");
  });

  $(document).on("click", '#nav-link-quiz', async function () {
    await $('#page-content').load("sections/quiz.html", async () => {
      await $.getScript("js/quiz.js")
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

  $(document).on("click", ".profile-card", async function () {
    await $('#page-content').load("sections/profile.html", async () => {
      initiateProfile($(this).data("profileid"));
    });
  });

  $(document).on("click", '#trn-back-button', async function () {
    await $('#page-content').load("sections/trainees.html", async () => {
      await initiateTrainees();
    });
    $("#accordionSidebar .nav-item.active").removeClass("active");
    $("#nav-link-trainees").parent(".nav-item").addClass("active");
  });

  $( document ).ready(function() {
    $('#page-content').load("sections/start.html", async () => {});
});
})(jQuery);