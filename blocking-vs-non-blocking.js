import fs from "fs";

const blocking = async () => {
    console.log('start blocking.io');
    
    const dataFromFile = await fs.readFileSync('mock.txt');
    console.log(dataFromFile.toString());
    
    console.log('End blocking');
}

const nonBlocking = async () => {
    console.log('start non blocking.io');
    
    await fs.readFile('mock.txt', function (error, data) {
        if(error) console.log(error);
        console.log(data.toString());
    });
    
    console.log('End non blocking.io')
}

(async () => {
    await blocking();
    console.log("-----------------")
    await nonBlocking();
})()