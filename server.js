const express = require("express");
const app = express();
const path = require("node:path");
const userRouter = require("./routes/userRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view enginge", "ejs");
app.set(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Express app running on port: ${PORT}`);
});
