// fetchRepos.js
import { Octokit } from '@octokit/rest';
import { promises as fs } from 'fs';

const octokit = new Octokit({ auth: process.env.GH_TOKEN });

async function fetchRepos() {
  const { data } = await octokit.repos.listForAuthenticatedUser({
    visibility: 'public',
    sort: 'updated',
    per_page: 100
  });

  const repoData = await Promise.all(data.map(async (repo) => {
    try {
      const { data: readmeData } = await octokit.repos.getReadme({
        owner: repo.owner.login,
        repo: repo.name,
      });
      const readmeContent = Buffer.from(readmeData.content, 'base64').toString('utf-8');
      return {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        readme: readmeContent
      };
    } catch (error) {
      console.error(`Error fetching README for ${repo.name}: ${error.message}`);
      return {
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        readme: 'No README available.'
      };
    }
  }));

  await fs.writeFile('repos.json', JSON.stringify(repoData, null, 2));
}

fetchRepos().catch(console.error);
