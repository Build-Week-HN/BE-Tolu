const axios = require("axios");
const db = require("../database/dbConfig");

var CronJob = require("cron").CronJob;
const job = new CronJob("30 * * * *", function() {
  console.log("You will see this message every 30 minute");
  axios
    .get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(res => {
      //console.log("res",res.data.slice(0,20))
      let topTwenty = res.data.slice(0, 20);
      topTwenty.map((index, tag) => {
        //console.log(index, tag);
        getTopTwenty(index, tag);
      });
    })
    .catch(error => {
      console.log(error);
    });
});
job.start();

function getTopTwenty(id, index) {
  axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(res => {
      const rank = index + 1;
      const article = {
        rank: rank,
        article_id: res.data.id,
        title: res.data.title,
        url: res.data.url,
        descendants: res.data.descendants,
        score: res.data.score,
        by: res.data.by,
        type: res.data.type
      };
      return article;
    })
    .then(article => {
      const rank = article.rank;
      updateByRank(rank, article);
    })
    .catch(error => {
      console.log(error);
    });
}

async function updateByRank(rank, article) {
  return db("topArticles")
    .where({ rank: rank })
    .update(article);
}
