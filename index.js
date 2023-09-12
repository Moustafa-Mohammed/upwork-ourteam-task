document.addEventListener('DOMContentLoaded', () => {
  const elements = document.getElementsByClassName('team-item__image');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundImage = `url(./assets/images/team-0${i}.png)`;
  }
});
