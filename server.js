const app = require("./src/app");
const configApp = require('./src/configs/config.mongodb')
console.log('port',configApp['app'].port)
// const PORT = process.env.PORT || 3056;
const PORT = configApp.app.port || 3056;
const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce start with ${PORT}`)
});

// process.on('SIGINT', () => {
//     server.close(() => console.log('Exit Server Express'));
// })