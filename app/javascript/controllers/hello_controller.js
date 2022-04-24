import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log("Hello World!")
    this.sendMessage()
  }

  sendMessage() {
    var data = { message: "Hello World!" }
    fetch("http://localhost:8080/submit", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => console.log(response))
  }
}
