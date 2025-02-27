function addComment() {
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const comment = document.getElementById("comment").value;
    
    if (!name || !lastname || !comment) {
        alert("Por favor, complete todos los campos requeridos.");
        return;
    }
    
    const commentSection = document.getElementById("comments");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    
    const now = new Date();
    const timestamp = now.toLocaleString();
    
    commentDiv.innerHTML = `
        <strong>${name} ${lastname}</strong>
        <p>${comment}</p>
        <span class="timestamp">${timestamp}</span>
        <button class="delete" onclick="this.parentElement.remove()">Eliminar</button>
    `;
    
    commentSection.appendChild(commentDiv);
    
    document.getElementById("commentForm").reset();
}