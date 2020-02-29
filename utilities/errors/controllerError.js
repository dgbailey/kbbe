class ControllerError extends Error {

    constructor(functionName,e){
        const errorMessage = `Error in Controller - ${functionName} -- Detail:${e}`
        super(errorMessage);
        this.name = 'Controller Error'
    }

}

module.exports = ControllerError;