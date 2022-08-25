const Sequelize = require('sequelize');
const sequelize = new Sequelize('test_db', 'postgres', 'asd!@#', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Success!");
    var Posts = sequelize.define('posts', {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });

    Posts.sync({ force: true }).then(function () {
        return;
    });
}).catch((err) => {
    console.log(err);
});