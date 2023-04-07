document.body.innerHTML = 'Loading';
const url = `https://api.github.com/users/DarthVanger`;
async function requestGithub(url) {
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + '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',
    },
  });

  if (!response.ok) {
    console.log('error', response);
  }

  const responseJson = await response.json();
  console.log('Response from Github: ', responseJson);
  return responseJson;
}

let userInfo = await requestGithub(url);
console.log('userInfo: ',userInfo.avatar_url);
document.body.innerHTML = `<h1>${userInfo.login} </h1>` + `<img src=${userInfo.avatar_url}/>`;