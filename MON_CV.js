const close = document.getElementById('close')
const terminal = document.getElementById('all')
const app = document.querySelector('#app')


app?.addEventListener('click', () => {
    terminal.style.display = 'block';
    app.style.display = 'none'
});

close?.addEventListener('click', () => {
    terminal.style.display = 'none';
    app.style.display = 'block'
});

let scroll = document.querySelector("#scroll");
var console_height = document.getElementById('console_log');

scroll?.addEventListener('scroll', (event) => {
    var console_height = parseInt(document.getElementById('console_log').clientHeight)
    let scroll = document.querySelector("#scroll").scrollTop;
    
    var drag = document.querySelector("#drag").style.top = scroll / console_height  * 100 + '%';
    console.log(`${scroll} / ${console_height} * 100 = ${drag}`)
});