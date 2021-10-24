// Agradeceimento ao usuario
window.alert('Obrigado por acessar meu primeiro projeto!')

// Objeto para receber os links
const linksSocialMedia = {
  gitHub: 'Blf100',
  youTube: 'UCNJZCYzqq6jfHHbx3sKoUTw',
  instagram: 'lopessb',
  facebook: 'brunofabriciolopes',
  twitter: 'brunofabriciolopes'
}

// Criando uma função para acessar os links
// Acessar o DOM
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// Criando função para acessar o Github

const getGitHubProfileInfo = () => {
  const url = `https://api.github.com/users/${linksSocialMedia.gitHub}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfo()
