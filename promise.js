/////////////////////////////////////////////////2...Promise/////////////////////////////////////////////////

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
    })
}
GetCustomer("ali@gmail.com")
    .then((customer) => GetCustomerOrders(customer.id))
    .then(order => console.log(order))
    .catch(error => console.log(error))

// // Promise.all([
// //         GetCustomer("ali@gmail.com"),
// //         GetCustomerOrders(1)
// //     ]).then((responses) => console.log(responses))
// //     .catch(error => console.log(error))