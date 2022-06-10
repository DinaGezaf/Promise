/////////////////////////////////////////////////3...Async/Await///////////////////////////////

function GetCustomer(Email) {
    console.log("Reading From Customer ......")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                Id: 1,
                Name: "Ali",
                Email: "ali@gmail.com"
            })
        }, 3000)
    })
}

function GetCustomerOrders(customerId) {
    console.log("Reading From Customer Orders......")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                order: "mobile",
                customerId: 1,
                creationDate: "2022-02-02"
            })
        }, 3000);
        // console.log(resolve())
    })
}
async function test() {
    let customer = await GetCustomer("ali@gmail.com");
    console.log("Customer..", customer)
    let order = await GetCustomerOrders(customer.Id)
    console.log("Order..", order);
}
test()