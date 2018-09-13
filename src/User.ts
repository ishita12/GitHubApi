import { Repo } from "./Repo";

export class User {

loginName:string;
fullName:string;
repoCount:number;
followerCount:number;
repos: Repo[];


constructor(user: any){

this.loginName=user.login;
this.fullName=user.name;
this.repoCount=user.public_repos;
this.followerCount=user.followers;
//this.repos


}




}