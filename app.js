// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

const TxtInput = document.getElementById("text");
const btn = document.getElementById("generate");
const img = document.getElementById("QRCode");

function generateQRCode() {
  const input = TxtInput.value.trim();
  if (input === "") {
    alert("Please enter some text to generate a QR code.");
    return;
  }
  img.setAttribute(
    "src",
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      TxtInput.value
  );

  img.addEventListener("load", function () {
  if (img.src.includes("create-qr-code")) {
    img.classList.add("active");
  }
});
}

btn.addEventListener("click", generateQRCode);
