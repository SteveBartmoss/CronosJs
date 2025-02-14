let dateNow = new Date();

console.log(dateNow);

console.log(dateNow.toLocaleDateString());

console.log(dateNow.toLocaleString());

console.log(dateNow.toISOString().split("T")[0]);

console.log(dateNow.getDate() + 1);

console.log(dateNow.getFullYear());

console.log(dateNow.getMonth());

export function getDateNow() {
  let dateNow = new Date();

  return dateNow;
}
