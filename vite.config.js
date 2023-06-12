import {defineConfig, loadEnv} from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import * as path from 'path'
import pack from './package.json'

let base = ''

export default ({mode}) => {
  const env = loadEnv(mode, process.cwd())
  switch (env.VITE_MODE) {
    case 'development':
      base = '//static-cs.ruubypay.com'
      break
    case 'test':
      base = '//static-ft.ruubypay.com'
      break
    case 'release':
      base = '//static.ruubypay.com'
      break
  }

  let options = {
    // base: `${base}/${pack.name}`,
    plugins: [
      uni(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
  }

  return defineConfig(options)
}

