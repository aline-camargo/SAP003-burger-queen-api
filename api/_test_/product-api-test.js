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

  it('Should get particular product', (done) => {
    const productId = 2;
    chai.request(server)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Found product')
        res.body.data.should.have.property('itens')
        res.body.data.should.have.property('price')
        res.body.data.should.have.property('is_alcoholic')
        done()
      })
  })

  it('It should not get a particular product with invalid id', (done) => {
    const productId = 8888
    chai.request(server)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Cannot find product with the id ${productId}`)
        done()
      })
  })

  it('It should not get a particular product with non-numeric id', (done) => {
    const productId = 'aaa'
    chai.request(server)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value')
        done()
      })
  })

  it('It should update a product', (done) => {
    const productId = 2
    const updatedProduct = {
      id: productId,
      itens: 'Negroni sem alcool (?)',
      price: 20,
      is_alcoholic: false
    }
    chai.request(server)
      .put(`/api/products/${productId}`)
      .send(updatedProduct)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.data.id).equal(updatedProduct.id)
        expect(res.body.data.itens).equal(updatedProduct.itens)
        expect(res.body.data.is_alcoholic).equal(updatedProduct.is_alcoholic)
        expect(res.body.data.price).equal(updatedProduct.price)
        done()
      })
  })

  it('It should not update a product with invalid id', (done) => {
    const productId = 9999
    const updatedProduct = {
      id: productId,
      itens: 'Negroni sem alcool (?)',
      price: 20,
      is_alcoholic: false
    }
    chai.request(server)
      .put(`/api/products/${productId}`)
      .send(updatedProduct)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Cannot find product with the id: ${productId}`)
        done()
      })
  })

  it('It should not update a product with non-numeric id value', (done) => {
    const productId = 'ggg'
    const updatedProduct = {
      id: productId,
      itens: 'Negroni sem alcool (?)',
      price: 20,
      is_alcoholic: false
    }
    chai.request(server)
      .put(`/api/products/${productId}`)
      .send(updatedProduct)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value')
        done()
      })
  })

  // it('It should delete a product', (done) => {
  //   const productId = 1
  //   chai.request(server)
  //     .delete(`/api/products/${productId}`)
  //     .end((err, res) => {
  //       expect(res.status).to.equal(200)
  //       expect(res.body.data).to.include({})
  //       done()
  //     })
  // })

  it('It should not delete a product with invalid id', (done) => {
    const productId = 777
    chai.request(server)
      .delete(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Product with the id ${productId} cannot be found`)
        done()
      })
  })

  it('It should not delete a product with non-numeric id', (done) => {
    const productId = 'bbb'
    chai.request(server)
      .delete(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please provide a numeric value')
        done()
      })
  })

});