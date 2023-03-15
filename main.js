import './style.scss';

// variables
const endpoint = 'https://api.github.com/users/';
const user = 'Mitchel-DS';

// fetch data from API
const fetchData = async () => {
  try {
    const url = `${endpoint}${user}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const displayData = async () => { 
  const user = await fetchData();
  const userData = user;
  console.log(userData);
};

fetchData();
displayData();

document.querySelector('#app').innerHTML = `
  <h1>Hello.</h1>
  <p>My name is Mitchel-DS. Welcome to my page.</p>
`;
