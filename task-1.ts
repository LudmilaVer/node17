

function calculateTotal(
    price: number,
    quantity: number,
    discount: number = 0
  ): number {
    const total = price * quantity - discount;
    return total < 0 ? 0 : total; 
  }
  
  const totalCost = calculateTotal(80, 40, 170);
  console.log(`Общая стоимость: ${totalCost}`);