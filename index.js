const readline = require('readline')
const cli = require ('./lib/cli')

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

function output(str){

    const helpFunctions = [
        'weekDays', 'month', 'season', 'help'
    ]

    if(str.trim().length===0){
        return
    }

    if(!helpFunctions.includes(str.trim())){
        console.log('\x1b[31m%s\x1b[0m', 'Command not found')
        return
    }

    console.log('\x1b[36m%s\x1b[0m', cli[str])
}

rl.on('line', (str)=>{
    output(str)
})


rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});