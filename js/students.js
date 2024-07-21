let logout = document.querySelector(".logoutBtn");
let form = document.querySelector("#formStudent");
let formWrapper = document.querySelector(".Wrapper");
let modal = document.getElementById("myModal");
let modalForm = document.querySelector("#modalForm");
let closeBtn = document.querySelector('.bx-x-circle');
let currentCardElement = null;

logout.addEventListener("click", () => {
    localStorage.removeItem("access_token");
    window.location.href = "./sign-in.html";
});

// MODAL ACTION STARTED

document.addEventListener('DOMContentLoaded', (event) => {
    const openModalBtn = document.getElementById('openModalBtn');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// MODAL ACTION ENDED




// FORM ACTION STARTED

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const info = {
        name: e.target[0].value,
        email: e.target[1].value,
        phone_number: e.target[2].value,
        enroll_number: e.target[3].value,
        date: e.target[4].value,
        image: e.target[5].value
    };

    renderCard(info);
    form.reset();
});

// FORM ACTION ENDED




// RENDER DATA STARTED

function renderCard(data) {
    let div = document.createElement('div');
    div.classList.add('card', 'flex', 'gap-[31px]', 'items-center', 'px-[20px]', 'py-[25px]', 'bg-[#fff]', 'rounded-[8px]', 'w-full');
    div.innerHTML = `
        <img src="${data.image}" alt="Student Image" class="rounded-[8px] w-[61px]">
        <h3 class="text-[14px] font-[400]">${data.name}</h3>
        <h3 class="text-[14px] font-[400] ml-[84px]">${data.email}</h3>
        <h3 class="text-[14px] font-[400] ml-[14px]">${data.phone_number}</h3>
        <h3 class="text-[14px] font-[400] ml-[9px]">${data.enroll_number}</h3>
        <h3 class="text-[14px] font-[400] ml-[52px]">${data.date}</h3>
        <div class="flex items-center gap-[15px] ml-[87px]">
            <i class='bx cursor-pointer text-[#FEAF00] text-[20px] bx-info-circle'></i>
            <img class="cursor-pointer edit-btn" src="../assets/images/svg/edit.svg" alt="edit">
            <img class="cursor-pointer delete-btn" src="../assets/images/svg/trash.svg" alt="trash">
        </div>
    `;
    formWrapper.appendChild(div);
}

// RENDER DATA ENDED





// DELETE CARD FUNCTION STARTED

function deleteCard(cardElement) {
    cardElement.remove();
}

// DELETE CARD FUNCTION ENDED