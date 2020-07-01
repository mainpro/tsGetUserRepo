console.log("hello ts");
import GithubApiService from './gitHubApiService'
import User  from './User'
import Repo from './Repo';

// node.js内置功能，用于获取第三个参数内容
console.log(process.argv[2])

let svc: GithubApiService = new GithubApiService();

if (process.argv.length < 3) {
    console.log("请输入用户名");
} else {
    svc.getUserInfo("bbcfive", (user: User) => {
        svc.getRepos(user.login, (repos: Repo[]) => {
            user.repos = repos;
            console.log(user);
        })    
    }); 
}
