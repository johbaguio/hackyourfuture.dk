describe('Validate Apply Form - No Errors', () => {
  it('open apply page', () => {
    cy.visit('/apply').contains('Application Form')
  })

  it('find apply form', () => {
    cy.get('#apply-for-class')
      .scrollIntoView()
      .wait(5000)
      .should('be.visible')
  })

  const getIframe = () => {
    return cy
      .get('iframe')
      .scrollIntoView()
      .its('0.contentDocument')
      .should('exist')
      .its('body')
      .should('not.be.undefined')
      .then(cy.wrap)
  }

  it('requires filled out all data', () => {
    cy.log('filling out first name')
    getIframe()
      .find('label.desc')
      .contains('First Name')
      .click()
      .type('Test First Name')

    cy.log('filling out last name')
    getIframe()
      .find('label.desc')
      .contains('Last Name')
      .click()
      .type('Test Last Name')

    cy.log('filling out email')
    getIframe()
      .find('label.desc')
      .contains('Email')
      .click()
      .type('test@mail.com')

    cy.log('filling out phone number')
    getIframe()
      .find('label.desc')
      .contains('Phone Number')
      .click()
      .type('28123456')

    cy.log('filling out class')
    getIframe()
      .find('label.choice')
      .contains('I prefer to start the class')
      .first()
      .click()

    cy.log('filling out municipality')
    getIframe()
      .find('label.desc')
      .contains('Which municipality (kommune) do you live in?')
      .click()
      .type('Copenhagen')

    cy.log('filling out residence status')
    getIframe()
      .find('label.choice')
      .contains('Asylum seeker')
      .click()

    cy.log('filling out educational background')
    getIframe()
      .find('label.desc')
      .contains('Your Educational Background')
      .click()
      .type('Bachelor of Economics')

    cy.log('filling out gender')
    getIframe()
      .find('label.choice')
      .contains('Female')
      .click()

    cy.log('filling out do you have laptop')
    getIframe()
      .find('li#fo21li14')
      .contains('Yes')
      .click()

    cy.log('filling out have you programmed before')
    getIframe()
      .find('li#fo21li15')
      .contains('No')
      .click()

    cy.log('filling out danish classes')
    getIframe()
      .find('label.choice')
      .contains('I will start the classes soon')
      .click()

    cy.log('filling out current/ongoing education')
    getIframe()
      .find('label.choice')
      .contains('I will start an education soon')
      .click()

    cy.log('filling out how did you find out about HYF')
    getIframe()
      .find('label.desc')
      .contains('How did you find out about HackYourFuture?')
      .click()
      .type('Facebook')

    cy.log('upload CV')
    const yourCV = 'cv.pdf'
    getIframe()
      .find('[data-wufoo-field="file-upload"]')
      .first()
      .attachFile(yourCV)

    getIframe()
      .find('div.wufoo-file-upload')
      .first()
      .contains('cv.pdf')

    cy.log('upload short document')
    const yourWhy = 'why.docx'
    getIframe()
      .find('[data-wufoo-field="file-upload"]')
      .eq(1)
      .attachFile(yourWhy)

    getIframe()
      .find('div.wufoo-file-upload')
      .eq(1)
      .contains('why.docx')

    cy.log('submit form and send success')
    cy.server()
    cy.route(
      'POST',
      '/forms/?formname=zif0tgp1u4cdef&embed=1&embedKey=zif0tgp1u4cdef368853&entsource=&referrer=&header=hide',
      'fixture:apply'
    ).as('applySuccess')
    getIframe()
      .find('#form21')
      .submit()

    cy.log('check there is no error message')
    getIframe()
      .find('#errorMsgLbl')
      .should('not.exist')
  })

  it('open the confirmation page', () => {
    cy.visit('/application-confirmation')
      .get('#__next')
      .contains('Application confirmation')
      .should('be.visible')
  })
})
