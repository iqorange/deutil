import Stack from './util/Stack.ts'

let stack1 = new Stack<number>();
stack1.push(2);
stack1.push(1);
stack1.push(3);
stack1.pop();
stack1.println();