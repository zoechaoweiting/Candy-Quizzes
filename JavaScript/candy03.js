// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面
// 範例：

let list = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

// 程式碼寫在這裡
function moveZerosToEnd(arr) {
  let newList = arr.filter((value) => {
    return value !== 0;
  });
  let zeroList = arr.filter((zero) => {
    return zero === 0;
  });
  newList.concat(zeroList);
}

let result = moveZerosToEnd(list);
console.log(result); // [false,1,1,2,1,3,"a",0,0]
