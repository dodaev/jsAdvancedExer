function magicMatrices(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        //console.log(matrix[i]);
        let sumRowOne = matrix[i].reduce((acc, el) => acc + el);
        let sumRowTwo = matrix[i + 1].reduce((acc, el) => acc + el); // следващия ред
        let sumColOne = 0;
        let sumColTwo = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumColOne += matrix[i][col];
            sumColTwo += matrix[i + 1][col];
        }

        if (sumRowOne !== sumRowTwo || sumColOne !== sumColTwo) {
            return false;
        }

        return true;

    }
}
console.log(magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   

));