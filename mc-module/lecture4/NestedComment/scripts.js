const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    const isReply = e.target.classList.contains('reply');
    const isSubmit = e.target.classList.contains('btn-submit');

    if(isReply) {
        // create and render reply input;
        createAndAppendReplyInput(e);
    } else if(isSubmit) {
        // create and append comment respectively;
        createAndAppendComment(e);
    }
});


function createAndAppendReplyInput(e) {
    const targetElement = e.target;

    // create input container
    const fragment = document.createDocumentFragment();
    const commentContainer = targetElement.parentNode;
    const replyContainer = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("button");

    replyContainer.setAttribute("class", "comment-reply-container");

    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Write your comment!");


    button.setAttribute("class", "btn-submit");
    button.textContent = "Submit";

    replyContainer.appendChild(input);
    replyContainer.appendChild(button);

    fragment.appendChild(replyContainer);


    commentContainer.appendChild(fragment);

}

function createAndAppendComment(e) {
    const commentContainer = document.createElement("div");
    commentContainer.setAttribute("class", "comment-container");
    const inputNode = e.target.parentNode.children[0];

    commentContainer.innerHTML = `
        <h3 class="comment_txt">${inputNode.value}</h3>
        <div class="reply"> Reply </div>
    `;

    const parentContainer = e.target.parentNode.parentNode;
    const replyContainer = e.target.parentNode;
    parentContainer.replaceChild( commentContainer, replyContainer);
}