const cowsay = require("cowsay");
const userInfo = require("./informations")
console.log(userInfo)


console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.name} and I'm at the ${userInfo.camp} `,
    e : "oO",
    T : "U "
})) 
