describe("访问 Bing", () => {
  it("能够搜索", () => {
    cy.visit("https://bing.com");
    cy.get("#sb_form_q").type("柯南");
    cy.get("#search_icon").click();
    cy.contains("名侦探柯南").should("exist");
    cy.contains("普通话版").should("exist");
  });
});
