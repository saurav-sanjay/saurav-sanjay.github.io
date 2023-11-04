const platforms = [
    {
        name: "facebook",
        url: "https://www.facebook.com/saurav.sanjay.14"
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/saurav_sanjay_"
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/sauravsanjay"
    },
    {
        name: "twitter",
        url: "https://twitter.com/saurav_sanjay_"
    },
    {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCHowgTManguhRpisom5Rbrg"
    },
    {
        name: "github",
        url:"https://github.com/saurav-sanjay/"
    }
]

const user = [{
    name: "Saurav Sanjay",
    about: "Third year Computer Science and Engineering(CSE) student at SLIET, Longowal, Punjab - 148106",
    college: "Sant Longowal Institute of Engineering and Technology"
    
}]

const rootElement = document.getElementById('root')

platforms.forEach(platform =>{
    const cardContainer = document.createElement('div')
    cardContainer.innerHTML = createCard(platform)
    rootElement.appendChild(cardContainer.firstChild)
})
function createCard(platform){
        return `<div class="textEffect">
        <p><i class="fab fa-${platform.name}"></i> ${platform.name}:</p>
        <p><a href="${platform.url}" id="${platform.name}Link">${platform.name}/SauravSanjay</a></p>
        </div>`
}
function createProfile(){
    return `<table>
    <tr>
        <td><a href="#"><img src="myPictureDefault.jpg" alt="profilePicture" width="175px" height="175px"></a></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${user.name} <br />Third year Computer Science and Engineering(CSE) student at <a href="http://sliet.ac.in"><abbr title="Sant Longowal Institute of Engineering and Technology"><strong>SLIET</strong></abbr></a>, Longowal, Punjab - 148106</p></div></td>
    </tr>
    </table>`
}