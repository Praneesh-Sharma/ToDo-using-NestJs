import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


export class JwtAuthGaurd extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext){
        return super.canActivate(context)
    }

    handleRequest(err, user, info) {
        if(err || !user){
            throw err || new UnauthorizedException();
        }
        return user
    }
}