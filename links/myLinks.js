import { profileDetails, socialPlatforms } from "../assets/data/portfolio-data.js";

const rootElement = document.getElementById("root");

const profileContainer = document.createElement("div");
profileContainer.classList.add("profile");
profileContainer.innerHTML = createProfile();
rootElement.appendChild(profileContainer);

socialPlatforms.forEach((platform) => {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = createCard(platform);
  rootElement.appendChild(cardContainer.firstChild);
});
function createCard(platform) {
  return `<div class="textEffect">
        <p><i class="${platform.legacyIcon}"></i> ${platform.label}:</p>
        <p><a href="${platform.url}" id="${platform.name}Link">${platform.handle}</a></p>
        </div>`;
}
function createProfile() {
  return `<table>
    <tr>
        <td><img src="/assets/images/myPictureDefault.jpg" alt="profilePicture" width="175px" height="175px"></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${profileDetails.name}<br/>${profileDetails.about}<br/>${profileDetails.college}</p></div></td>
    </tr>
    </table>`;
}
