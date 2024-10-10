interface Order {
    orderId: string;
    amount: number;
    status: 'pending' | 'shipped' | 'delivered';
  }
  
  const orders: Order[] = [
    { orderId: 'a', amount: 10, status: 'pending' },
    { orderId: 'b', amount: 20, status: 'shipped' },
    { orderId: 'c', amount: 30, status: 'delivered' },
    { orderId: 'd', amount: 40, status: 'pending' }
  ];
  
  function filterOrdersByStatus(orders: Order[], status: 'pending' | 'shipped' | 'delivered'): Order[] {
    return orders.filter(order => order.status === status);
  }
  
  const pendingOrders = filterOrdersByStatus(orders, 'pending');
  console.log(pendingOrders);