// function submitBtn(event){
//     alert('dang nhap thanh cong')
// }



let submitButton = document.getElementById('button')
let email = document.getElementById('email')
let password = document.getElementById('password')

let emailUser = "ducduykg3979@gmail.com"
let passwordUser = "ducduy44"

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

    if(email.value==emailUser && password.value == passwordUser){
        alert('dang nhap thanh cong')
        window.location.href = "index.html"
    }
    if(email.value != emailUser || password.value != passwordUser){
        alert('dang nhap that bai')

    }
})
