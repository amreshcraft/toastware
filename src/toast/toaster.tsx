import { getToastAPI } from "./core/globalStore";

const toaster = {
  addToast: (...args: Parameters<NonNullable<ReturnType<typeof getToastAPI>["addToast"]>>) => {
    getToastAPI().addToast?.(...args);
  },
  notify:(...args: Parameters<NonNullable<ReturnType<typeof getToastAPI>["addToast"]>>) => {
    getToastAPI().addToast?.(...args);
  
  },
  removeToast: (id: string) => {
    getToastAPI().removeToast?.(id);
  },
  clearToasts: () => {
    getToastAPI().clearToasts?.();
  },
  success: (msg: string, pos?: string) => {
    getToastAPI().addToast?.(msg, "success", pos);
  },
  error: (msg: string, pos?: string) => {
    getToastAPI().addToast?.(msg, "error", pos);
  },
  info: (msg: string, pos?: string) => {
    getToastAPI().addToast?.(msg, "info", pos);
  },
  clear : ()=>{
    getToastAPI().clear?.();
  }
};

export default toaster;
