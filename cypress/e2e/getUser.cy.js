


/// < reference types = "Cypress" />

describe('Get API User Test', () => {
    it('Get User', () => {

        let accessToken = '35ea206f950a7b416f21e2eeef754c73f37f2fa8f01d4212146856c7249482cb'

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/3936',
            headers: {
                'authorization': "Bearer" + accessToken
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.gender).to.eq('female')

        })
    })
})