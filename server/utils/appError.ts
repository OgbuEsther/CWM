export enum HttpCodes {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    RESET_CONTENT = 205,
    PARTIAL_CONTENT = 206,
    MULTI_STATUS = 207,
    FOUND =302,
    SEE_OTHER = 303,
    NOT_MODIFIED = 304,
    ACCEPTED_REST = 305,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,
    PROXY_AUTHENTICATION_REQUIRED = 407,
    REQUEST_TIMEOUT = 408,
    
    CONFLICT = 409,
    GONE = 410,
    LENGTH_REQUIRED = 411,
  INTERNAL_SERVER_ERROR = 500
}
export interface AppErrorArgs {
    name ?: string,
    message : string,
    isOperational ? : boolean,
    httpcode : HttpCodes
}

export class AppError extends Error {
    public readonly name : string
    public readonly httpcode : HttpCodes
    public readonly isOperational : boolean = true

    constructor(args : AppErrorArgs){
        super(args.message)


        Object.setPrototypeOf(this , new.target.prototype)
        
        this.name = args.name || "Error"
        this.httpcode = args.httpcode
       
        if(args.isOperational !== undefined){
            this.isOperational = args.isOperational
        }

        Error.captureStackTrace(this)
    }
}