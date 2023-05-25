import { logger } from "./logger"

export function main() {
  logger.info('Hello World')
}


export function print5() {
  return return5();
}

export function return5() {
  return 5
}
