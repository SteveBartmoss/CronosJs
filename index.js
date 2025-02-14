let dateNow = new Date()

console.log(dateNow)

console.log(dateNow.toLocaleDateString())

console.log(dateNow.toLocaleString())

console.log(dateNow.toISOString().split("T")[0])

console.log(dateNow.getDate() + 1)

console.log(dateNow.getFullYear())

console.log(dateNow.getMonth())

export function getDateNow(formatDate) {
  let dateNow = new Date()

  let days=''
  let month=''
  if(dateNow.getDate()<10){
    days='0'+dateNow.getDate()
  }else{
    days=dateNow.getDate()
  }
  if(dateNow.getMonth()+1<10){
    month='0'+(dateNow.getMonth()+1)
  }else{
    month=dateNow.getMonth()+1
  }

  switch (formatDate) {
    case "ISO":
      return `${dateNow.getFullYear()}-${month}-${days}`

    case "EUR":
      return `${days}/${month}/${dateNow.getFullYear()}`

  }

}
