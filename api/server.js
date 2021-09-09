let express = require('express');
const cors = require('cors');

const app= express()
app.use(cors());

let users = [{id: 1, name: 'user1'}, {id: 2, name: 'user2'}];
app.get('/api/users', function (req, res) {
    res.json(users);
});

app.listen(4001);