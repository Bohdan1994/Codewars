var sum_pairs=function(ints, s){
    let temp = [];
    for(let i = 0, d = ints.length; i < d; i++) {
        for(let j = i + 1; j < d; j++) {
            if(ints[i] + ints[j] == s) {
                temp.push([[ints[i], ints[j]], i, j])
            }
        }
    }
    if(!temp[1]){
        return temp.length?temp[0][0]:undefined;
    }
    else {
     let result = [temp[0]];
       for(let i = 1, j = temp.length; i < j; i++) {
            if(temp[i][2] < result[0][2]){
                result = temp[i];
            }
       }

      return result[0][0].length?result[0][0]:result[0];
    }
}

l1= [10, 5, 2, 3, 7, 5];
l2 = [1,2,3,4,1,0];

let a = sum_pairs([10,5,2,3,7,5] , 10);
console.log(a);
