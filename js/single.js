let navMinus = document.querySelector(".navminus")
let logout = document.querySelector(".logoutBtn")

navMinus.addEventListener("click",()=>{
    window.location.href="./students.html"
})

logout.addEventListener("click",()=>{
    localStorage.removeItem("access_token")
    window.location.href="./sign-in.html"
})

