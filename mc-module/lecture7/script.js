

const DB_KEY = 'localTickets';
const toolBoxPriorityContainer = document.querySelector('.toolbox');
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const modalCloseBtn = document.querySelector(".modal-close");
const modal = document.querySelector('.modal-cont');
const textarea = modal.querySelector(".textarea-cont");
const prioritySetModal = modal.querySelector(".priority-color-cont");
const priorityColorArray = prioritySetModal.querySelectorAll(".priority-color");


const pendingContainer = document.querySelector(".pending-cont");

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});


prioritySetModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        return;
    }

    for (let i = 0; i < priorityColorArray.length; i++) {
        priorityColorArray[i].classList.remove("active");
    }

    e.target.classList.add("active");
})


modal.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
        return;
    }

    const content = textarea.value;

    const activeColorElement = prioritySetModal.querySelector(".active");
    if (!activeColorElement) {
        alert("Please select a color first!");
    }
    const cColor = activeColorElement.classList[1];

    const { randomUUID } = new ShortUniqueId({ length: 6 });
    const id = randomUUID();

    console.log(id);
    createNewTicket(content, cColor, id, true);
    closModal();
});


modalCloseBtn.addEventListener("click", closModal);


function createNewTicket(content, cColor, id, isPending) {
    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");

    ticketContainer.innerHTML = `
        <div class="ticket-color ${cColor}"></div>
        <div class="ticket-id"> ${id}</div>
        <div class="ticket-area"> ${content} </div>
        <div class="lock-unlock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;

    if (isPending === true) {
        pendingContainer.appendChild(ticketContainer);
    }

    // TODO: Save it in local storage.
    
}

function closModal() {
    modal.style.display = "none";
}

function saveTaskList(taskList) {
    localStorage.setItem(DB_KEY, JSON.stringify(taskList))
}


function getTaskList() {
    return JSON.parse(localStorage.getItem(DB_KEY));
}