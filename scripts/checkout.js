function confirm() {
    alert("Your order is accepted ")
    setTimeout(function() {
        alert("Your order is being Prepared  ")
    }, 3000)
    setTimeout(function() {
        alert("Your order is being packed  ")
    }, 11000)
    setTimeout(function() {
        alert("Your order is out for delivery ")
    }, 21000)
    setTimeout(function() {
        alert("Order delivered ")
    }, 33000)

}