const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls =fruits.slice(1,-1) ;
const lastThreeEls = fruits.slice(-3);

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.