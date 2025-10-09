
export default function getOrCreatePortalRoot(){

    let toastPortalRoot = document.getElementById("toast-root-portal");
    if(!toastPortalRoot){
        toastPortalRoot = document.createElement('div');
        toastPortalRoot.id = "toast-root-portal";
        document.body.appendChild(toastPortalRoot);
    }

   return toastPortalRoot;
}