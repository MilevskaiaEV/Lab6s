import { prisma } from './prisma_init'

export async function find_courses_min_max_average() {
    // TODO: Найти курсы с минимальной и максимальной средней оценкой
    // Использовать обработку в TypeScript (не агрегацию Prisma)
    // Вернуть объект { min: курс, max: курс } с дополнительным полем averageGrade
     const courses = await prisma.course.findMany({
        include: {
            grades: true
        }
    })
    const coursesWithAvg = courses
        .filter(course => course.grades.length > 0)
        .map(course => ({
            ...course,
            averageGrade: course.grades.reduce((sum, grade) => sum + grade.grade, 0) / course.grades.length
        }))
    const minCourse = coursesWithAvg.reduce((min, course) => course.averageGrade < min.averageGrade ? course : min)
    const maxCourse = coursesWithAvg.reduce((max, course) => course.averageGrade > max.averageGrade ? course : max)
    return {
        min: minCourse,
        max: maxCourse
    }
}