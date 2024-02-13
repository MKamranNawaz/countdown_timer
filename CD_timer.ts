import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

async function getUserInput(): Promise<number> {
    const res = await inquirer.prompt({
        type: "input",
        name: "userInput",
        message: "Please enter time in seconds",
    });
    return parseInt(res.userInput, 10);
}

function startTimer(seconds: number): void {
    const startTime = Date.now();
    const endTime = startTime + seconds * 1000;
    
    const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeDiff = differenceInSeconds(new Date(endTime), new Date(currentTime));
        const min = Math.floor(timeDiff / 60);
        const sec = Math.floor(timeDiff % 60);

        console.clear();
        console.log(`${min}:${sec}`);

        if (timeDiff <= 0) {
            console.log("Timer has expired");
            clearInterval(interval);
            process.exit();
        }
    }, 1000);
}

async function main(): Promise<void> {
    const userInput = await getUserInput();
    startTimer(userInput);
}

main();

