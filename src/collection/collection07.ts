/* 
  Напишите функцию countFrequency, которая принимает массив строк и возвращает Map, где ключи - это элементы массива, а значения - количество их вхождений.
*/

export function countFrequency(arr: string[]): Map<string, number> {
  const map = new Map<string, number>();
for(const s of arr) map.set(s, (map.get(s)?? 0)+ 1);
  return map;
}