"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(user) {
        this.loginName = user.login;
        this.fullName = user.name;
        this.repoCount = user.public_repos;
        this.followerCount = user.followers;
        //this.repos
    }
}
exports.User = User;
