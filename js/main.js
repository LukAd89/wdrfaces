function getProfileData(id) {
  return new Promise((resolve, reject) => {
    $.getJSON('data/profiles.json', data => {
      resolve(data[id]);
    });
  });
}

async function initiateProfile(id) {
  let profile_data = await getProfileData(id);
  await $('.card-header').text(profile_data.name);
  $('.trn-name').text(profile_data.name);
  $('.trn-studies').text(profile_data.studies);
  $('.trn-stage').text(profile_data.stage);
}

async function initiateTrainees() {
  for (let i = 0; i < 10; i++) {
    let clone = await $($("#profileCardTemplate").html());
    await $('.trn-name', clone).text("Trainee Nr. " + (i + 1));
    await $('.profile-card', clone).attr("data-profileid", "trn" + i)
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