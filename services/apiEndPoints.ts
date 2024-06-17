import api from "./api";


export const getMethod = async (url: string) => {
    return await  api({ method: 'GET', url });
}

export const postMethod = async (url: string, body: any) => {

    return  await api({ method: 'POST', url, body });
}

