import { Client, Contract, Order } from '../index.js';



async function run() {
  let api = new Client();

  await api.connect({
    host: '127.0.0.1',
    port: 4001,
    log_info: console.log,
    log_debug: console.log,
    log_debug_bytes: console.log
  })

  let positions = await api.getPositions();
  console.log('Positions');
  console.log(positions);
}



run()
  .then(() => {
    console.log('finish');
    process.exit();
  })
  .catch((e) => {
    console.log('failure');
    console.log(e);
    process.exit();
  });
