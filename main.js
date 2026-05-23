import { program } from 'commander';
import { sendP2Pfile } from './send-file.js';

// [x]: move send and receive to commands (https://www.npmjs.com/package/commander#commands) CLI interface instead of options
program
  .name('pft')
  .usage('[command] parameters')
  .description('Pear File Transfer. A CLI application to transfer files between peers with Pear js library')
  .version('0.0.1 (2026May23)');

program
  .command('send <path-to-file>')
  .description('Create p2p sender for the file. Once receiver is connected (using generated seed) - send the file.')

program
  .command('receive <sender-hash>')
  .description('Create p2p received for the file and connect to the specified hash.')

program.parse();

const options = program.opts();
console.log('Options:', options);
console.log('Arguments:', program.args);

if(program.args[0] == 'send') {
    console.log('Will send file :>> ', program.args[1]);
    sendP2Pfile(program.args[1])
} else {
    // TODO: implement receiver
    console.log('Will receive from hash :>> ', program.args[1]);
}

// node main.js send ./qwe1.txt
// node main.js receive 1231213j