import { User } from "./user"

export class Services{

    idService: number = 0
    nameService: string = ""
    descriptionService: string = ""

    dateService: Date=new Date(Date.now())
    timeService: Date=new Date(Date.now())

    idUser: User | null = null
}