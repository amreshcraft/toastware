import { getToastAPI } from "./core/globalStore";
import promise from "./prmosie-toast/promiseToast";

const toaster = {
  addToast: (...args: Parameters<NonNullable<ReturnType<typeof getToastAPI>["addToast"]>>) => {
   return getToastAPI().addToast?.(...args);
  },
  notify:(...args: Parameters<NonNullable<ReturnType<typeof getToastAPI>["addToast"]>>) => {
    return getToastAPI().addToast?.(...args);
  
  },
  removeToastById: (id: string) => {
    getToastAPI().removeToast?.(id);
  },
 
  success: (msg: string, pos?: string) => {
   return getToastAPI().addToast?.(msg, "success", pos);
  },
  warning: (msg: string, pos?: string) => {
   return getToastAPI().addToast?.(msg, "warning", pos);
  },
  error: (msg: string, pos?: string) => {
   return getToastAPI().addToast?.(msg, "error", pos);
  },
  info: (msg: string, pos?: string) => {
   return getToastAPI().addToast?.(msg, "info", pos);
  },
   clearToasts: () => {
    getToastAPI().clearToasts?.();
  },
  clear : ()=>{
    getToastAPI().clear?.();
  },

  promise :promise
};

export default toaster;
