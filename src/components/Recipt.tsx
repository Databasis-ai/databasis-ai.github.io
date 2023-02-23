import React from 'react';

interface ReceiptProps {
  items: { name: string; price: number }[];
  tax: number;
}

const Receipt: React.FC<ReceiptProps> = ({ items, tax }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);
  const taxAmount = total * (tax / 100);
  const grandTotal = total + taxAmount;

  return (
    <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 font-bold text-lg">Cap Rate</div>
      <div className="p-4">
        <ul>
          {items.map((item) => (
            <li key={item.name} className="flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Property Tax({tax}%)</span>
          <span>County Tax({tax}%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold mt-4">
          <span>Cap Rate / Yield</span>
          <span>3.4%</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
