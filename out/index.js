"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubApiService_1 = require("./GitHubApiService");
let svc = new GitHubApiService_1.GitHubApiService();
svc.getUserInfo('ishita12', (user) => {
    //console.log(user);
});
svc.getRepos('ishita12', (repos) => {
    console.log(repos);
});
