/// < reference types = "Cypress" />

describe('Get API in test', () => {
    let accessToken = 'cd5228314a8258bd10018e768243f90c4a660aea53d0677be292373dc83485c3'

    it('Get User test', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
                'authorization': "Bearer" + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)


        })
    })

    it('get user id', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/3023',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.gender).to.eq('female')
        })

    })
})