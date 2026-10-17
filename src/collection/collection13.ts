/* 
	Создайте функцию countByRanges, которая принимает массив чисел и массив диапазонов, возвращает Map, где ключи - строковые представления диапазонов, а значения - количество чисел, попадающих в каждый диапазон.
*/

export function countByRanges(numbers: number[], ranges: [number, number][]): Map<string, number> {
	const result = new Map<string, number>();
for(const [min, max] of ranges) {
	const key = `${min}-${max}`;
	result.set(key, numbers.filter(n => n >= min && n <= max).length);
}
	return result;
}
