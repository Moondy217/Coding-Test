const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line); // 각 줄의 입력을 배열에 저장
});

rl.on('close', () => {
    // 입력받은 값을 숫자로 변환하여 합계 계산
    const num1 = parseInt(input[0]); // 첫 번째 숫자
    const num2 = parseInt(input[1]); // 두 번째 숫자

    console.log(num1 + num2); // 두 숫자의 합 출력
    process.exit();
});
