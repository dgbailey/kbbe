class RepositoryError extends Error {

    constructor(functionName,e){
        const errorMessage = `Error in Repository - ${functionName} -- Detail:${e}`
        super(errorMessage);
        this.name = 'Repository Error'
    }

}

module.exports = RepositoryError;