
function init() {
    render();
}

function render() {
    const button = document.getElementById('test_button');
    button?.addEventListener('click', () => {
        colorChange();
    })
}

function colorChange() {
    document.getElementById('title').style.color = 'purple';
}

init();