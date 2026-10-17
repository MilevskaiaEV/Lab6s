/* 
	Создайте генераторную функцию filterEven, которая принимает массив чисел и возвращает только четные числа из этого массива, используя yield.
*/

export function* filterEven(arr: number[]): IterableIterator<number> {
for(const n of arr) if (n%2 === 0) yield n;
}


