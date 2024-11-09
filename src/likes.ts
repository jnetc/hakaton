document.addEventListener('DOMContentLoaded', () => {
  const likeBtns = document.querySelectorAll('.btn-like');

  console.log(likeBtns);
  for (const btn of likeBtns) {
    btn.addEventListener('click', () => {
      const likesCount = btn.querySelector('.likes-count') as HTMLSpanElement;

      let currentLikes = Number(likesCount.dataset.likes);
      console.log(currentLikes++);
      likesCount.setAttribute('data-likes', `${currentLikes++}`);

      likesCount.textContent = formatNumber(currentLikes);
    });
  }

  const formatNumber = (number: number) => {
    if (number < 1000) return number.toString();
    if (number < 1_000_000) return `${(number / 1000).toFixed(1)}k`;

    return `${(number / 1_000_000).toFixed(1)}M`;
  };
});