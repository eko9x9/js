import { promisify } from "util";

const foo = () => {
    console.log("foo");
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const sleep2 = promisify(setTimeout);

(async() => {
    console.log("start");
    await sleep(2000);
    foo()
    console.log("end")

    console.log("using utils")
    await sleep2(2000);
    foo()
    console.log("end 2")

})()
