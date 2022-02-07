import CONSTANT from './CONSTANT.js'

const config = import.meta.env

Object.assign(config, CONSTANT)

export default config
