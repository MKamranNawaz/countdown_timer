import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt({
    type: "input",
    name: "userInput",
    message: "Please enter time in seconds",
});

let input:number = parseInt(res.userInput);

function startTime(val:number) {
    
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    const interval = setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(new Date(intTime), currentTime);
        
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            clearInterval(interval);
            process.exit();
        }
        const min = Math.floor((timeDiff % 3600) / 60);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min}:${sec}`);
        
    },1000)
}

startTime(input);