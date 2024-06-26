document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const videoList = document.getElementById('videoList');
    const videoPlayer = document.getElementById('videoPlayer');
    const commentForm = document.getElementById('commentForm');
    const commentsDiv = document.getElementById('comments');

    if (uploadForm) {
        uploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(uploadForm);
            // Necesitas un backend para manejar la subida
            // Aquí simplemente simulamos el proceso
            const file = formData.get('videoUpload');
            const url ="https://www.youtube.com/embed/BY_XwvKogC8?si=d6GyLYwnTRpaY8NV";
            displayVideo(url, file.name);
        });
    }

    function displayVideo(url, name) {
        const videoItem = document.createElement('div');
        videoItem.innerHTML = `
            <video src="${url}" controls width="300"></video>
            <p>${name}</p>
            <button onclick="location.href='video.html?src=${encodeURIComponent(url)}&name=${encodeURIComponent(name)}'">Ver y Comentar</button>
        `;
        videoList.appendChild(videoItem);
    }

    if (videoPlayer) {
        const urlParams = new URLSearchParams(window.location.search);
        const src = urlParams.get('src');
        const name = urlParams.get('name');
        if (src && name) {
            videoPlayer.src = decodeURIComponent(src);
            document.title = decodeURIComponent(name);
        }
    }

    if (commentForm) {
        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const comment = document.getElementById('comment').value;
            displayComment(comment);
            document.getElementById('comment').value = '';
        });
    }

    function displayComment(text) {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment');
        commentItem.innerText = text;
        commentsDiv.appendChild(commentItem);
    }

    // Posicionar estrellas aleatoriamente
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
    });
});