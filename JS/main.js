let inpConfirmPass = document.querySelector(".confirmPass input")
let confirmBTN = document.querySelector(".confirmPass button")
let pConfirmPass = document.querySelector(".confirmPass p")

confirmBTN.onclick = function () {
   if (inpConfirmPass.value == '123123') {
      pConfirmPass.innerHTML = "Password is correct"
      pConfirmPass.style.color = "green"
   }else {
      pConfirmPass.innerHTML = "Password is not correct"
      pConfirmPass.style.color = "red"
   }
}
/*------------------*/
let inpAutoPass = document.querySelector(".autoPass input")
let pAutoPass = document.querySelector(".autoPass p")

inpAutoPass.onchange = function () {
   if (inpAutoPass.value == "123123") {
      pAutoPass.innerHTML = "Password is correct"
      pAutoPass.style.color = "green"
   }else {
      pAutoPass.innerHTML = "Password is not correct"
      pAutoPass.style.color = "red"
   }
}