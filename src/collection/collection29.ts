/* 
	Напишите функцию calculateTotalProgress, которая вычисляет общий прогресс пользователей, учитывая только активных и с прогрессом > 50%.
*/

type User = {active: boolean, progress: number}

export function calculateTotalProgress(users: User[]): number {
const filtered = users.filter(user => user.active && user.progress > 50);
const total = filtered.reduce((sum, user) => sum + user.progress, 0);
return filtered.length === 0 ? 0 : total / filtered.length;
}