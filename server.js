const express = require('express');
const apiRoutes = require('./src/user/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) =>{
	res.send("Hello World!");
});

app.use('/api/', apiRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));