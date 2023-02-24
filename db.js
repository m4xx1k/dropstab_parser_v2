const db = require('mongoose')
db.set("strictQuery", false);

main().catch(err => console.log(err))

async function main(){
    await db.connect('mongodb+srv://admin:admin@cluster0.ffjxhun.mongodb.net/testImport')
}

main();
    
module.exports = db;
