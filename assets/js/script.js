const input = document.querySelector('input');
const buttonNN = document.querySelector('.btn-nn');
const buttonN24 = document.querySelector('.btn-n24');
const copy = document.querySelector('.btn-copy');

const output = document.querySelector('p');


const nnHandler = () => {
    if (!input.value) {
        output.textContent = "to pole nie może byc puste"
        output.style.color = "red";
    }
    else if (!input.value.includes("172.17.3.86")) {
        output.textContent = "błędny link"
        output.style.color = "red";
    }
    else {
        linkNNCreator()
    }
}
const n24Handler = () => {
    if (!input.value) {
        output.textContent = "to pole nie może byc puste"
        output.style.color = "red";
    }
    else if (!input.value.includes("172.17.3.86")) {
        output.textContent = "błędny link"
        output.style.color = "red";
    }
    else {
        linkN24Creator()
    }
}
linkNNCreator = () => {
    let nowyUrl = input.value.replace(/.*86\//, 'https://www.neonet.pl/images24/promocje/');
    output.textContent = nowyUrl
    output.style.color = "black";
    copy.style.display = "block"
}
linkN24Creator = () => {
    let nowyUrl = input.value.replace(/.*86\//, 'https://www.neo24.pl/images24/promocje/');
    output.textContent = nowyUrl
    output.style.color = "black";
    copy.style.display = "block"
}
copyHandler = () => {
    const textToCopy = output.textContent;

    // Tworzymy obiekt ClipboardItem z tekstem
    const clipboardItem = new ClipboardItem({ "text/plain": new Blob([textToCopy], { type: "text/plain" }) });
    
    // Kopiujemy obiekt ClipboardItem do schowka
    navigator.clipboard.write([clipboardItem]).then(() => {
      console.log('Skopiowano tekst do schowka.');
      input.value = ''
      output.textContent = "Skopiowano tekst do schowka."
      copy.style.display = "none"
    }).catch((err) => {
      console.error('Nie udało się skopiować tekstu: ', err);
      output.textContent = "Nie udało się skopiować tekstu."
    });
    
}

buttonNN.addEventListener('click', nnHandler);
buttonN24.addEventListener('click', n24Handler);
copy.addEventListener('click', copyHandler);