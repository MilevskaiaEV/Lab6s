import { prisma } from './prisma_init'

export async function find_students_with_most_courses() {
    // TODO: Найти студентов с максимальным количеством уникальных курсов
    // Использовать обработку данных в TypeScript (не агрегацию Prisma)
    // Вернуть массив студентов с информацией о person и количеством курсов
     const students = await prisma.student.findMany({
        include: 
        {
            grades: 
            {
                select: {courseId: true},
                distinct: ['courseId']
            },
            person: true
        }
    })
    const studentsWithCount = students.map(student => ({
        ...student,
        courseCount: student.grades.length
    }))
    const maxCount = Math.max(...studentsWithCount.map(s => s.courseCount))
    return studentsWithCount
        .filter(s => s.courseCount === maxCount)
        .map(s => ({
            person: s.person,
            courseCount: s.courseCount
        }))
}