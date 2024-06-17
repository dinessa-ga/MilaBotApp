interface fetchConfig {
    url : string;
    method : string;
    headers ?: Headers;
    body ?: any ;
}

const api = async ({ url, method, headers  }: fetchConfig) => {
    const respose = await fetch(url, { method, headers })
    return  respose.json()
}
export default api