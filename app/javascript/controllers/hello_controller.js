import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "Hello World!"

    this.load()
  }

  load() {
    fetch("https://api.github.com/users/kangkyu/gists?per_page=100")
      .then(response => response.text())
      .then(body => this.element.innerHTML = body)
  }
}
