import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import server from '../index';
chai.use(chatHttp)
const { expect } = chai

describe('Testing the tables endpoints:', () => {
  // it('Should disply a message when there is nothing to get', (done) => {
  //   chai.request(server)
  //   .get('/api/tables')
  //   .end((err, res) => {
  //     expect(res.status).to.equal(200)
  //     res.body.should.have.property('message')
  //         .eql('No tables found')
  //       done()
  //   })
  // })

  it('It should create a table', (done) => {
    const table = {
      number: 66
    }
    chai.request(server)
      .post('/api/tables')
      .send(table)
      .end((err, res) => {
        expect(res.status).to.equal(201)
        expect(res.body.data).to.include({
          id: 2,
          number: 66
        })
        done()
      })
  })

  it('Should not create a table with incomplete parameters', (done) => {
    chai.request(server)
      .post('/api/tables')
      .send({})
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please provide complete details')
        done()
      })
  })

  it('Should list tables found', (done) => {
    chai.request(server)
      .get('/api/tables')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Tables retrieved')
        res.body.data[0].should.have.property('number')
        done()
      })
  })

  it('Should get particular table', (done) => {
    const tableId = 1;
    chai.request(server)
      .get(`/api/tables/${tableId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.message).to.equal('Found table')
        res.body.data.should.have.property('number')
        done()
      })
  })

  it('It should not get a particular table with invalid id', (done) => {
    const tableId = 8888
    chai.request(server)
      .get(`/api/tables/${tableId}`)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Cannot find table with the id ${tableId}`)
        done()
      })
  })

  it('It should not get a particular table with non-numeric id', (done) => {
    const tableId = 'aaa'
    chai.request(server)
      .get(`/api/tables/${tableId}`)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value')
        done()
      })
  })

  it('It should update a table', (done) => {
    const tableId = 1
    const updatedTable = {
      id: tableId,
      number: 66
    }
    chai.request(server)
      .put(`/api/tables/${tableId}`)
      .send(updatedTable)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.data.id).equal(updatedTable.id)
        expect(res.body.data.number).equal(updatedTable.number)
        done()
      })
  })

  it('It should not update a table with invalid id', (done) => {
    const tableId = 9999
    const updatedTable = {
      id: tableId,
      number: 66
    }
    chai.request(server)
      .put(`/api/tables/${tableId}`)
      .send(updatedTable)
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
          .eql(`Cannot find table with the id: ${tableId}`)
        done()
      })
  })

  it('It should not update a table with non-numeric id value', (done) => {
    const tableId = 'ggg'
    const updatedTable = {
      id: tableId,
      number: 66
    }
    chai.request(server)
      .put(`/api/tables/${tableId}`)
      .send(updatedTable)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        res.body.should.have.property('message')
          .eql('Please input a valid numeric value')
        done()
      })
  })
  
  it('It should not delete a table with invalid id', (done) => {
    const tableId = 777
    chai.request(server)
    .delete(`/api/tables/${tableId}`)
    .end((err, res) => {
      expect(res.status).to.equal(404)
      res.body.should.have.property('message')
      .eql(`Table with the id ${tableId} cannot be found`)
      done()
    })
  })
  
  it('It should not delete a table with non-numeric id', (done) => {
    const tableId = 'bbb'
    chai.request(server)
    .delete(`/api/tables/${tableId}`)
    .end((err, res) => {
      expect(res.status).to.equal(400)
      res.body.should.have.property('message')
      .eql('Please provide a numeric value')
      done()
    })
  })
  
  it('It should delete a table', (done) => {
    const tableId = 2
    chai.request(server)
      .delete(`/api/tables/${tableId}`)
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body.data).to.include({})
        done()
      })
  })

});