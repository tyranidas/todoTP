import { User } from "./user"

export class Todo {
    public id? : string
    public text? : string
    public cat? : string
    public done? : boolean
    public isEditable? : boolean
    public userId?: number
}
