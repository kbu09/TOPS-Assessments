function validateForm() {
    document.getElementById('Error').innerText = '';
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        displayError('Error', 'Email is required');
        return false;
    }
    const password = document.getElementById('password').value;
    if (password.trim() === '') {
        displayError('Error', 'Password is required');
        return false;
    }
    const re_password = document.getElementById('re_password').value;
    if (re_password.trim() === '') {
        displayError('Error', 'Please Retype Password');
        return false;
    }
    const firstName = document.getElementById('firstName').value;
    if (firstName.trim() === '') {
        displayError('Error', 'First Name is required');
        return false;
    }
    const lastName = document.getElementById('lastName').value;
    if (lastName.trim() === '') {
        displayError('Error', 'Last Name is required');
        return false;
    }
    const mobile = document.getElementById('mobile').value;
    if (mobile.trim() === '') {
        displayError('Error', 'Enter your Mobile Number');
        return false;
    }
    const genders = document.getElementsByName("gender");
    if (genders[0].checked == true) { }
    else if (genders[1].checked == true) { }
    else {
        displayError('Error', "Please Select Your Gender");
        return false;
    }
    if (drop.value === "") {
        displayError('Error', 'Please Select Country');
        return false;
    }
    const chk_arr = document.getElementsByName("check");
    if (chk_arr[0].checked == true) {
    }
    else {
        displayError('Error', 'Please check both agreements.....');
        return false;
    }
    const chk_arr1 = document.getElementsByName("check1");
    if (chk_arr1[0].checked == true) {
    }
    else {
        displayError('Error', 'Please check both agreements.........');
        return false;
    }
    return true;
}
function displayError(elementId, errorMessage) {
    const errorElement = document.createElement('span');
    errorElement.className = 'error';
    errorElement.textContent = errorMessage;
    document.getElementById(elementId).appendChild(errorElement);
}
