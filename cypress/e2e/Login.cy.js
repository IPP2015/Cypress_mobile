describe('test',()=>{
    it('test1',()=>{
        cy.loginsucses({ email: 'Admin', password: 'admin123'})
        // cy.setSessionStorage('_token', '253cd2aabb0e129ce859e8784c16ea.nVTkz08ionlfgH8K7S_70vXDISbCGZwB6CsZ5so3JxM.qmCCqSMRmh8v1R5zgmOeobmTSBa1IaVTuUFLtLJhdyX7Yoa2DlDjEx71FA')
        // cy.getSessionStorage('_token').should('eq', '253cd2aabb0e129ce859e8784c16ea.nVTkz08ionlfgH8K7S_70vXDISbCGZwB6CsZ5so3JxM.qmCCqSMRmh8v1R5zgmOeobmTSBa1IaVTuUFLtLJhdyX7Yoa2DlDjEx71FA')
    })
})
