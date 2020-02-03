import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import server from '../index';
chai.use(chatHttp)
const { expect } = chai

describe('Testing the orders endpoints:', () => {
  it('Should display a message when there is nothing to get', (done) => {
    chai.request(server)
      .get('/api/orders')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.should.have.property('message')
          .eql('No orders found')
        done()
      })
  })

  it('It should create a order', (done) => {
    const table = {
      number: 66,
    }
    chai.request(server)
      .post('/api/tables')
      .send(table)
      .end((err, tableRes) => {
        const order = {
          TableId: tableRes.body.data.id,
          status_order: 'Em preparo'
        }
        chai.request(server)
          .post('/api/orders')
          .send(order)
          .end((err, res) => {
            expect(res.status).to.equal(201)
            expect(res.body.data).to.include({
              id: 1,
              TableId: tableRes.body.data.id,
              status_order: 'Em preparo'
            })
            done()
          })
      })
  })

  it('Should not create a order with incomplete parameters', (done) => {
    chai.request(server)
      .post('/api/orders')
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please provide complete details')
        done()
      })
  })

  it('Should list orders found', (done) => {
    chai.request(server)
      .get('/api/orders')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Orders retrieved')
        res.body.data[0].should.have.property('TableId')
        res.body.data[0].should.have.property('status_order')
        done()
      })
  })

  it('Should get particular order', (done) => {
    const orderId = 1;
    chai.request(server)
      .get(`/api/orders/${orderId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Found order')
        res.body.data.should.have.property('TableId')
        res.body.data.should.have.property('status_order')
        done()
      })
  })

  it('It should not get a particular order with invalid id', (done) => {
    const orderId = 8888
    chai.request(server)
      .get(`/api/orders/${orderId}`)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Cannot find order with the id ${orderId}`)
        done()
      })
  })

  it('It should not get a particular order with non-numeric id', (done) => {
    const orderId = 'aaa'
    chai.request(server)
      .get(`/api/orders/${orderId}`)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value')
        done()
      })
  })

  it('It should update a order', (done) => {
    const orderId = 1
    const updatedOrder = {
      id: orderId,
      status_order: 'pendente'
    }
    chai.request(server)
      .put(`/api/orders/${orderId}`)
      .send(updatedOrder)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.data.id).equal(updatedOrder.id)
        expect(res.body.data.status_order).equal(updatedOrder.status_order)
        done()
      })
  })

  it('It should not update a order with invalid id', (done) => {
    const orderId = 9999
    const updatedOrder = {
      id: orderId,
      status_order: 'pendente'
    }
    chai.request(server)
      .put(`/api/orders/${orderId}`)
      .send(updatedOrder)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Cannot find order with the id: ${orderId}`)
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

  it('It should not delete a order with invalid id', (done) => {
    const orderId = 777
    chai.request(server)
      .delete(`/api/orders/${orderId}`)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Order with the id ${orderId} cannot be found`)
        done()
      })
  })

  it('It should not delete a order with non-numeric id', (done) => {
    const orderId = 'bbb'
    chai.request(server)
      .delete(`/api/orders/${orderId}`)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please provide a numeric value')
        done()
      })
  })

  it('It should delete a order', (done) => {
    const table = {
      number: 99,
    }
    const order = {
      TableId: 2,
      status_order: 'Pronto'
    }
    const orderId = 2;
    chai.request(server)
      .post('/api/tables')
      .send(table)
      .end((err, res) => {
        chai.request(server)
          .post('/api/orders')
          .send(order)
          .end((err, res) => {
            chai.request(server)
              .delete(`/api/orders/${orderId}`)
              .end((err, res) => {
                expect(res.status).to.equal(200)
                expect(res.body.data).to.include({})
              })
          })
        done()
      })
      chai.request(server)
      .get('/api/orders')
      .end((err, res) => {
      })
  })

});

describe('Testing the orders itens endpoints:', () => {

  it('Should create a order item', (done) => {
    const product = {
      itens: 'Cosmopolitan',
      price: 30,
      is_alcoholic: true,
    }
    const table = {
      number: 5,
    }

    chai.request(server)
      .post('/api/products')
      .send(product)
      .end((err, productRes) => {
        chai.request(server)
          .post('/api/tables')
          .send(table)
          .end((err, tableRes) => {
            const order = {
              TableId: tableRes.body.data.id,
              status_order: 'Pendente'
            }
            chai.request(server)
              .post('/api/orders')
              .send(order)
              .end((err, orderRes) => {
                const orderItem = {
                  ProductId: productRes.body.data.id,
                  OrderId: orderRes.body.data.id,
                  status_item: 'Pendente'
                }
                chai.request(server)
                  .post('/api/orders/items')
                  .send(orderItem)
                  .end((err, res) => {
                    expect(res.status).to.equal(201)
                    expect(res.body.data).to.include({
                      id: 1,
                      ProductId: productRes.body.data.id,
                      OrderId: orderRes.body.data.id,
                      status_item: 'Pendente'
                    })
                    done()
                  })
              })
          })
      })
  })

  it('Should not create a order item with incomplete parameters', (done) => {
    chai.request(server)
      .post('/api/orders/items')
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please provide complete details')
        done()
      })
  })

  it('Should get items of a particular order', (done) => {
    const product = {
      itens: 'Cosmopolitan',
      price: 30,
      is_alcoholic: true,
    }
    const table = {
      number: 5,
    }

    chai.request(server)
      .post('/api/products')
      .send(product)
      .end((err, productRes) => {
        chai.request(server)
          .post('/api/tables')
          .send(table)
          .end((err, tableRes) => {
            const order = {
              TableId: tableRes.body.data.id,
              status_order: 'Pendente'
            }
            chai.request(server)
              .post('/api/orders')
              .send(order)
              .end((err, orderRes) => {
                const orderItem = {
                  ProductId: productRes.body.data.id,
                  OrderId: orderRes.body.data.id,
                  status_item: 'Pendente'
                }
                chai.request(server)
                  .post('/api/orders/items')
                  .send(orderItem)
                  .end((err, orderItemRes) => {
                    chai.request(server)
                      .get(`/api/orders/items/${orderRes.body.data.id}`)
                      .end((req, res) => {
                        expect(res.status).to.equal(200)
                        expect(res.body.message).to.equal('Found order items')
                        res.body.data[0].should.have.property('ProductId')
                        res.body.data[0].should.have.property('OrderId')
                        res.body.data[0].should.have.property('status_item')
                        done()
                      })
                  })
              })
          })
      })
  })

})