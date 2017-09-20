import Vue from 'vue'

Vue.filter('capitalize',
  value => {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
)

Vue.filter('firstLetter',
  value => {
    if (value) {
      return value.charAt(0)
    }
  }
)

Vue.filter('truncate',
  (value, length) => {
    if (value) {
      return (value.length > length) ? value.substr(0, length - 1) + '...' : value
    }
  }
)

Vue.filter('uppercase',
  value => {
    if (value) {
      return value.toUpperCase()
    }
  }
)

Vue.filter('formatStatus',
  value => {
    if (value) {
      let status = ''
      switch (value) {
        case 'wip':
          status = 'Work in progress'
          break
        default:
          status = value
      }
      return status
    }
  }
)

Vue.filter('formatRefine',
  value => {
    if (value) {
      let option = ''
      switch (value) {
        case 'ico':
          option = 'ICO'
          break
        default:
          option = value
      }
      return option
    }
  }
)

Vue.filter('additionalAuthorsCount',
  value => {
    if (value) {
      let count = value.split(',').length
      if (count > 0) {
        count = '+' + count
      } else {
        count = ''
      }
      return count
    }
  }
)