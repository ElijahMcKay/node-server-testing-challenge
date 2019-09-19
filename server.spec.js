//importing server and supertest
const supertest = require('supertest'); 
const server = require('./server.js'); 

// WRITE 2 TESTS PER ROUTE HANDLER


// SOME NOTES ON ASYNC/AWAIT

describe('server.js', () => {

    describe('dog route', () => {
        it('should return a status code of 200', () => { // need to make this anonymous function asynchronous 
            return request(server).get('/dog')
                .expect(200)
                .then(res => {
                    const dog = res.dog
                    expect(dog.toEqual)
                })
        })
        it('should return a status code of 201', () => {
            return request(server).post('/dog')
                .expect(201); 
        })
    })

    describe('cat route', () => {
        it('should return a status of 200', () => {
            return request(server).get('/cat')
                .expect(server.status).toEqual(200); 
        })
        it('should return a status of 201', () => {
            return request(server).post('/cat')
                .expect(201); 
        })
    })

    describe('rat route', () => {
        it('should return a status of 200', () => {
            return request(server).get('/bird')
                .expect(200); 
        })
        it('should return a status of 201', () => {
            return request(server).post('/bird')
                .expect(201); 
        })
    })
})