// function submitBtn(event){
//     alert('dang nhap thanh cong')
// }



let submitButton = document.getElementById('button')
let email = document.getElementById('email')
let password = document.getElementById('password')


submitButton.addEventListener('click', function submitForm(event) {
    event.preventDefault()
    if(email.value == ''){
        alert('hay nhap email')
        email.focus()
        return
    }
    if(password.value == '') {
        alert('hay nhap password')
        password.focus()
        return
        
    }
})
