// Custom date formatting functions to reduce redundancy

const months = [
   'jan', 
   'feb', 
   'mar', 
   'apr', 
   'may', 
   'jun', 
   'jul', 
   'aug', 
   'sep', 
   'oct', 
   'nov', 
   'dec',
]

export function previewDateFormat(date: string) {
   const newDate = new Date(date);
   if (newDate.getDate() < 10) {
      var dayOfMonth = '0' + newDate.getDate().toString();
   }
   else {
      var dayOfMonth = newDate.getDate().toString();
   }
   const month = newDate.getMonth();
   const year = newDate.getFullYear();

   return `${dayOfMonth}${months[month]}${year}`;

}

export function postDateFormat(date: string) {
   const newDate = new Date(date);

   return newDate.toJSON().slice(0, 10);
}