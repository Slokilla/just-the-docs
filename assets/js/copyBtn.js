function copy(elem, btn) {
    let r = document.createRange();
    r.selectNode(elem);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    btn.innerText = document.documentElement.lang === 'fr' ? "Copié !" : "Copied!";
    setTimeout(() => { btn.innerText = document.documentElement.lang === 'fr' ? "Copier" : "Copy" }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div.highlight').forEach(elem => {
        const copyBtn = document.createElement('button');
        copyBtn.addEventListener('click', () => copy(elem, copyBtn));
        copyBtn.classList.add('copyBtn');
        copyBtn.innerText = document.documentElement.lang === 'fr' ? "Copier" : "Copy";
        elem.parentNode.insertBefore(copyBtn, elem);
    });
});
