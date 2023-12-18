const order = {
    customer:{
        name: "ruben",
        pais: "españa",
        address:{
            // city: "madrid",
            calle: "manzanos",
            piso: 8,
        }
    }
};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

if (!order?.customer?.address?.city) {
    console.log('City is required');
}