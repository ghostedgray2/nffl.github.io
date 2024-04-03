const path = require('path');
const express = require('express');


const app = express();

app.use('',express.static(path.join(__dirname, 'public')));
app.get('/', (request, response) => {
  return response.sendFile('index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
  return response.sendFile('dashboard.html', { root: '.' });
});
const port = '53134';
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

window.onload = () => {
const fragment = new URLSearchParams(window.location.hash.slice(1));
const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

if (!accessToken) {
    window.location.href('/')
    return (document.getElementById('login').style.display = 'block');
}


};
fetch('https://discord.com/api/users/@me', {
  headers: {
      authorization: `${tokenType} ${accessToken}`,
  },
})
.then(result => result.json())
.then(response => {
  //handle response
})
.catch(console.error);
const { username, discriminator, avatar, id} = response;
//set the welcome username string
window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    if (!accessToken) {
        window.location.href('/')
    }

    fetch('https://discord.com/api/users/@me', {
    headers: {
        authorization: `${tokenType} ${accessToken}`,
    },
    })
    .then(result => result.json())
    .then(response => {
        console.log(response);
        const { username, discriminator, avatar, id} = response;
      localStorage.setItem("username", ` ${username}#${discriminator}`)
      localStorage.setItem("avatar", `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`)
        //set the welcome username string
        document.getElementById('disname').innerText = localStorage.getItem("username");

        //set the avatar image by constructing a url to access discord's cdn
        document.getElementById("disavatar").src = localStorage.getItem("avatar");
    })
    .catch(console.error);


};
 