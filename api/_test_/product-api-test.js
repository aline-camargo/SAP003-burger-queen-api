import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import server from '../index';
chai.use(chatHttp)
const { expect } = chai

describe('Testing the products endpoints:', () => {
  // it('It should add one product', (done) => {
  //   const product = {
  //     itens: 'Negroni',
  //     price: 25,
  //     is_alcoholic: true
  //   }
  //   chai.request(server)
  //     .post('/api/products')
  //     .send(product)
  //     .end((err, res) => {
  //       expect(res.status).to.equal(201)
  //       expect(res.body.data).to.include({
  //         id: 2,
  //         itens: product.itens,
  //         price: product.price,
  //         is_alcoholic: product.is_alcoholic
  //       })
  //       done()
  //     })
  // })

  it('Should not create a product with incomplete parameters', (done) => {
    chai.request(server)
      .post('/api/products')
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please provide complete details')
        done()
      })
  })

  it('Should list products found', (done) => {
    chai.request(server)
      .get('/api/products')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Products retrieved')
        res.body.data[0].should.have.property('itens')
        res.body.data[0].should.have.property('price')
        res.body.data[0].should.have.property('is_alcoholic')
        done()
      })
  })

});