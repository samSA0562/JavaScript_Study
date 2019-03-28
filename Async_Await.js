if (process.argv.length < 3) { console.log('請選擇要進行同步(0)或者是異步(1).'); return; }
const key = process.argv[2];

if (key && key==1) {
  asyncProcess().then(
    response => {
      console.log(response);
    }
  ).catch(
    error => {
      console.log(error);
    }
  );
} else {
  syncProcess();
}

function async (value, time) {
  if (!time) time = Math.floor(Math.random() * 2000);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`執行 : ${value}, 耗時 ${time} ms`)
        if (value)
          resolve(value);
        else
          reject('無名稱');
      }, time);
  })
}
async function asyncProcess() {
  console.log("Async function");

  let taskA = await async('A');
  let taskB = await async('B');
  let taskC = await async('C');

  return [taskA,taskB,taskC];
}
function syncProcess() {
  console.log("Sync function");
  let taskA = async('A');
  let taskB = async('B');
  let taskC = async('C');
  Promise.all([
    taskA, taskB, taskC
  ]).then(
    response => {
      console.log(response);
    }
  ).catch(
    error => {
      console.log(error);
    }
  );
}