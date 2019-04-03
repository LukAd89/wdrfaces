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
    await $('.trn-name', clone).text("Trainee Nr. " + (i+1));
    await $('.profile-card', clone).attr("data-profileid", "trn" + i)
    await $('.trow-1').append(clone);
  }
}

(function ($) {
  //= require('../data/profiles.json');
  // $('#nav-link-tables').click(async function () {
  $(document).on("click", '#nav-link-tables', async function () {
    await $('#page-content').load("sections/trainees.html", async () => {
      await initiateTrainees();
    });
  });
  $('#nav-link-charts').click(function () {
    $('#page-content').load("sections/blank.html");
  });

  $('.nav-link:not([id])').click(function () {
    $('#page-content').load("sections/blank.html");
  });

  $(document).on("click", ".profile-card", async function () {
    await $('#page-content').load("sections/profile.html", async () => {
      initiateProfile($(this).data("profileid"));
    });
  });
})(jQuery);