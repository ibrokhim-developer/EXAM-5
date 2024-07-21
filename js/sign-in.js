let loginForm = document.querySelector('#loginForm')
let signUp = document.querySelector(".signup-navigate")

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(e.target[0].value === "admin" && e.target[1].value === "123"){
        localStorage.setItem("access_token",e.target[0].value)
        window.location.href="./students.html"
    }else{
        window.location.href="./sign-up.html"
    }
})

signUp.addEventListener("click",()=>{
    window.location.href="./sign-up.html"
})