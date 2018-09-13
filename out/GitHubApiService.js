"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = __importStar(require("request"));
class GitHubApiService {
    getUserInfo(userName) {
        let options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        request.get('https://api.github.com/users/' + userName, options, (error, response, body) => {
            console.log(body);
        });
    }
    getRepos() {
    }
}
exports.GitHubApiService = GitHubApiService;
