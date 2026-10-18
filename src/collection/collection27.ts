/* 	Напишите функцию findMostPopularTag, которая находит самый часто встречающийся тег в массиве постов и количество его повторений. Функция не должна использовать циклы.
*/

type Post = { tags: string[] };

export function findMostPopularTag(posts: Post[]): Record<string, number> {
return posts
    .flatMap(post => post.tags)
    .reduce<Record<string, number>>(
      (acc, tag) => ({ ...acc, [tag]: (acc[tag] ?? 0) + 1 }),
      {}
    );
}