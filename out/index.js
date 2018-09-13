"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const GitHubApiService_1 = require("./GitHubApiService");
const _ = __importStar(require("lodash"));
let svc = new GitHubApiService_1.GitHubApiService();
let userName;
if (process.argv.length < 3) {
    console.log('please pass username');
}
else {
    userName = process.argv[2];
}
svc.getUserInfo(userName, (user) => {
    svc.getRepos(userName, (repos) => {
        let sortedRepos = _.sortBy(repos, [(repo) => repo.size * -1]);
        let filterRepo = _.take(sortedRepos, 5);
        user.repos = filterRepo;
        console.log(user);
    });
});
