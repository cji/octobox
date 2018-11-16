$(document).on("turbolinks:load", function () {
  if ($("meta[name='push_notifications']").length >0) {
    App.sync = App.cable.subscriptions.create("NotificationsChannel", {
      received: function(data) {
        if($(data.id).length) {
          $(data.id)[0].outerHTML = data.html
        }
      }
    });
  }
});
