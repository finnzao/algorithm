//function should return a boolean indicatin whether or not the 'target' can be constructed
// by concatenating elements of the 'wordBank' array.



// Irá fazer uma verificação se alguma letra do target existe no workBank  
// será retornando depois que susbtrair todas as strings do paramentro array e se torna um array vazio
// se alguma das operações filhos returna true , a operação pai irá retorna true  

const x = 'abcdfe'
console.log(x.slice(1))

const canConstruct = (target, wordBank) => {
    if (target === '') return true


    for (let word of wordBank) {
        //Verificação para ver se palavra não está no meio do array , e sim no começo  
        if (target.indexOf(word) === 0) {
            //corte para substrair da palavra as letras que já existem no banco de dados
            const suffix = target.slice(word.length);
            //função aninhada após remoção das letras da palavra
            canConstruct(suffix, wordBank)
        }
    }

};



//console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))

