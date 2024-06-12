function getMonthFirst() {
  const today = new Date();
  today.setDate(1);
  return today.toISOString().split("T")[0];
}

export default getMonthFirst;
