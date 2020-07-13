import { Compiler } from "webpack"
import { InvokeCallback } from "xstate"

export const createWebpackWatcher = (compiler: Compiler): InvokeCallback => (
  callback
): void => {
  compiler.hooks.invalid.tap(`file invalidation`, file => {
    console.log(`SOURCE_FILE_CHANGED`)
    callback({ type: `SOURCE_FILE_CHANGED`, file })
  })
}
