function getYearFirst() {
  const now = new Date();
  const year = now.getFullYear();
  const firstDate = new Date(year, 0, 1); 
  return firstDate.toISOString().split("T")[0];
}

export default getYearFirst;