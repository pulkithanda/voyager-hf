const container = document.getElementById('.elementID'); 
if(window.innerWidth < 999){
    container.innterHTML = '';
    container.innterHTML = `<p>New Text</p>`;
  }