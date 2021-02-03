# Deutil
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

 Make deno easy to use data structure library just like Java.util.  

This project is under development :)   
This project is as close as possible to the usage habits of Java.util, but will solve and develop some historical problems of Java in combination with the related features of typescript and deno, and move towards the best user experience.   
 You can try and provide suggestions or help development, but don't use it in a production environment at this stage.  


## Install
```
import Stack from 'https://deno.land/x/deutil/util/Stack.ts'
```

## Usage
```
let stack1: Stack<number> = new Stack<number>();
stack1.push(2);
stack1.push(3);
stack1.pop();
stack1.println();
```

## License

MIT © LiBoran