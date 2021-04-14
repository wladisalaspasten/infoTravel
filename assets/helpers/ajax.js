const ajax = async (url, fileName = undefined) => {
	try {
		let res = await fetch(url);
		let json = await res.json();

		return json;
	} catch (error) {
		console.log(`Error in ${fileName}
    Line: ${error.lineNumber}
    Msg: ${error.stack}`);
	}
};

export default ajax;
