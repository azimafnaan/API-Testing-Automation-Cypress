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
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            },
            body: {
                "name": jsonData.name,
                "email": testEmail,
                "gender": jsonData.gender,
                "status": jsonData.status
            }
        }).then((res) => {
            cy.log(JSON.stringify(res.body))
            expect(res.status).to.equal(201)
            expect(res.body).has.property('email', testEmail)
            expect(res.body).has.property('name', jsonData.name)

        })
    })
})


