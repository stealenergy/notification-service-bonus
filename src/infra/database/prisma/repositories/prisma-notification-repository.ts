import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../appication/enttities/notification";
import { NotificationsRepository } from "../../../../appication/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
@Injectable()
export class PrimasNotificationRepository implements NotificationsRepository{
constructor(private prismaService: PrismaService){}


     async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id:notification.id,
                category: notification.category,
                content:notification.content.value,
                recipientId:notification.recipientId,
                readAt:notification.readAt,
                createdAt:notification.createAt,
            }
        })
    }

}