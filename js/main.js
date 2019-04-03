function getProfileData(id){
  return new Promise((resolve, reject) => {
    $.getJSON('profiles/dummy.json', data => {
      resolve(data[id]);
    });
  });
}

async function initiateProfile(id) {
  let profile_data = await getProfileData(id);
  console.log("data", JSON.stringify(profile_data.name))
  await $('.card-header').html(profile_data.name);
  console.log("jo")
}

(function ($) {
  //= require('../data/profiles.json');
  $('#nav-link-tables').click(function () {
    $('#page-content').load("sections/trainees.html");
  });
  $('#nav-link-charts').click(function () {
    $('#page-content').load("sections/blank.html");
  });

  $('.nav-link:not([id])').click(function () {
    $('#page-content').load("sections/blank.html");
  });

  $(document).on("click", ".profile-card", async function(){
    console.log($(this).data("profileid"));
    await $('#page-content').load("sections/profile.html");
    initiateProfile($(this).data("profileid"));
  });
})(jQuery);