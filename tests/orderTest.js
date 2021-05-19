const db = require("../models");
const { Location } = db;

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();

chai.use(chaiHttp);

describe("Orders", () => {
  beforeEach((done) => {
    Location.remove({}, (err) => {
      done();
    });
  });
  // testing the post route
  describe("/orders", () => {
    it("it should not POST an order with wrong coordinates", (done) => {
      let order = {
        origin: ["38.272689", "12.202967"],
        destination: ["39.909736", "20.997898"],
      };
      chai
        .request(server)
        .post("/orders")
        .send(order)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("err");
          res.body.errors.should.have.property("orders");
          // res.body.errors.pages.should.have.property('kind').eql('required');
          done();
        });
    });

    it("it should POST an Order successfully ", (done) => {
      let order = {
        origin: ["38.272689", "12.202967"],
        destination: ["39.909736", "20.997898"],
      };
      chai
        .request(server)
        .post("/orders")
        .send(order)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("message")
            .eql("order successfully added!");
          res.body.order.should.have.property("id");
          res.body.order.should.have.property("distance");
          res.body.order.should.have.property("status");
          done();
        });
    });
  });
});
