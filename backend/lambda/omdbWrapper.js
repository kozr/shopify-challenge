/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https')

exports.handler = async event => {
  let dataString = ''

  const response = await new Promise((resolve, reject) => {
    const {
      queryStringParameters: { t, s },
    } = event
    const title = t
    const search = s
    if (!title && !search) {
      resolve({
        statusCode: 400,
        body: 'Please provide a query!',
      })
    }
    const apiKey = process.env.OMDB_API_KEY
    const query = search ? `&s=${search}` : `&t=${title}`
    const omdbApi = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}${query}`
    const req = https.get(omdbApi, res => {
      res.on('data', chunk => {
        dataString += chunk
      })
      res.on('end', () => {
        resolve({
          statusCode: 200,
          body: dataString,
        })
      })
    })

    req.on('error', e => {
      reject({
        statusCode: 500,
        body: `Error: ${e.message} Something went wrong!`,
      })
    })
  })

  return response
}
