// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// example:
// const input = '07:05:45PM'
// expected:
// 19:05:45

// const input = '12:40:22AM'
// 00:40:22

// const input = '12:45:54PM'
// 12:45:54

const input = '06:40:03AM'
// 06:40:03

const timeConverter = (s) => {
   const timeSplit = s.split(':')
   
   let hour = timeSplit[0]
   const minutes = timeSplit[1]
   const seconds = timeSplit[2].split(/[\D]+/)[0]
   const meridiem = timeSplit[2].split(/[\d]+/)[1]

   if (meridiem === 'AM' && hour === '12') {
      hour = '00'
   }  else if (meridiem === 'PM' && hour === '12') {
      hour = '12'
   } else if (meridiem === 'PM') {
      hour = parseInt(hour) + 12
   }

   console.log([hour, minutes, seconds].join(':'))

   return [hour, minutes, seconds].join(':')
}

timeConverter(input)