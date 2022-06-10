////////////////////////////////////////////////1- Callback approach./////////////////////////////////////////
// //Get Customer Info
function GetCustomer(email, callback) {
    console.log("Reading From Customer......")
    setTimeout(() => {
        callback({
            Id: 1,
            Name: "Ali",
            Email: "ali@gmail.com"
        })
    }, 3000);
}

function GetCustomerOrders(id, callback) {
    console.log("Reading From Customer Orders......")
    setTimeout(() => {
        callback({
            order: "mobile",
            customerId: 1,
            creationDate: "2022-02-02"
        })
    }, 3000);


}

//1...Callback
GetCustomer("ali@gmail.com", function(Customer) {
    console.log("Customer..", Customer)
    GetCustomerOrders(Customer.Id, function(order) {
        console.log("Order..", order)
    })
})