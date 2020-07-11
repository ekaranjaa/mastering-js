// Date and time
let val
const today = new Date()
let birthday = new Date('6-30-2001 10:30:00')
birthday = new Date('June 30 2001')

val = today.getFullYear()
val = today.getMonth()
val = today.getDay()
val = today.getDate()
val = today.getHours()
val = today.getMinutes()
val = today.getSeconds()
val = today.getMilliseconds()
val = today.getTime()

birthday.setMonth(2)
birthday.setDate(15)
birthday.setFullYear(2019)
birthday.setHours(10)
birthday.setMinutes(20)
birthday.setSeconds(30)
birthday.setFullYear(2000)


val = birthday

console.log(val)