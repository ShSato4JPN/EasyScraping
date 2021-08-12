import { scraping } from './scraping.mjs'
//import { myFunc } from './test.mjs'

export default function handler(req, res) {
  //res.status(200).json({ name: 'John Doe' })
  action()
  //myFunc()
  res.status(200).json({ name: 'John Doe' })
}

const action = async () => {
  console.log( 'here' )

  const MAX_PAGE = 40
  for( let i=1; i<MAX_PAGE; i++) {
    console.log( `PAGE:${i}` )
    let result = await scraping( i )
    console.log( result )
  }
}
