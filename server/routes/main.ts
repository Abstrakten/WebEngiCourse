import { Router, Request, Response, NextFunction } from "express";

const mainRouter: Router = Router();
var counter = 0;
//error handling for unknown map files.
mainRouter.get("/assets/js/vendor/*.map", function (request: Request, response: Response, next: NextFunction) {
    let err = new Error("Not Found");
    next(err);
});

mainRouter.get("/downloads", function(req, res, next) {
	res.json({ test:"pis" });
})

mainRouter.post("/counter", function(req, res, next ) {

	counter = counter +1;
	res.json({data:counter})
})



export { mainRouter }
