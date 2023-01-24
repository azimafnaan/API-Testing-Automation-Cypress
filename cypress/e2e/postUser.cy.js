/// <reference types="Cypress"/>

const jsonData = require('../fixtures/createUser.json')


describe('Create user api test', () => {
    let accessToken = 'cd5228314a8258bd10018e768243f90c4a660aea53d0677be292373dc83485c3'
    let randomText = ""
    let testEmail = ""
    it('creates a new user', () => {
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++) {
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length))
            testEmail = randomText + '@gmail.com'
        }
        cy.fixture('createUser').then((payload) => {
            //Create User(POST)
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": payload.name,
                    "email": testEmail,
                    "gender": payload.gender,
                    "status": payload.status
                }
            }).then((res) => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.equal(201)
                expect(res.body).has.property('email', testEmail)
                expect(res.body).has.property('name', payload.name)

            }).then((res) => {

                const id = res.body.id
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + id,
                    headers: {
                        'Authorization': 'Bearer ' + accessToken
                    },
                })

            }).then((res) => {
                expect(res.status).to.equal(200)
                expect(res.body).has.property('id', userId)
                expect(res.body).has.property('email', testEmail)
                expect(res.body).has.property('name', payload.name)
            })
        })
    })
})


