$(document).ready(function(){
      
    $('#generatePDF').click(function(){
      $(".modal").attr("style", "display:flex");
      setTimeout(function(){ $(".modal").attr("style", "display:none"); }, 1500);
      $('#contenidoImprimir').printThis();
    })
})

//Doesn't work in ANDROID because it doesn't have a print() native method 

// const button = document.getElementById("generatePDF");

// button.addEventListener("click", e=> {
//     e.stopPropagation()
//     const hide = document.querySelector(".botones");
//     hide.style.display='none'
//     const pantalla = document.querySelector(".modal");
//     pantalla.style.display='flex'
//     setTimeout(() => {
//         pantalla.style.display='none'
//     }, 1500);
    
//     setTimeout(() => {
//         document.getElementById('body').style.background = 'none'
//         window.print()
//         window.location.reload()
//     },1800);
// });
