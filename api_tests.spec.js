///<reference types ="cypress"/>
describe('JSON place holder API testing', () => {
    const baseUrl = "https://jsonplaceholder.typicode.com" ;
    
    it('Fetch a list of posts', () => {
        cy.request({
            method: 'GET',
            url: baseUrl + "/posts", 
            headers: {
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
          
        }) 
        
    });
    it('Create a new post', () => {
        cy.request({
            method: 'POST',
            url: baseUrl + "/posts", 
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "title": "New Post",
                "body": "This is the body of the new post",
                "userId": 1
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(201);
          
        }) 
});
});