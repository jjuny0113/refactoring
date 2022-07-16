import fs from 'fs';
//1.run 함수를 만들어서 노드의 process 디펜던시 제거함
//2.사용자에게 입력을 받아옴 -> 유효성 검사
const run = (args) => {
  const command = parseCommand(args)




  const rawData = fs.readFileSync(command.fileName);
  const orders = JSON.parse(rawData);
  if (command.countReadyOnly) {
    console.log(orders.filter((order) => order.status === 'ready').length);
  } else {
    console.log(orders.length);
  }
}

const parseCommand = (args) => {

  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }
  const countReadyOnly = args.includes('-r')
  return {
    fileName,
    countReadyOnly
  }
}


run(process.argv)


