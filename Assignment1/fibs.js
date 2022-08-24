function fibs(num) {
	let arr = [0, 1];
	if (num <= 0) {
		return "Enter a Number greater than 0";
	}
	if (num == 1) {
		return [0];
	}
	if (num == 2) {
		return arr;
	}
	for (let i = 2; i < num; i++) {
		let newNum = arr[i - 2] + arr[i - 1];
		arr.push(newNum);
	}
	return arr;
}
