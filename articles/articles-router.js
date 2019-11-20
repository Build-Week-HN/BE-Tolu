const router = require("express").Router();
const articlesModel = require("./articles-model");


router.get("/", (req, res) => {
  const { sortby, sortdir } = req.query;
  articlesModel
    .find()
    .orderBy(sortby || "rank", sortdir || "asc")
    .then(topArticles => {
      //console.log(topArticles)
      res.status(200).json(topArticles);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Cannot retrieve stories from database", error });
    });
});

module.exports = router;
