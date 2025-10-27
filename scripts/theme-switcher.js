class ThemeSwitcher {
  selectors = {
    root: "[data-js-todo]",
    themeSwitcher: "[data-js-todo-theme-switcher]",
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.themeSwitcherElement = this.rootElement.querySelector(this.selectors.themeSwitcher)

    this.get
    this.init()
  }

  stateClasses = {
    darkTheme: "dark"
  }

  changeTheme = () => {
    document.body.classList.toggle(this.stateClasses.darkTheme)
  }

  init() {
    this.themeSwitcherElement.addEventListener("click", this.changeTheme)
  }
}

export default ThemeSwitcher