const calculateCost = (startDate, endDate, selectedCar) => {
  const carPrices = {
    "Audi R8": 250,
    "Kia Stinger": 150,
    "BMW M3": 180,
    "Tesla 3": 120,
  };

  const start = new Date(startDate);
  const end = new Date(endDate);
  const gap = Math.abs(end - start);
  const days = Math.ceil(gap / (1000 * 60 * 60 * 24));

  const costPerDay = carPrices[selectedCar];
  const totalCost = days * costPerDay;

  return totalCost;
};

export default calculateCost;
