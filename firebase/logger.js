import { Firebase } from "./";
// tracking page view
export function pageViewTracking(url) {
    console.log("analytics=====>", Firebase["analytics"]);
    Firebase["analytics"] && Firebase["analytics"].logEvent('page_view', {
        'page_location': url
    });
}
//tracking url
export function urlViewTracking(url) {
    Firebase["analytics"] && Firebase["analytics"].logEvent('url_view', {
        'url': url
    });
}
