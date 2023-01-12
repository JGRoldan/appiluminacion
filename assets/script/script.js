const container = document.querySelector('.container')
let arrCalculos = []
const inputs = document.querySelectorAll('.inputs')

// const sector = document.querySelector('.sector').textContent
inputs.forEach((elem,index)=>{
    elem.addEventListener('input',e=>{
        arrCalculos[index] = e.target.value
        if(arrCalculos.length==3){
            calculateIndex(arrCalculos)    
        }
    })
})


//Calcular el indice del local y numero de puntos de medicion
const calculateIndex = valores =>{
    
    let largo = parseFloat(valores[0]),
    ancho = parseFloat(valores[1]),
    altoLuces = parseFloat(valores[2])
    
    let indiceLocal = Math.round((largo*ancho)/(altoLuces*(largo+ancho)))
    if(indiceLocal>2) indiceLocal = 2;
    let puntosDeMedicion = Math.pow(3+indiceLocal,2)
    generateGrid(puntosDeMedicion)
    getGrid()
}

//Generar el grid con los puntos de medicion
const generateGrid = cantidadPuntos =>{
    let grid = cantidadPuntos;
    
    container.style.display = "grid"
    container.style.gap = "5px"
    container.style.justifyContent = "center"
    
    if(grid==9){
        container.style.gridTemplateColumns = "repeat(3, minmax(20px,80px))"
        container.style.gridTemplateRows = "repeat(3, minmax(20px,80px))"
    }
    if(grid==16){
        container.style.gridTemplateColumns = "repeat(4, minmax(20px,80px))"
        container.style.gridTemplateRows = "repeat(4, minmax(20px,80px))"
    }
    if(grid==25){
        container.style.gridTemplateColumns = "repeat(5, minmax(20px,80px))"
        container.style.gridTemplateRows = "repeat(5, minmax(20px,80px))"  
    }
    container.innerHTML = ``
    for(let i=0; i<grid;i++){
        container.innerHTML += `<input type="number" min="0" class="item" placeholder="LUX" >`
    }
}


//Obtiene los numeros de la grid
const getGrid = ()=>{
    const calcular = document.getElementById('calcular')
    const item = document.querySelectorAll('.item')
    let arr=[];
    
    calcular.addEventListener('click', (e)=>{
        e.stopPropagation()
        item.forEach((elem, index) => {
            arr[index] = Number(elem.value)
        })
        calculate(arr)
    })
}

//Calcular media, Emedia, Emedia/2
const calculate = array =>{
    const min = Math.min(...array)
    const sumatoria = array.reduce((a, b)=>{
        return a + b //Regresa el acumulador más el siguiente
    }, 0) //Pero si no encuentras nada o no hay siguiente, regresa 0
    const media = Math.round(sumatoria / array.length)
    const Emedia = Math.round(media/2)
    
    const $media = document.querySelector('.media') 
    const $minima = document.querySelector('.minima') 
    const $mediasobredos = document.querySelector('.mediasobredos') 
    $media.textContent = media;
    $minima.textContent = min;
    $mediasobredos.textContent = Emedia;
    
}

