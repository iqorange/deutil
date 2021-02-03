import Stack from './util/Stack.ts'
import Scanner from './util/Scanner.ts'

let stack1: Stack<number> = new Stack<number>();
stack1.push(2);
stack1.push(1);
stack1.push(3);
stack1.pop();
stack1.println();
let sca = new Scanner();
console.log(Deno.args);