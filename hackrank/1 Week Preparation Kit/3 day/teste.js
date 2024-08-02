function gerarArrayEnorme(tamanho) {
    const array = [];
    for (let i = 0; i < tamanho; i++) {
        array.push(Math.floor(Math.random() * 101));
    }
    return array;
}
// Exemplo de uso:
const tamanhoArray = 1000000; // 1 milhão de elementos
const arrayEnorme = gerarArrayEnorme(tamanhoArray);
console.log(arrayEnorme);
let numbers = [4, 2, 5, 1, 3];

// Utilizando Bubble Sort (implementação manual)
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log("Bubble Sort:", bubbleSort([...arrayEnorme])); // [1, 2, 3, 4, 5]

// Utilizando Array.prototype.sort()
console.log("Array.prototype.sort():", numbers.sort((a, b) => a - b)); // [1, 2, 3, 4, 5]





