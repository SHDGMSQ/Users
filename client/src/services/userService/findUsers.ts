import {ResponseUserType, userAPI} from "../../api/user-api";

const pendingForms = new WeakMap();

export const findUsers = async (
    form: EventTarget & HTMLButtonElement,
    email: string,
    number?: string
): Promise<{ data: ResponseUserType[], showHeader: boolean, showLoader: boolean }> => {

    let data: ResponseUserType[] = [];
    let showHeader: boolean = false;
    let showLoader: boolean = true;

    const controller = new AbortController();

    const previousController = pendingForms.get(form);

    if (previousController) {
        previousController.abort();
    }
    pendingForms.set(form, controller);

    await userAPI.findUsers(controller, email, number)
        .then(res => {
            pendingForms.delete(form);
            data = res.data;
            showHeader = true;
            showLoader = false
        })
        .catch((e) => {
            console.log(e.message);
        });
    return {data, showHeader, showLoader};
};