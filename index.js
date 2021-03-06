require('dotenv').config(); //load before using environment
const server = require("./api/server");

const port = process.env.PORT || 5500

server.listen(port, () => {
  console.log(`Server listening on Port: ${port}`);
});
