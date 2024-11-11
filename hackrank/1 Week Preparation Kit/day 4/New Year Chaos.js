let q = [1, 4, 2, 3]



function minimumBribes(q) {
    let bribes = 0;
    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            console.log("Too) chaotic")
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    console.log(bribes);
}


function minimumBribes(q) {
    const TOO_CHAOTIC = "Too chaotic";
    let total = 0;

    for (let current_pos = 0; current_pos < q.length; current_pos++) {
        const original_pos = q[current_pos] - 1;
        // DIFERENÇA ENTRE O SUCESSO E ANTERIOR MAIOR QUE 2
        const diff = original_pos - current_pos;
        if (diff > 2) return console.log(TOO_CHAOTIC);

        // SOMA DAS MUDANÇAS DO ESTADO ORIGINAL
        if (diff <= 0) {
            for (let i = Math.max(0, original_pos - 1); i < current_pos; i++) {
                const start_pos_of_forward_person = q[i] - 1;

                if (start_pos_of_forward_person > original_pos) {
                    total++;
                }
            }
        }
    }

    console.log(total);

}




console.log(minimumBribes(q))