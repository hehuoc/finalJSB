let fullName = document.getElementById('full-name')
let age = document.getElementById('age')
let phoneNumber = document.getElementById('phone-number')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm-password')
let submitButton = document.getElementById('button')
let male = document.getElementById('male')
let female = document.getElementById('female')
let other = document.getElementById('other')
submitButton.addEventListener('click', function submitForm(event) {
  event.preventDefault()
  if (fullName.value == '') {
    alert('Please enter your fullname')
    fullName.focus()
    return
  }
  if (age.value == '') {
    alert('Please enter your age')
    age.focus()
    return
  }
  if (phoneNumber.value == '') {
    alert('PLease enter your phone number')
    phoneNumber.focus()
    return
  }
  if (password.value == '') {
    alert('Please enter your password')
    password.focus()
    return
  }
  if (confirmPassword.value == '') {
    alert('Please enter your password')
    confirmPassword.focus()
    return
  }
  if (password.value != confirmPassword.value) {
    alert('please check your password')
    password.value = ''
    confirmPassword.value = ''
    password.focus()
    return
  }
  if (male.checked == false && female.checked == false && other.checked == false) {
    alert('Please choose your gender')
  }
  alert('sign up successfully')
})

