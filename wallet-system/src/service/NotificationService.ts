import { UserModel } from "src/model/User";
import { Logger } from "./Logger";

export class NotificationService{
    notify(user: UserModel, message: string): void{
        Logger.info(`Notification Sent To ${user.getName()}: ${message}`);
    }
}