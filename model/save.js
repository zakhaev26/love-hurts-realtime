const Crush = require("./crush.js");
console.log(Crush)
async function saveToDb(name) { 
    try {
        const newCrush = new Crush({
            crushName:name,
        })
        const res = await newCrush.save();
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {saveToDb}