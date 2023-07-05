// const wrapper = document.querySelector(".wrapper"),
// qrInput = wrapper.querySelector(".form input"),
// generateBtn = wrapper.querySelector(".form button");
// // qrImg = wrapper.querySelector(".qr-code img");

// let preValue;
// let qrImg;

// generateBtn.addEventListener("click", () => {
//     let qrValue = qrInput.value.trim();
//     if(!qrValue || preValue === qrValue) return;
//     preValue = qrValue;
//     generateBtn.innerText = "Generating QR Code...";
//     qrImg = generateQrCode(qrValue);
//     // qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
//     // qrImg.addEventListener("load", () => {
//     //     wrapper.classList.add("active");
//     //     generateBtn.innerText = "Generate QR Code";
//     // });

//     // var downloadButton = document.getElementById('downloadButton');
//     // downloadButton.addEventListener('click', function() {
//     //     var imageUrl = qrImg.src;
//     //     downloadImage(imageUrl);
//     // });
// });

// qrInput.addEventListener("keyup", () => {
//     if(!qrInput.value.trim()) {
//         wrapper.classList.remove("active");
//         preValue = "";
//     }
// });

// function downloadImage(imageUrl) {
    
//     var link = document.createElement('a');
//     link.href = imageUrl;
//     link.download = 'image.jpg';
    
//     document.body.appendChild(link);
    
//     link.click();
    
//     document.body.removeChild(link);
// }

// function generateQrCode(qrContent) {
//     return new QRCode("qr-code", {
//       text: qrContent,
//       width: 170,
//       height: 170,
//       colorDark: "#000000",
//       colorLight: "#ffffff",
//       correctLevel: QRCode.CorrectLevel.H,
//     });
//   }



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
        

       
    } 
});

var someimage = document.getElementById('qr-code');
var myimg = someimage.getElementsByTagName('img');
console.log(myimg);
if(myimg != null){
    var mysrc = myimg[0].src;

    console.log(myimg.src);

    var downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', function() {
        var imageUrl = mysrc;
        downloadImage(imageUrl);
    });
}


function downloadImage(path) {
    const a = document.createElement("a");
    a.href = path;
    alert(a.href);
    a.download = "QR";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}