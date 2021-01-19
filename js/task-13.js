// function slugify(title) {
  
//   const normalizedTitle = title.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');
//    return slug;
 
// }
function slugify(title) {
  
let slug;

 slug = title.toLowerCase().split(' ').join('-');
 
 return slug

}


console.log(slugify('Десять секретов JavaScript'));
console.log(slugify('Английский для разработчика'));