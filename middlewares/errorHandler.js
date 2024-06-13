import constants from "../constants.js";
const error_hand = (err,req,res,next)=>{
    const st_code=res.statusCode ? res.statusCode :500;
    switch (st_code) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:"validation failed",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        
        case constants.UNAUTHORIZED:
            res.json({
                title:"validation failed",
                message:err.message,
                stackTrace: err.stack
            });
            break;

        case constants.FORBIDDEN:
            res.json({
                title:"validation failed",
                message:err.message,
                stackTrace: err.stack
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title:"validation failed",
                message:err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log("no errors");
            break;
    }
};

export default error_hand;