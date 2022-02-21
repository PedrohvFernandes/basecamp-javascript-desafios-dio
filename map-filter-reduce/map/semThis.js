// Map é para fazer uma operação em todos os elementos de um array tipo o for each, no caso o map retornar um novo array, ja o for each um undefined
const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);

function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    })
}
const nums = [2, 3, 4, 5]
console.log(mapSemThis(nums))
console.log(nums)