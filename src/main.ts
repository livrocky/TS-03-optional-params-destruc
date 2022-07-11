import { items, Item } from './db/items.js';

console.log('main.ts');

console.log(items.length);

// 3. sukurti funkcija kuri grazina visu kategoriju masyva.
const getAllCategoriesArr = (arr: Item[]): string[] => {
  const allCatsArr: string[] = arr.map((pObj: Item): string => pObj.category);
  console.log('allCatsArr ===', allCatsArr);
  return allCatsArr;
};

const allCatsArr: string[] = getAllCategoriesArr(items);

// 3.1 sukurti funkcija atrinkti is kategoriju tik unikalias reiksmes
console.log([1, 2, 3].includes(1));

const getUniquesFromArr = (arr: string[]): string[] => {
  const uniqueArr: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const str of arr) {
    if (!uniqueArr.includes(str)) {
      uniqueArr.push(str);
    }
  }
  console.log('uniqueArr ===', uniqueArr);
  return uniqueArr;
};
getUniquesFromArr(allCatsArr);

// getUniquesFromArr - reduce
