const platforms = [
  {
    name: "twitter",
    url: "https://twitter.com/saurav_sanjay_",
    icon: "twitter",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/saurav.sanjay.14",
    icon: "facebook",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/saurav_sanjay_",
    icon: "instagram",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sauravsanjay",
    icon: "linkedin",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@saurav-sanjay",
    icon: "youtube",
  },
  {
    name: "github",
    url: "https://www.github.com/saurav-sanjay",
    icon: "github",
  },
  {
    name: "leetcode",
    url: "https://www.leetcode.com/saurav-sanjay",
    icon: "connectdevelop",
  },
  {
    name: "geeksforgeeks",
    url: "https://auth.geeksforgeeks.org/user/saujay",
    icon: "connectdevelop",
  },
];

const user = [
  {
    name: "Saurav Sanjay",
    about:
      "Third year Computer Science and Engineering(CSE) student at SLIET, Longowal, Punjab - 148106",
    college: "Sant Longowal Institute of Engineering and Technology",
  },
];

const rootElement = document.getElementById("root");

platforms.forEach((platform) => {
  const cardContainer = document.createElement("div");
  cardContainer.innerHTML = createCard(platform);
  rootElement.appendChild(cardContainer.firstChild);
});

function createCard(platform) {
  const id = platform.url.split("/").pop() ?? user.name;

  return `<div class="textEffect">
        <p><i class="fab  fa-${platform.icon}"></i> ${platform.name}:</p>
        <p><a href="${platform.url}" id="${platform.name}Link">${platform.name}/${id}</a></p>
        </div>`;
}

function createProfile() {
  return `<table>
    <tr>
        <td><a href="./myProfile.html"><img src="myPictureDefault.jpg" alt="profilePicture" width="175px" height="175px"></a></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${user.name} <br />Third year Computer Science and Engineering(CSE) student at <a href="http://sliet.ac.in"><abbr title="Sant Longowal Institute of Engineering and Technology"><strong>SLIET</strong></abbr></a>, Longowal, Punjab - 148106</p></div></td>
    </tr>
    </table>`;
}
