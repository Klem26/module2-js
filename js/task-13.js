function slugify(title) {
  
  const normalizedTitle = title.toLowerCase();
  const words = normalizedTitle.split(' ');
  const slug = words.join('-');
   return slug;
 
}


slugify('Десять секретов JavaScript');
slugify('Английский для разработчика');