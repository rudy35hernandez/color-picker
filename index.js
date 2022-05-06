
let color;
let schemeMode;
let cleanColor;
let colorCombo = []

document.getElementById("chosen-color").addEventListener("input", function(e){
    e.preventDefault()

    color = this.value;
    cleanColor = color.slice(1)

    console.log(cleanColor)
   
    
    fetch(`https://www.thecolorapi.com/id?hex=${cleanColor}`)
        .then(request => request.json())
        .then(data => {
            console.log(data)
            


            
        //    document.getElementById("display-color").innerHTML = data.name.value
        })


    
})

document.getElementById("selector").addEventListener("input", function(e){

    schemeMode = e.target.value
    alert(schemeMode)

})

document.getElementById("color-scheme").addEventListener("click", function(){
    let selectedColor
    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${schemeMode}`)
        .then(request => request.json())
        .then(data => {
            let html = ""
            for(let i = 0; i < data.colors.length; i++){
                    selectedColor = data.colors[i].hex.value
                    html += `
                    <div class="color"> 
                    <p> ${selectedColor}
                    </div>
                    `
                }
            document.querySelector('.color').style.backgroundColor = "#550355"
            document.getElementById("display-color").innerHTML = html
        })
        
})