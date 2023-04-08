document.body.innerHTML = 'Loading';
const url = `localhost:3000`;

async function requestGithub(url) {
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + 'token',
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
