const log = console.log.bind(console)
const e = (sel) =>  document.querySelector(sel)
const canvas = e('#id-canvas')
const context = canvas.getContext('2d')
const randomBetween = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min }
