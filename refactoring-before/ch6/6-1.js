export function printOwing(invoice) {
  printCustomerOwes()
  const outstanding = getOutstanding(invoice)
  invoice.dueDate = getInvoiceDueDate()
  printDetail(invoice, outstanding)
}

const printCustomerOwes = () => {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

const getOutstanding = (invoice) => invoice.orders.reduce((acc, cur) => acc + cur.amount, 0)


const getInvoiceDueDate = () => {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

const printDetail = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);
