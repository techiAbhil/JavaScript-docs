self.onmessage = async function (message) {
	console.log('Message in worker = ', message);
	if (message.data === 'INIT_CALCULATIONS') {
		let sum = 0;
		for (let i = 0; i <= 9007199254; i++) sum += i;

		// we can also call api's
		const fetchData = await fetch(
			'https://jsonplaceholder.typicode.com/todos/'
		);
		const apiData = await fetchData.json();

		self.postMessage({ sum, apiData });
	}
};
