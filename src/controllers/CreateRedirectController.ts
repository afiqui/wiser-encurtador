import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { RedirectRepository } from "../repositories/RedirectRepository";

class CreateRedirectController {
    async create(request: Request, response: Response){
        const {url} = request.body;

        if (url == undefined){
            return response.status(400).json({
                error: "Param url undefined!"
            })
        }

        const redirectsRepository = getCustomRepository(RedirectRepository);

        const urlAlreadyExists = await redirectsRepository.findOne({
            url
        })

        if (urlAlreadyExists){
            return response.status(400).json({                
                error: "Url already exists!"
            });
        }

        
        var expire_at = new Date()
        expire_at.setDate(expire_at.getDate() + 1);            
        

        const redirect = redirectsRepository.create({
            url,expire_at
        })

        await redirectsRepository.save(redirect)
        response.status(201).json({"newUrl": 'http://localhost:8081/'+redirect.hash})
    }
}

export { CreateRedirectController };
