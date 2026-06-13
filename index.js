import 'dotenv/config';
import express from 'express';
const app = express();
const PORT=3000;
const gitHubData ={
  "login": "VijayVerma-12",
  "id": 198444953,
  "node_id": "U_kgDOC9QHmQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/198444953?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/VijayVerma-12",
  "html_url": "https://github.com/VijayVerma-12",
  "followers_url": "https://api.github.com/users/VijayVerma-12/followers",
  "following_url": "https://api.github.com/users/VijayVerma-12/following{/other_user}",
  "gists_url": "https://api.github.com/users/VijayVerma-12/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/VijayVerma-12/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/VijayVerma-12/subscriptions",
  "organizations_url": "https://api.github.com/users/VijayVerma-12/orgs",
  "repos_url": "https://api.github.com/users/VijayVerma-12/repos",
  "events_url": "https://api.github.com/users/VijayVerma-12/events{/privacy}",
  "received_events_url": "https://api.github.com/users/VijayVerma-12/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vijay Verma",
  "company": null,
  "blog": "",
  "location": "Sector 94 Noida , Uttar Pradesh ",
  "email": null,
  "hireable": null,
  "bio": "BCA Student.\r\nFull-Stack Developer.",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-02-09T10:46:58Z",
  "updated_at": "2026-06-13T08:44:46Z"
}
app.get("/",(req,res)=>{
    res.send(`welcome agian`);
});

app.get("/about",(req,res)=>{

    res.send("i'm vijay");
})
app.get("/about/age",(req,res)=>{

    res.send("22");
})
app.get("/about/github",(req,res)=>{
    res.json(gitHubData);
})
app.listen(process.env.PORT,()=>{
console.log(`server is rinning in port http://localhost:${PORT}`);
})