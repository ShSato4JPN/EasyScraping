const express = require( 'express' )
const bodyparser = require( 'body-parser' )
const app = express()
const port = 3500

app.use( express.urlencoded({ extend: true }) )
app.use( express.json() )

const jd = {
  "infomation": [
      {
          "id": 1,
          "profile": {
              "name": "ShSato4",
              "blood": "AB",
              "old": 26,
              "sex": "man"
          },
          "interesting": {
              "test": [
                  "skateboard",
                  "guitar",
                  "game"
              ]
          }
      },
      {
          "id": 2,
          "profile": {
              "name": "test",
              "blood": "A",
              "old": 10,
              "sex": "man"
          },
          "interesting": {
              "test": [
                  "music"
              ]
          }
      }
  ],
  "subinfomation": {
      "country": "japan",
      "place": "tokyo"
  }
}

app.get( '/api/vi/get', (req, res) => {
  res.send( JSON.stringify(jd) )
})


app.post( '/api/vi/post', (req, res) => {
  res.send( JSON.stringify(jd) )
})

app.listen( port, () => console.log( `example app listening on port ${port}`) )
