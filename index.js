function getRepos() {
    return fetch('https://api.github.com/users/Innoved-inc/repos').then(data => { return data.json() }).then(repos => {
        let sites = document.getElementById("sites");
        repos.forEach(repo => {
            let site = document.createElement("a");
            site.setAttribute('href', 'https://innoved-inc.github.io/' + repo.name);
            site.setAttribute('target', '_blank');
            site.setAttribute('class', 'list-group-item list-group-item-action');
            site.appendChild(document.createTextNode(repo.name));
            sites.appendChild(site);
        });
    });
}

getRepos();