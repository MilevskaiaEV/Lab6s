import { prisma } from './prisma_init'

export async function find_students_with_excellent_grades() {
    // TODO: Найти всех студентов, у которых есть хотя бы одна оценка 5
    // Использовать обработку данных в TypeScript (не фильтрацию Prisma)
    // Вернуть массив студентов с информацией о person
    const students = await prisma.student.findMany({
        include: {
            grades: true,
            person: true
        }
    })
    return students
        .filter(student => student.grades.some(grade => grade.grade === 5))
        .map(student => ({ person: student.person }))
}  