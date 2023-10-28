const buttonGoogle = document.querySelector('#btn-google');
const buttonOutlook = document.querySelector('#btn-outlook');
const buttonOffice = document.querySelector('#btn-office');

buttonGoogle.addEventListener('click',()=>{
    window.open("https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240323T220000Z%2F20240324T090000Z&location=Salon%20%22La%20Colonia%22&text=Boda%20Sheilay%20Emiliano","_blank")
})

buttonOutlook.addEventListener('click', ()=>{
    window.open('https://outlook.live.com/calendar/0/action/compose?allday=false&enddt=2024-03-24T09%3A00%3A00%2B00%3A00&location=Salon%20%22La%20Colonia%22&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-03-23T22%3A00%3A00%2B00%3A00&subject=Boda%20Sheilay%20Emiliano',"_blank")
})

buttonOffice.addEventListener('click',()=>{
    window.open('https://outlook.office.com/calendar/action/compose?allday=false&enddt=2024-03-24T09%3A00%3A00%2B00%3A00&location=Salon%20%22La%20Colonia%22&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-03-23T22%3A00%3A00%2B00%3A00&subject=Boda%20Sheilay%20Emiliano','_blank')
})  