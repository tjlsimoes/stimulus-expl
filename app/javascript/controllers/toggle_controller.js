import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [ "content" ]
	static classes = [ "change" ]

  toggle() {
	  this.contentTarget.classList.toggle(this.changeClass)
  }
}
