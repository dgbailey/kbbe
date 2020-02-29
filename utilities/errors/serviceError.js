class ServiceError extends Error {

    constructor(functionName,e){
        const errorMessage = `Error in Service - ${functionName} -- Detail:${e}`
        super(errorMessage);
        this.name = 'Service Error'
    }

}

module.exports = ServiceError;