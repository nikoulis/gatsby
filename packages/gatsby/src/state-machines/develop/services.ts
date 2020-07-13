import {
  IBuildContext,
  startWebpackServer,
  initialize,
  recompile,
} from "../../services"
import { dataLayerMachine } from "../data-layer"
import { queryRunningMachine } from "../query-running"
import { waitingMachine } from "../waiting"
import { ServiceConfig } from "xstate"

export const developServices: Record<string, ServiceConfig<IBuildContext>> = {
  initializeDataLayer: dataLayerMachine,
  initialize,
  runQueries: queryRunningMachine,
  waitForMutations: waitingMachine,
  startWebpackServer,
  recompile,
}
