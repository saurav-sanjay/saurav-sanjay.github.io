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
    name: "bluesky",
    url: "https://bsky.app/profile/saujay.bsky.social",
    icon: "fab fa-react",
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
  {
    name: "codechef",
    url: "https://www.codechef.com/users/saurav_sanjay",
    icon: "fas fa-terminal",
  },
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * This contains basic information about me.
 */
const myDetails = {
  name: "Saurav Sanjay",
  about: "Software Engineer",
  college: "Sant Longowal Institute of Engineering and Technology",
};

const rootElement = document.getElementById("root");

const profileContainer = document.createElement("div");
profileContainer.classList.add("profile");
profileContainer.innerHTML = createProfile();

const collections = document.createElement("div");
collections.classList.add("collections");

rootElement.appendChild(profileContainer);

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
        <td><a href="./socials"><img src="/assets/images/defaultPhoto.jpg" alt="profilePicture" width="175px" height="175px" style="object-fit: cover"></a></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${myDetails.name} | ${myDetails.about}</p></div></td>
    </tr>
    </table>`;
}
