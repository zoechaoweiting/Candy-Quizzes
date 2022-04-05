// # 程式語言：JavaScript

// # 題目：寫一小段程式，印出陣列裡缺的字

// # 範例：

// ["a", "b", "c", "d", "f", "g"] 印出 e
// ["O","Q","R","S"] 印出 P

// # 提示：
// https://ubin.io/9vJf2w

const abclist = ["O", "Q", "R", "S"];
for (let i = 0; i < abclist.length - 1; i++) {
  if (
    abclist[i + 1].charCodeAt(abclist[i + 1]) -
      abclist[i].charCodeAt(abclist[i]) >
    1
  ) {
    let result = abclist[i].charCodeAt(abclist[i]) + 1;
    console.log(String.fromCharCode(result));
  }
}
