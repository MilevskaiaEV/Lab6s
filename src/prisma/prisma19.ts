import { prisma } from './prisma_init'

export async function find_most_popular_course() {
    // TODO: Найти курс с максимальным количеством уникальных студентов
    // Использовать агрегацию средствами Prisma (groupBy)
    // Вернуть объект курса с дополнительным полем studentCount
 const courses = await prisma.course.findMany({
        include: {
            grades: {
                select: {
                    studentId: true
                },
                distinct: ['studentId']
            }
        }
    })
const mostPopular = courses.reduce((max, course) =>
    course.grades.length > max.grades.length ? course : max
    )
const { grades, ...courseData } = mostPopular
return {
    ...courseData,
    studentCount: grades.length
    }
}