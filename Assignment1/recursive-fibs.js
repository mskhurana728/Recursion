function recursiveFibs(num, i = 2, arr = [0, 1]) {
	if (num <= 0) {
		return "Enter a Number greater than 0";
	}
	if (num == 1) {
		return [0];
	}
	if (i < num) {
		arr.push(arr[i - 2] + arr[i - 1]);
		i++;
		recursiveFibs(num, i, arr);
	}
	return arr;
}
