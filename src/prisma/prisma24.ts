import { prisma } from './prisma_init'

export async function find_students_with_all_courses() {
    // TODO: Найти студентов, у которых есть оценки по всем существующим курсам
    // Использовать обработку в TypeScript
    // Вернуть массив студентов с информацией о person
        const totalCourses = await prisma.course.count()
    const students = await prisma.student.findMany({
        include: {
            grades: true,
            person: true
        }
    })
     return students
        .filter(student => student.grades.length === totalCourses)
        .map(student => ({person: student.person}))
}