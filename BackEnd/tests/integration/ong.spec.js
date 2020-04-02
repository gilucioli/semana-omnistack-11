const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', ()=>{
beforeEach(async()=>{
   await connection.migrate.rollback(); //executar as migrations no banco de teste
   await connection.migrate.latest(); //executar as migrations no banco de teste
});

afterAll(async ()=>{
   await connection.destroy();
})
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        // .set('Authorization', '456') //segundo parametro é o id valido de uma ong
        .send({    
            name: "APAD",
            email: "gilucioli2@gmail.com",
            whatsapp: "3288997675",
            city: "rio do sul",
            uf: "SC"   
        });

        expected(response.body).toHaveProperty('id');
        expected(response.body.id).toHaveLength(8);


    });
});