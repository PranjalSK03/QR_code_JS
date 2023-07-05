const scanner = new Html5QrcodeScanner('reader', {
    qrbox: {
        width: 100,
        height: 100,
    },
    fps: 30,
});


scanner.render(success, error);

function success(result) {
    document.getElementById('result').classList.add("active");
    document.getElementById('result').innerHTML = `
        <h2 class="status">The content was successfully detected!</h2>
        <p class="content">${result}</p>
    `;
    scanner.clear();
    document.getElementById('reader').remove();
}
function error(err) {
    console.error(err);
}

document.getElementById("reader").firstChild.style.display = "none";

