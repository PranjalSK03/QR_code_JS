
let qrContentInput = document.getElementById("qr-content");
let qrGenerationForm = document.getElementById("qr-generation-form");
let qrCode;
const generateBtn = document.getElementById("generateQR");
const wrapper = document.querySelector(".wrapper");

function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: 170,
        height: 170,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}

var someimage;
var myimg;

var prevQrContent;
qrGenerationForm.addEventListener("submit", function (event) {
    // Prevent form submission
    event.preventDefault();
    let qrContent = qrContentInput.value;

    if(qrContent != null && qrContent != "") {
        if (qrCode == null) {
            //generateBtn.innerText = "Generating QR Code...";
            wrapper.classList.add("active");
            qrCode = generateQrCode(qrContent);
            //generateBtn.innerText = "Generate QR Code";
        } 
        else {
            // If code already generated then again using same object
            qrCode.makeCode(qrContent);
        }
        
        someimage = document.getElementById('qr-code');
        myimg = someimage.getElementsByTagName('img');
        console.log(myimg);
       
    } 
});



let downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', function() {
    const imageUrl = myimg[0].src;
    downloadImage(imageUrl);
});


function downloadImage(path) {
    const a = document.createElement("a");
    a.href = path;
    a.download = "QR";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}