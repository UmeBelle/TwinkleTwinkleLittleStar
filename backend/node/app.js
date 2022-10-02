const express = require("express");
const cors = require("cors");
const convertBinary = require("./routes/binary");
const app = express();

const PORT = 4000;

app.use(cors());
app.use("/binary", convertBinary);



app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});