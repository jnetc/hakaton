"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const likeBtns = document.querySelectorAll('.btn-like');
    for (const btn of likeBtns) {
        btn.addEventListener('click', () => {
            const likesCount = btn.querySelector('.likes-count');
            const currentLikes = Number(likesCount.dataset.likes) + 1;
            likesCount.setAttribute('data-likes', `${currentLikes}`);
            if (currentLikes >= 1000) {
                likesCount.textContent = `${(currentLikes / 1000).toFixed(1)}k`;
            }
            else {
                likesCount.textContent = `${currentLikes}`;
            }
        });
    }
});
//# sourceMappingURL=likes.js.map