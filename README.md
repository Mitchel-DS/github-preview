# github-preview
Personal portofolio using the GitHub API.

```
import { Octokit } from 'octokit';
import token from './config';

const octokit = new Octokit({
  auth: token,
});

try {
  await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "Mitchel-DS",
    repo: "business-card",
  });
} catch (error) {
  console.error('kanker');
}

```

failed attempt for fetching using octokit. global not defined. 
