import { Router, Request, Response, NextFunction } from "express";

const mainRouter: Router = Router();

//error handling for unknown map files.
mainRouter.get("/assets/js/vendor/*.map", function (request: Request, response: Response, next: NextFunction) {
    let err = new Error("Not Found");
    next(err);
});

export { mainRouter }
