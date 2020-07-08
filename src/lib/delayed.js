import { mathJax } from './mathjax'
const prettyPrint = require('code-prettify');

const runDelayed = () => {
    mathJax();
    setTimeout(() => {
      console.log(`Pretty printing`);
      prettyPrint.prettyPrint();

    }, 1000);

}

export {
    runDelayed
}
