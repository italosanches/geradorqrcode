const buttonQrCode = document.querySelector("#button-qr");
buttonQrCode.addEventListener("click", () => {
	generateQrCode();
});
document.querySelector("#input-qr").addEventListener("keyup", (event) => {
	event.preventDefault();
	if (event.keyCode == 13) {
		generateQrCode();
	}
});
async function generateQrCode() {
	const containerQr = document.querySelector(".qr_code_img");
	containerQr.textContent = "";

	const url = document.querySelector("#input-qr").value;

	if (!url) {
		return;
	}
	try {
		const response = await fetch(
			`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
		);
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const imgHtml = document.createElement("img");
		const imgBlob = await response.blob();
		imgHtml.src = URL.createObjectURL(imgBlob);
		imgHtml.onload = () => {
			containerQr.classList.remove("hidden");
			containerQr.appendChild(imgHtml);
			buttonQrCode.textContent = "Codigo gerado";
		};
	} catch (error) {
		console.log(error);
	}
}
