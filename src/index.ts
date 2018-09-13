import {GitHubApiService} from './GitHubApiService';
import { User } from './User';
import {Repo} from './Repo';

let svc=new GitHubApiService();
svc.getUserInfo('ishita12', (user: User) => {

//console.log(user);
    
});


svc.getRepos('ishita12', (repos: Repo[]) =>{
    console.log(repos);
});