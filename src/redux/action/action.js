import { ADD, DELETE } from "../action-type/action-type"

export const add =(data)=>{
    return(
        {type:ADD,payload:data}
    )
}
export const del = (id)=>{
    return(
        {type:DELETE, payload:id}
    )
}