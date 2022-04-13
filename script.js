// ---------------- Created By InCoder ----------------
let passwordDisplay = document.querySelector('#passwordDisplay')
let copyToClipboardBtn = document.querySelector('#copyToClipboardBtn')

passwordDisplay.addEventListener('mousemove', (e) => {
    resultContainerBound = {
        left: passwordDisplay.getBoundingClientRect().left,
        top: passwordDisplay.getBoundingClientRect().top,
    };
    copyToClipboardBtn.style.opacity = '1';
    copyToClipboardBtn.style.pointerEvents = 'all';
    passwordDisplay.classList.add('copyBtnShow')
    copyToClipboardBtn.style.setProperty("--X", `${e.x - resultContainerBound.left}px`);
    copyToClipboardBtn.style.setProperty("--Y", `${e.y - resultContainerBound.top}px`);
})

passwordDisplay.addEventListener('mouseleave', (e) => {
    setTimeout(() => {
        copyToClipboardBtn.style.opacity = '0';
        copyToClipboardBtn.style.pointerEvents = 'none';
        copyToClipboardBtn.style.setProperty("--X", '0');
        copyToClipboardBtn.style.setProperty("--Y", '0');
    }, 300)
    passwordDisplay.classList.remove('copyBtnShow')
})