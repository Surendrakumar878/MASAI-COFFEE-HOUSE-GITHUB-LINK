// Add the coffee to local storage with key "coffee"
let coffeediv = document.getElementById("menu")
let i = 1
let cartLSData = JSON.parse(localStorage.getItem("coffee_count")) || []
async function main() {
    let res = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
    let data = await res.json()
    console.log(data.menu.data)
    append(data.menu.data)
        // localStorage.setItem('coffee', JSON.Stringfy(data.menu.data))
    localStorage.setItem("coffee", JSON.stringify(data.menu.data))
}
main()

function append(coffee) {
    coffee.forEach((el) => {
        let coffeediv1 = document.createElement("div")
        let img = document.createElement("img")
        let p1 = document.createElement("p")
        p1.innerHTML = el.title
        let p2 = document.createElement("p")
        p2.innerHTML = el.price
        let p3 = document.createElement("button")
        p3.innerHTML = "ADD"
        p3.addEventListener('click', function() {
            AddToCart(el);
        })
        img.src = el.image
        console.log(el.title)
        coffeediv1.append(img, p1, p2, p3)
        coffeediv.append(coffeediv1)
    })
}

function AddToCart(element) {
    cartLSData.push(element);
    document.getElementById("coffee_count").innerHTML = i++
        localStorage.setItem("coffee_count", JSON.stringify(cartLSData))
        // alert(" addded to successfully")
}