const platforms = [
  {
    name: "twitter",
    url: "https://twitter.com/saurav_sanjay_",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/saurav.sanjay.14",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/saurav_sanjay_",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sauravsanjay",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@saurav-sanjay",
  },
  {
    name: "github",
    url: "https://www.github.com/saurav-sanjay",
  },
  {
    name: "leetcode",
    url: "https://www.leetcode.com/saurav-sanjay",
  },
  {
    name: "geeksforgeeks",
    url: "https://auth.geeksforgeeks.org/user/saujay",
  },
];

const myDetails = {
  name: "Saurav Sanjay",
  about: "Software Engineer",
  college: "Sant Longowal Institute of Engineering and Technology",
};

const rootElement = document.getElementById("root");

const profileContainer = document.createElement("div");
profileContainer.classList.add("profile");
profileContainer.innerHTML = createProfile();
rootElement.appendChild(profileContainer);

platforms.forEach((platform) => {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = createCard(platform);
  rootElement.appendChild(cardContainer.firstChild);
});
function createCard(platform) {
  return `<div class="textEffect">
        <p><i class="fab fa-${platform.name}"></i> ${platform.name}:</p>
        <p><a href="${platform.url}" id="${platform.name}Link">${platform.name}/SauravSanjay</a></p>
        </div>`;
}
function createProfile() {
  return `<table>
    <tr>
        <td><img src="myPictureDefault.jpg" alt="profilePicture" width="175px" height="175px"></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${myDetails.name} | ${myDetails.about}</p></div></td>
    </tr>
    </table>`;
}
