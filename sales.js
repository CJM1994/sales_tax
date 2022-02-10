const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateCompanySalesData = function(taxRate, salesData) {

  let totalTaxes = 0;
  let totalSales = 0;

  for (const sales of salesData) {
    totalTaxes += (sales * taxRate);
    totalSales += sales;
  }

  return { 'totalTaxes': totalTaxes, 'totalSales': totalSales };

};

const assignCalculatedSalesData = function(salesTaxRates, companySalesData) {

  const processedSalesData = {};

  for (const company in companySalesData) {
    let companyName = companySalesData[company]['name'];
    let taxRate = salesTaxRates[companySalesData[company]['province']];
    let salesData = companySalesData[company]['sales'];

    if (!processedSalesData[companyName]) {
      processedSalesData[companyName] = calculateCompanySalesData(taxRate, salesData);
    } else {
      let addition = calculateCompanySalesData(taxRate, salesData);
      processedSalesData[companyName]['totalTaxes'] += addition['totalTaxes'];
      processedSalesData[companyName]['totalSales'] += addition['totalSales'];
    }
  }

  return processedSalesData;

};

console.log(assignCalculatedSalesData(salesTaxRates, companySalesData));