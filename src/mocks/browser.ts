import { setupWorker } from "msw/browser";
import { mockingHandler } from "./mockingHandler";

export const worker = setupWorker(...mockingHandler);
