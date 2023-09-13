const convertbutton = document.querySelector("#convert");
const currencyselect = document.querySelector(".currency-select");



function convertvalues() {
    const inputconverterde = document.querySelector(".converter-de").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // converter de
    const currencyvalueconverted = document.querySelector(".currency-value") // converter para

    console.log(currencyselect.value)
    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 1.92

    if(currencyselect.value == "dolar"){
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(inputconverterde / dolartoday ) 
    }

    if(currencyselect.value == "euro"){
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(inputconverterde / eurotoday )
    }

    if(currencyselect.value == "libra"){
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(inputconverterde / libratoday )
    }

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"
    }).format(inputconverterde)

    

}


function changecurrancy() {
    const currencyname = document.getElementById("currency-name")
    const currencyimg = document.querySelector(".currency-img")
    const currencytext = document.getElementById("currency-text")

    if(currencyselect.value == "dolar") {
        currencyname.innerHTML = "Dólar Americano" 
        currencyimg.src = "./Assets/dolar.png"
    }

    if(currencyselect.value == "euro") {
        currencyname.innerHTML = "Euro"     
        currencyimg.src = "./Assets/euro.png"
    }

    if(currencyselect.value == "libra") {
        currencyname.innerHTML = "Libra"     
        currencyimg.src = "./Assets/libra.png"
    }

    convertvalues()
}


currencyselect.addEventListener("change", changecurrancy)
convertbutton.addEventListener("click", convertvalues)