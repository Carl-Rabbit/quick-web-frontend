import axios from 'axios'

const TEST_URL_PREFIX = '/api/test';

export function getAllTestObject(param, callback) {
  const url=`${TEST_URL_PREFIX}/getAll/`;
  axios.get(url, param)
    .then(response =>{
      callback(response.data)
    }, errResponse => {
      console.log(errResponse)
    })
}

export function createTestObject(param, callback) {
  const url=`${TEST_URL_PREFIX}/create/`;
  axios.post(url, param)
      .then(response =>{
        callback(response.data)
      }, errResponse => {
        console.log(errResponse)
      })
}


