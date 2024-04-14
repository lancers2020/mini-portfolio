import { HOME_SIDEBAR } from "./index";
import { CONTENT_PAGE } from "./index";

export const homeSidebar = (data) => ({
    type: HOME_SIDEBAR,
    payload: data,
});

export const contentPage = (data) => ({
    type: CONTENT_PAGE,
    payload: data,
});
