type Post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
}



type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
      "street": string,
      "suite": string,
      "city": string,
      "zipcode": string,
      "geo": {
        "lat": string,
        "lng": string
      }
    },
    "phone": string,
    "website": string,
    "company": {
      "name": string,
      "catchPhrase": string,
      "bs": string
    }
  }