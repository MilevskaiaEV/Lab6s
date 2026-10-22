import { prisma } from './prisma_init'

export async function update_students_email_domain(oldDomain: string, newDomain: string) {
    // TODO: Обновить email у всех студентов, у которых email заканчивается на oldDomain
    // Заменить домен на newDomain
    // Вернуть количество обновленных записей
	// Допускается обновление email с помощью простого цикла с запросами в теле цикла
    const people = await prisma.person.findMany({
        where: {email: {endsWith: oldDomain}}
    });

    let count: number = 0;
    for (const person of people){
        const newEmail = person.email.replace(oldDomain, newDomain);
        await prisma.person.update({
            where: {id: person.id},
            data: {email: newEmail}
        });
        count++;
    }
    return count;
}