// alert('Проверка')
let date = document.getElementById('date')
let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')



let today = new Date()

let weekDays = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье',]
let allMonth = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сетябрь','Октябрь','Ноябрь','Декабрь',]
date.innerHTML = today.getDate()
day.innerHTML = weekDays[today.getDay()-1]
month.innerHTML = allMonth[today.getMonth()]
year.innerHTML = today.getFullYear()



const ShowDate =() =>{
    let date = new Date()
    let hours = date.getHours()
    let minites = date.getMinutes()
    let seconds = date.getSeconds()

    let date_time = hours+":"+minites+':'+seconds
    // 'Время:'+" "+
    // console.log(date_time)

    setTimeout(() => {
        ShowDate()
        },1000);

        let get = document.getElementById('time_text').innerHTML=date_time
}
ShowDate()
