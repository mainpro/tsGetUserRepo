"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello ts");
var gitHubApiService_1 = __importDefault(require("./gitHubApiService"));
// node.js内置功能，用于获取第三个参数内容
console.log(process.argv[2]);
var svc = new gitHubApiService_1.default();
if (process.argv.length < 3) {
    console.log("请输入用户名");
}
else {
    svc.getUserInfo("bbcfive", function (user) {
        svc.getRepos(user.login, function (repos) {
            user.repos = repos;
            console.log(user);
        });
    });
}
