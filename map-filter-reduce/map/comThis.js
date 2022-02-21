
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const quantidade = [1, 2, 3, 4, 5];

	return quantidade.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());


const quantidade = [1, 2, 3, 4, 5];
// thisArg objeto que vai ser mandando como argumento this
function mapArrayOutro(arr, thisArg) {

	return arr.map(function (item) {
		return item * this.price;
	}, thisArg);
}

console.log(mapArrayOutro(quantidade, apple));