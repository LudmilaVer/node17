type ProductInfo = [string, number, number]; 

const productInfo: ProductInfo = ["Latte", 100, 2];

function updateStock(
  inventory: { [key: string]: number },
  productInfo: ProductInfo
): { [key: string]: number } {
  const [productName, price, quantity] = productInfo;
  inventory[productName] = (inventory[productName] || 0) + quantity; 
  return inventory;
}

let inventory: { [key: string]: number } = { Latte: 2 };
inventory = updateStock(inventory, productInfo);
console.log(inventory);