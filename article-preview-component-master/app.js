const shareIcon = document.querySelector('.share-icon');
const socialIcons = document.querySelector('.social-icons');

socialIcons.style.display = 'none';

shareIcon.addEventListener('click', () => {
  if(socialIcons.style.display === 'none') {
    socialIcons.style.display = 'flex';
  }
  else {
    socialIcons.style.display = 'none';
  }
});