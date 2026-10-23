import { prisma } from './prisma_init'

export async function update_student_names_pattern(oldPattern: string, newPattern: string) {
    // TODO: Обновить имена студентов, заменяя oldPattern на newPattern
    // Использовать обработку в TypeScript с отдельными запросами update
    // Вернуть количество обновленных студентов
    const students = await prisma.person.findMany({
        where: {name: {contains: oldPattern}}
    });

    for (const student of students) {
        const newName = student.name.replace(oldPattern, newPattern);
        await prisma.person.update({
            where: {id: student.id},
            data: {name: newName}
        })
    }
    return students.length;
}