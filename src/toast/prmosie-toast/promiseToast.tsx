import toaster from "../toaster";
import { PromiseToastMessages } from "../types/types";



export default async function promise<T>(promise : Promise<T>, message :PromiseToastMessages,position : string = "top-right" ) {
   
    const loading = message.loading || "Loading ... "
    const id : string = toaster.addToast(loading,"info",position) ||  crypto.randomUUID()

    try {
        const result = await promise;
        toaster.removeToastById(id)
        const successMessage = message.success || "Success"
        toaster.success(successMessage,position)

        return result
        
    } catch (error) {
        const errorMessage = message.error || "Error : Something went wrong"
        toaster.error(errorMessage,position)
        throw error;
    }




}