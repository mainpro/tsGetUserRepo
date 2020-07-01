import Repo from './Repo';

interface User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];
}
export default User;