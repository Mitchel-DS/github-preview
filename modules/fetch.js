const endpoint = 'https://api.github.com/users/';
const user = 'Mitchel-DS';
const repolist = document.querySelector('#app ul');
const amountContainer = document.querySelector('#app h3');

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
	console.log(repoData)
  
	var repoAmount = `<h3>Currently: ${repoData.length} projects</h3>`;
	amountContainer.insertAdjacentHTML('beforeend', repoAmount);
  
	repoData.forEach(repo => {
	  var topicList = repo.topics;
	  var topics = topicList.join(', ');
	  if (topics == '') {
		topics = '-';
	  }
  
	  var updated = new Date(repo.updated_at);
	  const formattedDate = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit"
	  }).format(updated);
  
	  var listItem = 
	  `
	  <li>
		<a href="/${repo.name}">
		<h3>${repo.name}</h3>
		<p>${repo.description}</p> 
		<p>${topics}</p> 
		<p>Last updated: ${formattedDate}</p>
		</a>
	  </li>
	  `;
	  repolist.insertAdjacentHTML('beforeend', listItem);
	})
  };

  export { fetchData, displayData };