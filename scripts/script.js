const buttonQrCode = document.querySelector("#button-qr");
buttonQrCode.addEventListener("click",()=>{
  generateQrCode();
})
async function generateQrCode() {
  const containerQr = document.querySelector(".qr_code_img");
  containerQr.textContent = ''

  const url = document.querySelector("#input-qr").value;
  let imgHtml;
  let imgBlob;
  if(!url){
    return
  }
   try {
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`)
    if(!response.ok){
      throw new Error(response.statusText);
      
    }
    imgHtml = document.createElement("img");
    imgBlob = await response.blob()
    imgHtml.src = URL.createObjectURL(imgBlob);
    imgHtml.onload =() =>{
      containerQr.appendChild(imgHtml);
      containerQr.classList.add("active");
      buttonQrCode.textContent ='Codigo gerado'
      
    }
    
  
    
   } catch (error) {
    console.log(error)
   }
}
