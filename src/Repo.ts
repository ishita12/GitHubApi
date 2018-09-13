export class Repo{

name:string;
description:string;
size:number;
url: string;
forkCount: number;


constructor(repo: any){

this.name=repo.name;
this.description=repo.description;
this.url=repo.html_url;
this.size=repo.size;
this.forkCount=repo.forks;

}


}