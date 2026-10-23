import { prisma } from './prisma_init'

export async function find_students_above_course_average(courseTitle: string) {
    // TODO: Найти студентов, у которых есть оценки по указанному курсу выше среднего балла по этому курсу
    // Вернуть массив студентов с информацией о person и их оценкой
    // Использовать два отдельных запроса: первый для нахождения среднего балла, второй для поиска студентов
     const avgGrade = await prisma.grade.aggregate({
        where: {course: { title: courseTitle}},
        _avg: {grade: true}
    });
    
    if (avgGrade._avg.grade === null)
        return [];

    const summary = await prisma.grade.findMany({
        where: {
            course: { title: courseTitle },
            grade: { gt: avgGrade._avg.grade }
        },
        include: {student: {include: {person: true}}}
    });

    return summary.map(s => ({
            id: s.studentId,
            grade: s.grade,
            name: s.student.person.name,
            person: s.student.person
        })
    );
}