import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "words" ]

  connect() {
    console.log("Hello World!")
  }

  sendMessage(e) {
    var data = { message: this.wordsTarget.value }
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
