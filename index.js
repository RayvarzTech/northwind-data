import Order from "./Order";
import OrderDetail from "./OrderDetail";
import Product from "./Product";
import Category from "./Category";
import Shipper from "./Shipper";
import Supplier from "./Supplier";
import Customer from "./Customer";

var northwind = {
  Orders: Order,
  OrderDetails: OrderDetail,
  Products: Product,
  Categories: Category,
  Shippers: Shipper,
  Suppliers: Supplier,
  Customers: Customer,
};

northwind.linkOrderDetails = function() {
  northwind.OrderDetails.forEach(function(od) {
    var order = northwind.Orders.find(o => od.OrderId === o.Id);
    if (!order.Details)
      order.Details = [];
    order.Details.push(od);
  });
}

export default northwind;
