import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["add_item", "template"]

  connect() {
    this.wrapperClass = this.data.get("wrapperClass") || "nested-fields"
  }

  add_association(event) {
    event.preventDefault()
    var content = this.templateTarget.innerHTML.replace(/NEW_RECORD/g, new Date().getTime())
    this.add_itemTarget.insertAdjacentHTML('beforebegin', content)
  }

  remove_association(event) {
    event.preventDefault()
    let wrapper = event.target.closest('.' + this.wrapperClass)
    if (wrapper.dataset.newRecord == 'true') {
      wrapper.remove()
    } else {
      console.log('going to remove')
      wrapper.querySelector("input[name*='_destroy']").value = 1
      wrapper.style.display = 'none'
    }
  }
}
