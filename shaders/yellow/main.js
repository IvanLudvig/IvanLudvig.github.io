window.onload = () => {
    const code = document.getElementById('code');
    const canvas = new GlslCanvas(document.getElementById('glsl-canvas'));
    const codeContainer = document.getElementById('code-container');

    const file = new XMLHttpRequest();
    file.open('GET', './yellow.glsl');
    file.onreadystatechange = function () {
        code.innerText = file.responseText;
        canvas.load(file.responseText);
    };
    file.send();

    const toggleVisibility = element => {
        const isVisible = element.style.visibility === 'visible';
        element.style.visibility = isVisible ? 'hidden' : 'visible';
    };

    document.getElementById('pre-code').oninput = e => {
        canvas.load(e.target.textContent);
        resetCodeBtn.style.visibility = 'visible';
    };

    document.getElementById('view-code-button').onclick = () => {
        toggleVisibility(codeContainer)
    };

    document.getElementById('reset-code-button').onclick = () => {
        code.innerText = file.responseText;
        canvas.load(file.responseText);
        toggleVisibility(resetCodeBtn);
    };
}
