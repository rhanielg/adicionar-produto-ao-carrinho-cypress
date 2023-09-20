///<reference types="cypress"/>

describe('Adicionar produto no carrinho', () => {
    it('Comprar produto com sucesso', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.viewport(1440,900)

        // Realizar login na página do e-commerce
        cy.get('.right_list_fix > :nth-child(1) > a').click()
        cy.wait(2000)
        cy.get('input[id="user"]').type('teste@teste.com')
        cy.get('input[id="password"]').type('testando')
        cy.get('button[id="btnLogin"]').click()
        cy.wait(2000)
        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('.header-logo > .logo > a > img').click()
        
        // Adicionar produto ao carrinho

        cy.get('#video > .row > :nth-child(1) > .product_item_two > .product_item_inner > .product_img_wrap > a > img').click()
        cy.get('i[class="fa fa-plus"]').click({force: true})
        cy.get('.links_Product_areas > .theme-btn-one').click()

        // Validação da adição do produto ao carrinho

        cy.get('.col-12 > .header-action-link > :nth-child(2) > .offcanvas-toggle > .fa').click()
        cy.get('.offcanvas-cart > :nth-child(4) > .offcanvas-wishlist-item-block > .offcanvas-wishlist-item-content > .offcanvas-wishlist-item-link').should('contain', 'Movie Projector HD Outdoor')

    })
})