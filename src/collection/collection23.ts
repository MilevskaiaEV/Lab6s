/* 
	Напишите функцию groupByCategory, которая принимает массив объектов и имя свойства для группировки, возвращает объект, где ключи - значения свойства, а значения - массивы объектов.
*/

export function groupByCategory<T extends Record<string, any>>(arr: T[], key: keyof T): Record<T[keyof T], T[]> {
return arr.reduce((acc, obj) => {
  const k = obj[key];
  (acc[k] ??= []).push(obj);
  return acc;
}, {} as Record<T[keyof T], T[]>);
}