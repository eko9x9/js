async function sleep(time = 1) {
	const sleepMilliseconds = time * 1000
	
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(`Slept for: ${sleepMilliseconds}ms`)
		}, sleepMilliseconds)
	})
}

async function pararel() {
	console.time('pararel')
	const [firstCall, secondCall, thirdCall] = await Promise.all([
		sleep(1), 
		sleep(2),
		sleep(3)
	])
	console.log(`First call: ${firstCall}`)
	console.log(`Second call: ${secondCall}`)
	console.log(`Third call: ${thirdCall}`)
	console.timeEnd('pararel')
}

async function serial(){
    console.time("serial");
    console.log("first");
    await sleep(3);
    await sleep(5);
    console.log("second")
    console.timeEnd("serial")
}

(async() => {
    await pararel();
    console.log("-----------------");
    await serial()
})()