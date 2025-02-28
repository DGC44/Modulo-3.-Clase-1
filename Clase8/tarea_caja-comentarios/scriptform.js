function addComment() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const comment = document.getElementById("comment").value;
    
    if (!name || !lastname || !comment) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }
    
    const now = new Date();
    const timestamp = `Publicado el ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    
    const commentData = { name, lastname, comment, timestamp };
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentData);
    localStorage.setItem("comments", JSON.stringify(comments));
    
    renderComments();
    document.getElementById("commentForm").reset();
}

function renderComments() {
    const commentSection = document.getElementById("comments");
    commentSection.innerHTML = '<h2>Comentarios</h2>';
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    comments.forEach((data, index) => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `
            <strong>${data.name} ${data.lastname}</strong>
            <p>${data.comment}</p>
            <span class="timestamp">${data.timestamp}</span>
            <button class="delete" onclick="deleteComment(${index})">Eliminar</button>
        `;
        commentSection.appendChild(commentDiv);
    });
}

function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    renderComments();
}

function loadComments() {
    renderComments();
}