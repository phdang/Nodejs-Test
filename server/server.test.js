const request = require("supertest");
const expect = require("expect");
var app = require("./server").app;
describe("Server", () => {
  describe("Error Object", () => {
    it("should response error object", done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            //toInclude is replaced with toMatchObject
            error: "Page not found!"
          });
        })
        .end(done);
    });
  });

  describe("Users Array", () => {
    it("should response users array", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude(
            { age: 28, name: "Mike" } // check whether an object element inside an array
          );
        })
        .end(done);
    });
  });
});
