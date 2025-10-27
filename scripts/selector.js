class Selector {
  selectors = {
    root: "[data-js-todo]",
    selectorButton: "[data-js-todo-selector]",
    selectorButtonMainText: "[data-js-todo-selector-text]",
    selectorDropdown: "[data-js-todo-dropdown-list]",
    selectorDropdownItem: "[data-js-todo-dropdown-item]",
    selectorArrow: "[data-js-todo-arrow]",
  }

  stateClasses = {
    isVisibleButton: "is-visible-button",
    isRotate: "is-rotate",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.selectorButtonElement = this.rootElement.querySelector(this.selectors.selectorButton)
    this.selectorDropdownItemElement = this.selectorButtonElement.querySelector(this.selectors.selectorButtonMainText)
    this.selectorDropdownElement = this.selectorButtonElement.querySelector(this.selectors.selectorDropdown)
    this.selectorDropdownElements = this.selectorButtonElement.querySelectorAll(this.selectors.selectorDropdownItem)
    this.selectorArrowElement = this.selectorButtonElement.querySelector(this.selectors.selectorArrow)

    this.init()
  }

  openDropdownList = (e) => {
    e.stopPropagation()
    this.selectorDropdownElement.classList.toggle(this.stateClasses.isVisibleButton)
    this.selectorArrowElement.classList.toggle(this.stateClasses.isRotate)
  }

  openDropdownItem = ({ target }) => {
    this.selectorDropdownItemElement.innerHTML = target.textContent
  }

  onDocClick = () => {
    if (this.selectorDropdownElement.classList.contains(this.stateClasses.isVisibleButton)) {
      this.selectorDropdownElement.classList.remove(this.stateClasses.isVisibleButton)
    }
  }

  init() {
    document.addEventListener("click", this.onDocClick)
    this.selectorButtonElement.addEventListener("click", this.openDropdownList)
    this.selectorDropdownElements.forEach((el) => {
      el.addEventListener("click", this.openDropdownItem)
    })
  }
}

export default Selector
