// O filter ele filtra o arry de acordo com o a regra que voce passar
const arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somentePares (arr){

    return arr.filter(function (item){
        return item % 2 === 0
    })
}

console.log(somentePares(arr))

// Resposta:
function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));