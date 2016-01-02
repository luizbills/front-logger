const noop = function() {}

const logger = {
  config: {
    containerClass: 'logger',
    lineClass: 'logger__line',
    container: null,
    before: null,
    after: null,
  },

  init(props) {
    const config = this.config
    Object.assign(config, props)

    if (config.container && config.containerClass) {
      config.container.className += ` ${config.containerClass}`
    }

    return this
  },

  log(...msg) {
    const config = this.config
    const line = document.createElement('pre')

    line.className = config.lineClass
    line.textContent = `${msg.join(' ')}`

    if (config.before) config.before(line, config.container)
    config.container.appendChild(line)
    if (config.afte) config.after(line, config.container)
  }
}
