
let color;
let schemeMode;
let cleanColor;
let colorCombo = []

document.getElementById("chosen-color").addEventListener("input", function(e){
    e.preventDefault()
    color = this.value;
    cleanColor = color.slice(1)

    // console.log(cleanColor)
   
    
    // fetch(`https://www.thecolorapi.com/id?hex=${cleanColor}`)
    //     .then(request => request.json())
    //     .then(data => {
    //         console.log(data)
            


            
    //     //    document.getElementById("display-color").innerHTML = data.name.value
    //     })

    
})

document.getElementById("selector").addEventListener("input", selectorFunction)

function selectorFunction(e){
    e.preventDefault()
    // colorCombo = []
    schemeMode = e.target.value
    // fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${schemeMode}`)
    // .then(request => request.json())
    // .then(data => {
    //     // let html = ""
    //     for(let i = 0; i < data.colors.length; i++){
    //             colorCombo.push(data.colors[i].hex.value)
    //             console.log(colorCombo)
    //     } 
    // })

}


document.getElementById("color-scheme").addEventListener("click", function(e){
    e.preventDefault()
    // fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${schemeMode}`)
    //     .then(request => request.json())
    //     .then(data => {

        colorCombo = []
    
        fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&mode=${schemeMode}`)
        .then(request => request.json())
        .then(data => {
            // let html = ""
            for(let i = 0; i < data.colors.length; i++){
                    colorCombo.push(data.colors[i].hex.value)
                    console.log(colorCombo)
            } 

            let html = ""
            for(let i = 0; i < colorCombo.length; i++){
                    html += `
                    <div>
                    <div class="color" style="background-color: ${colorCombo[i]}"></div>
                    <p> ${colorCombo[i]} </p>
                    </div>
                   
                    `
            }
                document.getElementById("display-color").innerHTML = html
        })
    
        

        
})