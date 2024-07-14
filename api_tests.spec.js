///<reference types ="cypress"/>
describe('JSON place holder API testing', () => {
    const baseUrl = "https://jsonplaceholder.typicode.com" ;
    //using get method to fetch response
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
     //using post method to create new entry
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
     //using update method to update resource
    it('Update an existing post', () => {
        cy.request({
            method: 'PUT',
            url: baseUrl + "/posts/1", 
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                 "title": "Updated Post", 
                 "body": "This is the updated body of the post",
                  "userId": 1
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200); 
        }) 
   
    });
     //using delete method to delete record
    it('Delete an existing post', () => {
        cy.request({
            method: 'DELETE',
            url: baseUrl + "/posts/1", 
            headers: {
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
          
        })  
    });
});