/* 
	Реализуйте генераторную функцию range, которая принимает начальное и конечное числа и возвращает генератор, yielding все числа в этом диапазоне включительно.
*/

export function* range(from: number, to: number): Generator<number> {
if (from>to) return;
yield from;
yield* range(from+1, to);
}