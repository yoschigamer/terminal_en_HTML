const progressBar = document.querySelector('.draggable')

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window?.addEventListener('scroll', () => {
    let progress = (document.documentElement.scrollTop / totalHeight) * 100;
    progressBar.style.top = `${progress}%`
    console.log(progress)
})

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


