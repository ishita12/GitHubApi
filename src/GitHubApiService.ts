import * as request from 'request';
import { User } from './User';
import { Repo } from './Repo';

const options: any ={
    headers: {
        'User-Agent': 'request'
    },
    json: true
    
    };

export class GitHubApiService{
   
getUserInfo(userName: string, cb: (user: User) => any) {

request.get('https://api.github.com/users/'+ userName,options, (error: any, response: any,body: any) => {

let user=new User(body);

cb(user); 



} );

}

getRepos(userName: string, cb: (repos: Repo[]) => any) {

    request.get('https://api.github.com/users/'+ userName + '/repos',options, (error: any, response: any,body: any) => {

       
     var repoArray=body;
     
     var res: Repo[]=repoArray.map((repo: any) => new Repo(repo));
        
        cb(res);
        
        } );

}

}