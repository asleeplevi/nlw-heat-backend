import { prismaClient } from "../prisma";

export class GetLastThreeMessagesService {
  async execute(){
    const lastMessages = await prismaClient.message.findMany({
      take: 3,
      orderBy: {
        created_at: 'desc'
      },
      include: {
        user: true
      }
    })

    return lastMessages
  }
}