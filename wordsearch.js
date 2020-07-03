const wordSearch = (letters, word) => {
    let answer = false;
    if (letters.length !== 0 && letters[0].length !== 0) {

        const horizontalJoin = letters.map(ls => ls.join(''));
        for (l of horizontalJoin) {
            if (l.includes(word)) {
                answer = true;
            }
        }

        const transpose = function (letters) {
            let box2 = [];
            for (let col = 0; col < letters[0].length; col++) {
                let box = [];
                for (let row = 0; row < letters.length; row++) {
                    box.push(letters[row][col]);
                }
                box2.push(box);
            }
            return box2;
        };

        let newArray = transpose(letters);
    
        const verticalJoin = newArray.map(ls => ls.join(''));
        for (l of verticalJoin) {
            if (l.includes(word)) {
                answer = true;
            }
        }

    } else {
        answer = undefined;
    }

    return answer;
}


module.exports = wordSearch;
