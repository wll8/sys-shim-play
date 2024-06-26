export type RunCodeType = 'browser' | 'node' | 'native'
export interface ICode {
  browser?: string
  node?: string
  native?: string
}

export interface IExecInfo {
  type: 'browser' | 'node' | 'native'
  env: {
    'node-sys.js'?: string
    'browser-sys.js'?: string
    'main.exe'?: string
  }
  code: ICode
}
