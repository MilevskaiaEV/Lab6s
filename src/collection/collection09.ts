/* 
	Напишите функцию findIntersection, которая принимает два массива и возвращает массив их общих элементов, используя Set.
*/

export function findIntersection(arr1: number[], arr2: number[]): number[] {
const set2 = new Set(arr2);
return [...new Set(arr1.filter(n => set2.has(n)))];
}