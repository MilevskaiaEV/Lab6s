import type { Db } from "mongodb"

export class Employee {
	_id: string
	name: string
	position: string
	managerId?: string
	constructor(_id: string, name: string, position: string, managerId?: string) {
		this._id = _id
		this.name = name
		this.position = position
		this.managerId = managerId
	}
}

export interface ManagementEmployee {
	_id: string
	name: string
	position: string
	level: number
}

export async function get_management_chain(db: Db, employeeId: string): Promise<ManagementEmployee[]> {
	// TODO: Найти всю цепочку управления для сотрудника (все менеджеры выше)
	// Используйте операцию $graphLookup
	return await db.collection("employees").aggregate([
		{
			$match: {
				_id: employeeId // Начинаем с указанного сотрудника
			}
		},
	{
			$project:
			{
				_id: 0,
				managementChain: 1
			}
		},
		{
			$unwind: '$managementChain'
		},
		{
			$replaceRoot: { newRoot: '$managementChain' }
		}	
	]).toArray() as ManagementEmployee[]
}