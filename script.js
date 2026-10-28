const intro = document.getElementById('intro');
const invitation = document.getElementById('invitation');
const openButton = document.getElementById('openInvite');
const openText = document.getElementById('openText');
const replayButton = document.getElementById('replayButton');
let opening = false;
function openInvitation() {
  if (opening) return;
  opening = true;
  intro.classList.add('opening');
  openButton.disabled = true;
  openText.disabled = true;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.setTimeout(() => {
    intro.hidden = true;
    intro.style.display = 'none';
    invitation.hidden = false;
    window.scrollTo({top: 0, behavior: 'instant'});
    opening = false;
  }, reducedMotion ? 100 : 2150);
}
function replay() {
  invitation.hidden = true;
  intro.hidden = false;
  intro.style.display = '';
  intro.classList.remove('opening');
  openButton.disabled = false;
  openText.disabled = false;
  window.scrollTo({top: 0, behavior: 'instant'});
  openButton.focus({ preventScroll: true });
}
openButton.addEventListener('click', openInvitation);
openText.addEventListener('click', openInvitation);
replayButton.addEventListener('click', replay);
