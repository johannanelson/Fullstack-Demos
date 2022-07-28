const { db } = require("./db");
const app = require("./app.js")

const init = async () => {
  try {
    // 1. Sync to my db
    await db.sync();
    // 2. Open up a port to listen with my express app
    app.listen(3000, () => {
      console.log(`Listening at http://localhost:3000`)
    });
  } catch (error) {
    console.error(error)
  }
}

init();
