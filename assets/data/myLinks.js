const platforms = [
  {
    name: "projects",
    url: "/profile",
    icon: "fas fa-tasks",
  },
  {
    name: "twitter",
    url: "https://twitter.com/saurav_sanjay_",
    icon: "fab  fa-twitter",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/saurav.sanjay.14",
    icon: "fab  fa-facebook",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/saurav_sanjay_",
    icon: "fab  fa-instagram",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sauravsanjay",
    icon: "fab  fa-linkedin",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@saurav-sanjay",
    icon: "fab  fa-youtube",
  },
  {
    name: "github",
    url: "https://www.github.com/saurav-sanjay",
    icon: "fab  fa-github",
  },
  {
    name: "leetcode",
    url: "https://www.leetcode.com/saurav-sanjay",
    icon: "fas fa-code",
  },
  {
    name: "geeksforgeeks",
    url: "https://auth.geeksforgeeks.org/user/saujay",
    icon: "fas fa-book",
  },
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * This contains basic information about me.
 */
const user = {
  name: "Saurav Sanjay",
  about:
    "Third year Computer Science and Engineering(CSE) student at SLIET, Longowal, Punjab - 148106",
  college: "Sant Longowal Institute of Engineering and Technology",
};

const rootElement = document.getElementById("root");

const collections = document.createElement("div");
collections.classList.add("collections");

platforms.forEach((platform) => {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = createCard(platform);
  collections.appendChild(cardContainer);
});

rootElement.appendChild(collections);

function createCard(platform) {
  const id = platform.url.split("/").pop() ?? user.name;

  return `<div class="textEffect">
        <p><i class="${platform.icon}"></i> ${capitalize(platform.name)}</p>
        <p><a href="${platform.url}" id="${platform.name}Link">${
    platform.name
  }/${id}</a></p>
        </div>`;
}

function createProfile() {
  return `<table>
    <tr>
        <td><a href="./profile"><img src="/assets/images/myPictureDefault.jpg" alt="profilePicture" width="175px" height="175px"></a></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${user.name} <br />Third year Computer Science and Engineering(CSE) student at <a href="http://sliet.ac.in"><abbr title="Sant Longowal Institute of Engineering and Technology"><strong>SLIET</strong></abbr></a>, Longowal, Punjab - 148106</p></div></td>
    </tr>
    </table>`;
}
