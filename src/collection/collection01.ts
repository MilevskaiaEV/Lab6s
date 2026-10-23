/* 
	Создайте генераторную функцию numberGenerator, которая принимает число max и возвращает генератор, yielding числа от 1 до max включительно.
*/

export function* numberGenerator(max: number): Generator <number>{
  if (max <= 0) return;
  yield* numberGenerator(max - 1);
  yield max;
}