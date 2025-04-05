
import { yarg } from './config/plugins/args.plugin';

// console.log(process.argv);

// const [tsnode, app, ...args] = process.argv;
// console.log(args);

// console.log(yarg);

(async() => {
    await main();
})();

async function main (){
    console.log(yarg);
}