export default function formValidation() {
  const usernameEl = document.querySelector("#username");
  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");
  const confirmPasswordEl = document.querySelector("#confirmPassword");

  const form = document.querySelector("#signup");

  form.addEventListener("submit", function (e) {
    //preventing the form from being submitted
    e.preventDefault();

    //validate forms
    let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail(),
      isPasswordValid = checkPassword(),
      isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid =
      isUsernameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid;

    //submit to the server if the form is valid
    if (isFormValid) {
    }
  });

  //is the input empty?
  const isRequired = (value) => (value === "" ? false : true);

  //is the input of required length?
  const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

  //is the email valid
  const isEmailValid = (email) => {
    //define a regular exspression
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //compare the email entered to the regular exspression we defined
    return re.test(email);
  };

  //is the password entered strong enough?
  const isPasswordSecure = (password) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    //test the password to the regular exspression
    return re.test(password);
  };

  //initialize the error

  const showError = (input, message) => {
    //get the form field element
    const formField = input.parentElement;

    //add error class
    formField.classList.remove("success");
    formField.classList.add("error");

    //show error message
    const error = formField.querySelector("small");
    error.textContent = message;
  };

  //intialize success

  const showSuccess = (input) => {
    //get the form field element
    const formField = input.parentElement;

    //add the success class
    formField.classList.remove("error");
    formField.classList.add("success");

    //hide the error message
    const error = formField.querySelector("small");
    error.textContent = "";
  };

  const checkUsername = () => {
    let valid = false;
    const min = 3,
      max = 25;
    const username = usernameEl.value.trim();

    if (!isRequired(username)) {
      showError(usernameEl, "Username cannot be blank");
    } else if (!isBetween(username.length, min, max)) {
      showError(
        usernameEl,
        "Username must be between ${min} and ${max} characters."
      );
    } else {
      showSuccess(usernameEl);
      valid = true;
    }
    return valid;
  };

  const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();

    if (!isRequired(email)) {
      showError(emailEl, "Email cannot be blank");
    } else if (!isEmailValid(email)) {
      showError(emailEl, "Please enter a valid email");
    } else {
      showSuccess(emailEl);
      valid = true;
    }
    return valid;
  };

  const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
      showError(passwordEl, "Password cannot be blank");
    } else if (!isPasswordSecure(password)) {
      showError(passwordEl, "Please enter a valid password");
    } else {
      showSuccess(passwordEl);
      valid = true;
    }
    return valid;
  };

  const checkConfirmPassword = () => {
    let valid = false;

    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();

    if (!isRequired(confirmPassword)) {
      showError(confirmPasswordEl, "Please enter password again");
    } else if (password !== confirmPassword) {
      showError(confirmPasswordEl, "Confirm password does not match");
    } else {
      showSuccess(confirmPasswordEl);
      valid = true;
    }
    return valid;
  };

  //using the debounce tecnique to improve instant feedback

  const debounce = (fn, delay = 500) => {
    let timeoutId;

    return (...args) => {
      //cancle previous timer
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      //setup a new timer
      timeoutId = setTimeout(() => {
        fn.apply(null, args);
      }, delay);
    };
  };

  //providing instant feedback on information entered by the client

  form.addEventListener(
    "input",
    debounce(function (event) {
      switch (event.target.id) {
        case "username":
          checkUsername();
          break;
        case "email":
          checkEmail();
          break;
        case "password":
          checkPassword();
          break;
        case "confirmPassword":
          checkConfirmPassword();
          break;
      }
    })
  );
}
