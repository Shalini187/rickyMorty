export const get = async (requestUrl: string = 'https://rickandmortyapi.com/api/character') => {
    try {
        let response = await fetch(requestUrl);
        let json = await response.json();

        return json;
    } catch (e) {
        console.log("Http get method", e)
    }
};

export const query = async (requestUrl: string, params: any) => {
    try {
        let response = await fetch(`${requestUrl}/${params}`);
        let json = await response.json();

        return json;
    } catch (e) {
        console.log("Http get method", e)
    }
};