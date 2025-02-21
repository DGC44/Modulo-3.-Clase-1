document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recargar la página

    const commentText = document.getElementById('commentInput').value.trim();
    if (commentText === '') return; // No hacer nada si está vacío

    const commentSection = document.getElementById('commentsSection');
    const commentBox = document.createElement('div');
    commentBox.className = 'comment-box';
    
    const timestamp = new Date().toLocaleString(); // Obtener la fecha y hora actual

    commentBox.innerHTML = `
      <p>${commentText}</p>
      <small>Publicado el: ${timestamp}</small><br>
      <button class="delete-btn">Eliminar</button>
    `;

    commentSection.appendChild(commentBox);

    // Limpiar el campo de texto
    document.getElementById('commentInput').value = '';

    // Eliminar comentario
    commentBox.querySelector('.delete-btn').addEventListener('click', function() {
      commentBox.remove();
    });
});