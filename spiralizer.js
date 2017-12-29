let  array_masalah = [
	[1,2,3,4],
	[5,6,7,8],
	[9, 10, 11, 12],
	[13, 14, 15,16],
];

// let  array_masalah = [
// 	[1, 2, 3, 4, 5],
// 	[6, 7, 8, 9, 10],
// 	[11, 12, 13, 14, 15],
// 	[16, 17, 18, 19, 20],
// ]

var result = [];
function polaSpiral(array_masalah) {
  if(array_masalah.length === 0) {
    return result
  } else {
    result = result.concat(array_masalah.shift())

    for(let i = 0; i < array_masalah.length; i++) {
      result.push(array_masalah[i].pop())
    }

    result = result.concat(array_masalah.pop().reverse())

    let resultTemp = []
    for(let j = 0; j < array_masalah.length; j++) {
      resultTemp.push(array_masalah[j].shift());
    }

    result = result.concat(resultTemp.reverse())

    return polaSpiral(array_masalah)
  }
}

console.log(polaSpiral(array_masalah));
// output yang diharapakan => [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
