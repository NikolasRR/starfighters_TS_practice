import axios from "axios";
import connection from "../database.js";

async function getStargazers(user:string) {
    const { data } = await axios.get(`http://api.github.com/users/${user}/repos`);

    let stargazersSum = 0;
    data.forEach((repo) => stargazersSum += repo.stargazers_count);
    
    return stargazersSum
}

const services = {
    getStargazers
}

export default services;