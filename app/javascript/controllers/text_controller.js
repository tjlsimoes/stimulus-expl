import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="text"
export default class extends Controller {
	static targets = [ "characters", "textarea", "notice" ]
	
  count() {
    let user_input = this.textareaTarget.value
    let user_input_l = user_input.length
    this.charactersTarget.textContent = `${user_input_l}/280`

    if (user_input_l >= 260 && user_input_l <= 279) {
      this.noticeTarget.textContent = "You better finish up..."
    } else if (user_input_l == 280) {
      this.noticeTarget.textContent = "Nailed it!"
    } else if (user_input_l > 280) {
      this.noticeTarget.textContent = "You are a politician now... I see..."
    }
  }
}
