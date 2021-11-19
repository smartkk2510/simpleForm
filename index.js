function validateForm(myform) {
  let name = document.getElementById("username").value;
  let result = document.getElementById("result");
  if (name == "") {
    result.innerHTML = "Enter a Valid name";

    return false;
  }
  if (
    !document.getElementById("male").checked &&
    !document.getElementById("female").checked &&
    !document.getElementById("others").checked
  ) {
    result.innerHTML = "Enter gender";
    return false;
  }

  let number = document.getElementById("numb").value;

  if (isNaN(number) || number < 17 || number > 250) {
    result.innerHTML = "Enter valid age";
    return false;
  }

  let password = document.getElementById("pass").value;

  if (password == "" || password.length < 8) {
    result.innerHTML = "Password should contain 8 characters";
    return false;
  }

  let combo = document.getElementById("country").value;
  if (combo == "-1") {
    result.innerHTML = "Please select your country";
    return false;
  }

  if (!document.myform.sure.checked) {
    result.innerHTML = "Check if you are sure";
    return false;
  }

  return true;
}
