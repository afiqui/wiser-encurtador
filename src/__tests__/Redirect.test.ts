import request from 'supertest';
import { app } from '../app';
import createConnection from '../database'

describe("Create Redirect", () =>{
    var newUrl;
    beforeAll(async ()=>{
        const connection = await createConnection();
        await connection.runMigrations();
    })

    it("Should be able to create a new Url redirect", async () =>{
        const response = await request(app).post("/encurtador").send({
            url : "http://wisereducacao.com/"
        });
        newUrl = response.body.newUrl;
        expect(response.status).toBe(201);
    });

    it("Should not be able to create a new Url redirect as url already exists", async () =>{
        const response = await request(app).post("/encurtador").send({
            url : "http://wisereducacao.com/"
        });
        expect(response.status).toBe(400);
    });

    it("Should be redirected", async () =>{
        const response = await request(app).get(newUrl.replace('http://localhost:8081',""))
        expect(response.status).toBe(302)
    })
});

