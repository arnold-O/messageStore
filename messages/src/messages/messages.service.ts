import { MessageRepository } from "./messages.repository";




export class MessageServices {
    messagesRepo:MessageRepository

    constructor(){
        this.messagesRepo = new MessageRepository()
    }

     findOne(id:string){
        return this.messagesRepo.findOne(id)
    }
     create(content:string){
        return this.messagesRepo.Create(content)
    }
     findAll(){
        return this.messagesRepo.findAll()
    }

}