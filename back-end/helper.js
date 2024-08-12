// fonction sucess qui a deux parametres qui sont retourner \ un message et des data {id:2 ,name: 'ok'}
export const successData = (message, data, mimeType = 'application/json') => {
    return {
        message,
        data,
        mimeType
        
    }
};

export const statusCodes = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};