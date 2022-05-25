const MAXIMUM_LINK_LENGTH = 90;

const invalidLink = window.location.href;
const outputLink = document.querySelector('.invalid-link');

if (invalidLink.length>MAXIMUM_LINK_LENGTH) {
  outputLink.textContent = `"..${invalidLink.match('/the.{13}')[0]}...${invalidLink.slice(-20)}"`;
} else {
  outputLink.textContent = `"..${invalidLink.match('/the.+')[0]}"`;
}
