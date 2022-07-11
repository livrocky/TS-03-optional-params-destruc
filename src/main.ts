/* eslint-disable no-console */
import { items, Item } from './db/items';

console.log('main.ts');

console.log(items.length);

// 3. sukurti funkcija kuri grazina visu kategoriju masyva
const getAllCategoriesArr = (arr:Item[]): string[] => {
  const allCatsArr: string[] = arr.map((pObj: Item): string => pObj.category);
  console.log('allCatsArr===', allCatsArr);
  return allCatsArr;
};
getAllCategoriesArr(items);
