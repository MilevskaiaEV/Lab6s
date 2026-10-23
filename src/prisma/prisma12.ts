import { prisma } from './prisma_init'

export async function find_top_students(limit: number) {
    // TODO: Найти топ N студентов по среднему баллу
    // Учитывать только студентов, у которых есть хотя бы одна оценка
    // Вернуть массив с id студента, именем, средним баллом и количеством оценок
    // Отсортировать по убыванию среднего балла
        const students = await prisma.student.findMany({
        include: {
            person: true,
            grades: true
        }
    })
    const studentsWithStats = students
        .filter(student => student.grades.length > 0)
        .map(student => ({
            id: student.id,
            studentName: student.person.name,
            averageGrade: student.grades.reduce((sum, grade) => sum + grade.grade, 0) / student.grades.length,
            gradeCount: student.grades.length
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade)
        .slice(0, limit)
    return studentsWithStats
}