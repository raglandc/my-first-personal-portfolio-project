const ajaxPHP = () => {
  $(".APHP_form").on("submit", function (e) {
    let name = $("#mail-name");
    let email = $("#mail-email");
    let body = $("#mail-message");

    function isNotEmpty(caller) {
      if (caller.val() == "") {
        caller.css("border", "1px solid red");
      } else {
        caller.css("border", "");
      }
    }

    if (isNotEmpty(name) && isNotEmpty(email) && inNotEmpty(body)) {
      $.ajax({
        url: "mail.php",
        method: "POST",
        dataType: "json",
        data: {
          name: name.val(),
          email: email.val(),
          body: body.val(),
        },
        success: function (response) {
          $(".APHP_form")[0].reset();
          $(".APHP_form__message").text("Message Sent!");
        },
      });
    }
  });

  e.preventDefault();
};

export default ajaxPHP;
