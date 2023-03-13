import './style.scss';
// import { Octokit } from 'octokit';
// import token from './config';

// const octokit = new Octokit({
//   auth: token,
// });

// try {
//   await octokit.request("GET /repos/{owner}/{repo}/issues", {
//     owner: "Mitchel-DS",
//     repo: "business-card",
//   });
// } catch (error) {
//   console.error('kanker');
// }


document.querySelector('#app').innerHTML = `
  <h1>Hello.</h1>
  <p>My name is Mitchel-DS. Welcome to my page.</p>
`;
