const Crush = require("./crush.js");


async function getAllCrush() {
    try {
        const res = await Crush.find({});
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getAllCrush