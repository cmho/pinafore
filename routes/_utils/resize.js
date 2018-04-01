import debounce from 'lodash/debounce'

const DEBOUNCE_DELAY = 700

const listeners = new Set()

if (process.browser && process.env.NODE_ENV !== 'production') {
  window.resizeListeners = listeners
}

if (process.browser) {
  window.addEventListener('resize', debounce(() => {
    console.log('resize')
    listeners.forEach(listener => listener())
  }, DEBOUNCE_DELAY))
}

export function registerResizeListener (listener) {
  listeners.add(listener)
}

export function unregisterResizeListener (listener) {
  listeners.delete(listener)
}