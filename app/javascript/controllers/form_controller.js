import { Controller } from "@hotwired/stimulus"
import { debounce } from "debounce"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log("connected", this.element)
  }

  initialize() {
    console.log("initialized")
    this.submit = debounce(this.submit.bind(this), 500)
  }

  submit() {
    this.element.requestSubmit()
  }

  disconnect() {
    console.log("disconnected")
  }
}
