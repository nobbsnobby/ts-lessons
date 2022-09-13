"use strict";
class AbstractMiddleware {
    next(middleware) {
        this.nextMiddleware = middleware;
        return middleware;
    }
    handle(request) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log("auth middleware");
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: "unauthorized" };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log("validate middleware");
        if (request.body) {
            return super.handle(request);
        }
        return { error: "body not exist" };
    }
}
class Controller extends AbstractMiddleware {
    handle(request) {
        console.log("constroller");
        return { success: request };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({
    userId: 1,
    body: 'Art'
}));
