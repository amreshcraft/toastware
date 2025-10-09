import { ToastAPI } from "../types/types";


let toastAPI : ToastAPI = {}

export function registerAPI(api : ToastAPI){
toastAPI = api
}

export function getToastAPI(){
    return toastAPI;
}