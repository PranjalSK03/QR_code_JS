


function success(result) {
    document.getElementById('result').classList.add("active");
    
    document.getElementById('result').innerHTML = `
        <h2 class="status">The content was successfully detected!</h2>
        <p class="content">${result}</p>
    `;
    document.getElementById('reader').remove();
    scanner.clear();
    
}
function error(err) {
    console.error(err);
}


const scanner = new Html5QrcodeScanner('reader', {
    qrbox: 250,
    fps: 30,
});
scanner.render(success, error);

document.getElementById("reader").firstChild.style.display = "none";





// var resultContainer = document.getElementById('result');
// var lastResult, countResults = 0;

// function onScanSuccess(decodedText, decodedResult) {
//     if (decodedText !== lastResult) {
//         ++countResults;
//         lastResult = decodedText;
//         // Handle on success condition with the decoded message.
//         document.getElementById('result').classList.add("active");
        
//         document.getElementById('result').innerHTML = `
//             <h2 class="status">The content was successfully detected!</h2>
//             <p class="content">${decodedText}</p>
//         `;
//         console.log(`Scan result ${decodedText}`, decodedResult);
//         document.getElementById('reader').remove();
//         scanner.clear();
        
//     }
// }

// function error(err) {
//     console.error(err);
// }

// var html5QrcodeScanner = new Html5QrcodeScanner(
//     "reader", { fps: 10, qrbox: 250 });
// html5QrcodeScanner.render(onScanSuccess, error);

// document.getElementById("reader").firstChild.style.display = "none";



