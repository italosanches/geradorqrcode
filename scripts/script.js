const button = document.querySelector("#button-qr");
button.addEventListener("click", async function () {
  let containerQr = document.querySelector(".qr_code_img");
  var url = document.querySelector("#input-qr").value;
  if (url) {
    while (containerQr.firstChild) {
      containerQr.removeChild(containerQr.firstChild);
    }
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`
    )
      .then((response) => response.blob())
      .then((imgblob) => {
        const imgHtml = document.createElement("img");
        const imgUlr = URL.createObjectURL(imgblob);
        imgHtml.src = imgUlr;
        containerQr.appendChild(imgHtml);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
  }
  // try {
  //   const response = await fetch(
  //
  //   );
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   const result = await response.blob();
  //   console.log(result);
  // } catch (error) {
  //   console.log(error.message);
  // }
});
