import './style.scss';

// variables
const endpoint = 'https://api.github.com/users/';
const user = 'Mitchel-DS';
const repolist = document.querySelector('#app ul');
const amountContainer = document.querySelector('#app h3');

// fetch data from API
const fetchData = async () => {
  try {
    const url = `${endpoint}${user}/repos`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayData = async () => { 
  const repos = await fetchData();
  const repoData = repos;
  console.log(repoData.length);

  var repoAmount = `<h3>Currently: ${repoData.length} projects</h3>`;
  amountContainer.insertAdjacentHTML('beforeend', repoAmount);

  repoData.forEach(repo => {
    var listItem = `<li><a href="${repo.html_url}"><h3>${repo.name}</h3><p>${repo.description}</p></a></li>`;
    repolist.insertAdjacentHTML('beforeend', listItem);
  });
}

fetchData();
displayData();