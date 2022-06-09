const linksSocialMedia = {
    github: "heilermesmo",
    facebook: "heiler.pessanha",
    twitter: "Heiler_Pessanha",
    instagram: "heilermesmo"

}
function changeNameUser() {
    document.getElementById('userName').textContent = 'Heiler'
    // userName.textContent = "Heiler"

}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        //alert(li.children[0].href)
    }

}


function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLinkGit.href = data.html_url
            userPhoto.src = data.avatar_url
            userLogin.textContent = data.login

        })

}

changeNameUser()

changeSocialMediaLinks()
getGitHubProfileInfos()
