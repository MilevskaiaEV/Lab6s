/* 	
	Напишите функцию groupUnfinishedHighPriorityTasks, которая группирует задачи по категориям, фильтруя только незавершенные высокоприоритетные задачи.
*/

export type Task = { category: string; priority: string; completed: boolean };

export function groupUnfinishedHighPriorityTasks(tasks: Task[]): Map<string, Task[]> {
return tasks
      .filter(task => !task.completed && task.priority === 'high')
    .reduce((map, task) => {
      const group = map.get(task.category) ?? [];
      map.set(task.category, [...group, task]);
      return map;
    }, new Map<string, Task[]>());
}