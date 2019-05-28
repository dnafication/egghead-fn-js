// A partial application occurs whenever a curried function
// has some but not all of its function applied.

const getFromAPI = baseURL => endpoint => cb => {
  fetch(`${baseURL}${endpoint}`)
    .then(resp => resp.json())
    .then(data => cb(data))
    .catch(err => console.error(err.message));
};

// partially apply a baseurl

const getGithub = getFromAPI("https://api.github.com");

const getGithubUsers = getGithub("/users");
const getGithubRepos = getGithub("/repositories");

getGithubUsers(data => console.log(data.map(user => user.login)));
getGithubUsers(data => console.log(data.map(user => user.avatar_url)));
