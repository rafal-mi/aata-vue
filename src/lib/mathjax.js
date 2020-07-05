const mathJax = () => {
    if (!window.MathJax) {
        console.log(`Will reassume in next timeout`);
        setTimeout(() => {
            mathJax();
        }, 100);
        return;
    }
    console.log(`Assuming in this timeout`);
    window.MathJax.typesetPromise();
}

export {
    mathJax
}
