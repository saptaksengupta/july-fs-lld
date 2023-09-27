

const DB_KEY = 'localTickets';
const toolBoxPriorityContainer = document.querySelector('.toolbox-priority');
const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");
const modalCloseBtn = document.querySelector(".modal-close");
const modal = document.querySelector('.modal-cont');
const textarea = modal.querySelector(".textarea-cont");
const prioritySetModal = modal.querySelector(".priority-color-cont");
const priorityColorArray = prioritySetModal.querySelectorAll(".priority-color");
const pendingContainer = document.querySelector(".pending-cont");
const finishedContainer = document.querySelector(".finished-cont");
const containers = document.querySelectorAll(".container");

let allTicketList = [];

window.addEventListener("load", function() {
    populateUi();
});

toolBoxPriorityContainer.addEventListener("click", function(e) {
    if (e.target === e.currentTarget) {
        return;
    }
    const currentElement = e.target;
    const clickedColor = currentElement.classList[1];
    const ticketArr = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < ticketArr.length; i++) {
        const ticketColorElem = ticketArr[i].querySelector(".ticket-color");
        const ticketColor = ticketColorElem.classList[1];
        if (ticketColor != clickedColor) {
            ticketArr[i].style.display = "none";
        } else {
            ticketArr[i].style.display = "block";
        }
    }
});

toolBoxPriorityContainer.addEventListener("dblclick", function() {

    // if (e.target === e.currentTarget) {
    //     return;
    // }

    const ticketArr = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < ticketArr.length; i++) {
        ticketArr[i].style.display = "block";
    }
});

addBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

deleteBtn.addEventListener("click", function(e) {
    e.target.classList.toggle("red");
});

prioritySetModal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        return;
    }

    for (let i = 0; i < priorityColorArray.length; i++) {
        priorityColorArray[i].classList.remove("active");
    }

    e.target.classList.add("active");
});


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
    createNewTicket(content, cColor, id, true, true);
    closModal();
});


modalCloseBtn.addEventListener("click", closModal);


function populateUi() {
    allTicketList = getTicketsList(); // fetch from DB.
    for(let i = 0; i < allTicketList.length; i++) {
        const currentTicket = allTicketList[i];
        const ticketDom = getTicketDom(
            currentTicket.id,
            currentTicket.content,
            currentTicket.color
        )
        if (currentTicket.isPending) {
            renderPendingTicket(ticketDom);   
        } else {
            renderFinishedTicket(ticketDom);
        }
    }
}

function renderPendingTicket(pendingTicketDom) {
    pendingContainer.appendChild(pendingTicketDom);
}

function renderFinishedTicket(finsihedTicketDom) {
    finishedContainer.appendChild(finsihedTicketDom);
}

function getTicketDom(id, content, cColor) {
    const ticketContainer = document.createElement("div");
    ticketContainer.setAttribute("class", "ticket-cont");
    ticketContainer.setAttribute("draggable", true);
    ticketContainer.innerHTML = `
        <div class="ticket-color ${cColor}"></div>
        <div class="ticket-id"> ${id}</div>
        <div class="ticket-area"> ${content} </div>
        <div class="lock-unlock">
            <i class="fa-solid fa-lock"></i>
        </div>
    `;
    
    //HINT: how to make anything editable.
    // ticketContainer.querySelector(".ticket-area").setAttribute("contenteditable", true);
    attachListenersOnATicket(ticketContainer);
    return ticketContainer;
}

function attachListenersOnATicket(ticketContainer) {
    ticketContainer.addEventListener("click", function(e){
        const isDeleteActivated = deleteBtn.children[0].classList.contains("red");
        if (isDeleteActivated) {
            console.log(e.target);
            const ticketId = e.currentTarget.querySelector(".ticket-id").textContent.trim();
            e.currentTarget.remove();
            deleteTicket(ticketId);
        }
    });
}

function deleteTicket(ticketId) {
    allTicketList = allTicketList.filter((ticket) => {
        return ticket.id !== ticketId;
    });
    saveTicketList(allTicketList);
}

function createNewTicket(content, cColor, id, isPending, saveToDb = false) {
    
    if (isPending === true) {
        const ticketDom = getTicketDom(id, content, cColor);
        pendingContainer.appendChild();
    }

    // TODO: Save it in local storage.
    if (saveToDb) {
        saveTicketsToDb(content, cColor, id, isPending);
    }
}

function saveTicketsToDb(content, cColor, id, isPending) {
    const ticketObj = {
        id: id,
        content: content,
        color: cColor,
        isPending: isPending
    }

    allTicketList.push(ticketObj);
    saveTicketList(allTicketList);
}

function closModal() {
    modal.style.display = "none";
}

function saveTicketList(taskList) {
    localStorage.setItem(DB_KEY, JSON.stringify(taskList))
}


function getTicketsList() {
    return JSON.parse(localStorage.getItem(DB_KEY));
}