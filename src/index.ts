import { logger } from "./logger";

export function main() {
  logger.info("Hello World");
}

export const print5 = () => {
  return return5();
};

export const return5 = () => {
  return 5;
};
