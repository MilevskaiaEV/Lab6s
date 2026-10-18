/* 
	Создайте функцию groupProductsByPrice, которая группирует товары в категории: "дешевые" (<1000), "средние" (1000-5000), "дорогие" (>5000). В функции не должно быть циклов.
*/

type Product = {name: string, price: number};
type GroupedProducts = {cheap: Product[], medium: Product[], expensive: Product[]};

export function groupProductsByPrice(products: Product[]): GroupedProducts {
return products.reduce<GroupedProducts>(
    (acc, p) => {
      const key = p.price < 1000 ? 'cheap' : p.price > 5000 ? 'expensive' : 'medium';
      return { ...acc, [key]: [...acc[key], p] };
    },
    { cheap: [], medium: [], expensive: [] }
  );
}