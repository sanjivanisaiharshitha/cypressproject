// cypress/e2e/todoApp.cy.js

describe('To-Do App E2E Tests', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    });

    it('should display the correct initial list of todos', () => {
        cy.get('.todo-list li').should('have.length', 2);
        cy.get('.todo-list li').first().should('contain', 'Pay electric bill');
        cy.get('.todo-list li').last().should('contain', 'Walk the dog');
    });

    it('should add a new todo', () => {
        const newTodo = 'Learn Cypress';
        cy.get('.new-todo').type(`${newTodo}{enter}`);
        cy.get('.todo-list li').should('have.length', 3);
        cy.get('.todo-list li').last().should('contain', newTodo);
    });

    it('should mark a todo as completed', () => {
        cy.get('.todo-list li').first().find('.toggle').click();
        cy.get('.todo-list li').first().should('have.class', 'completed');
    });

    it('should delete a todo', () => {
        cy.get('.todo-list li').first().find('.destroy').click({ force: true });
        cy.get('.todo-list li').should('have.length', 1);
    });
});

// To run the tests, make sure you have Cypress installed and use the command:
// npx cypress open
