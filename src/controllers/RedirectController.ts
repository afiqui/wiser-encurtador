import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { RedirectRepository } from "../repositories/RedirectRepository";

class RedirectController {
    async find(request: Request, response: Response){
        const url = request.params.url;   
        
        const redirectsRepository = getCustomRepository(RedirectRepository);

        let result = await redirectsRepository.find(
            {where: {hash: url}
        })

        if (result != undefined){            
            if (result[0] != undefined){
                var d = new Date().getTime()
                if (result[0].expire_at.getTime() > d){
                    response.redirect(result[0].url)
                }else{
                    response.status(400).send('Link expired!');
                }
            }else{
                response.status(400);
            }
        }else{
            response.status(400);
        }        
        response.end()
    }
}

export { RedirectController };
