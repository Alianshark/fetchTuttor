async function requestGithub(url) {
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
  
    if (!response.ok) {
      const responseJson = await response.json();
      throw Error(responseJson?.message || response.status);
    }
  
    const responseJson = await response.json();
    console.log('Response from Github: ', responseJson);
    return responseJson;
  }