import * as request from 'request';
import User from './User';
import Repo from './Repo'


const options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
}
class GitHubApiService {

    //获得用户信息接口
    getUserInfo = (userName:string,callback:(user:User)=>any)=>{
        request.get("http://api.github.com/users/" + userName, options, (error: any, response: any, body: any) => {
            // 写法一
            // let user = new User(JSON.parse(body)); // typeof body == object
            // 写法二 
            let user: User = body; // typeof body == string
            callback(user);
        })
    }

    getRepos(userName:string, callBack: (repos: Repo[]) => any) {
        request.get("http://api.github.com/users/" + userName + "/repos", options, (error: any, response: any, body: any) => {
            let repos: Repo[] = body.map((repo: any) => repo);
            callBack(repos);
        })
    }
}

export default GitHubApiService;