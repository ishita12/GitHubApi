import {GitHubApiService} from './GitHubApiService';
import { User } from './User';
import {Repo} from './Repo';
import * as _ from 'lodash';

let svc=new GitHubApiService();
let userName;
if(process.argv.length<3){
console.log('please pass username');
}else {
    userName=process.argv[2];
}



svc.getUserInfo(userName, (user: User) => {

    svc.getRepos(userName, (repos: Repo[]) =>{
      
    let sortedRepos: Repo[]=_.sortBy(repos, [(repo: Repo) => repo.size * -1]  );    

     let filterRepo: Repo[] =_.take(sortedRepos,5);

     user.repos=filterRepo;





    console.log(user);

    });
    
});


