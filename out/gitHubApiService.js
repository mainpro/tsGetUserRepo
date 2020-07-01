"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var options = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};
var GitHubApiService = /** @class */ (function () {
    function GitHubApiService() {
        //获得用户信息接口
        this.getUserInfo = function (userName, callback) {
            request.get("http://api.github.com/users/" + userName, options, function (error, response, body) {
                // 写法一
                // let user = new User(JSON.parse(body)); // typeof body == object
                // 写法二 
                var user = body; // typeof body == string
                callback(user);
            });
        };
    }
    GitHubApiService.prototype.getRepos = function (userName, callBack) {
        request.get("http://api.github.com/users/" + userName + "/repos", options, function (error, response, body) {
            var repos = body.map(function (repo) { return repo; });
            callBack(repos);
        });
    };
    return GitHubApiService;
}());
exports.default = GitHubApiService;
