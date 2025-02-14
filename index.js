let dateNow = new Date();

console.log(dateNow);

console.log(dateNow.toLocaleDateString());

console.log(dateNow.toLocaleString());

console.log(dateNow.toISOString().split("T")[0]);

export function getDateNow() {
  let dateNow = new Date();

  return dateNow;
}
