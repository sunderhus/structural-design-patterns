import { ActionLog, ScreenLog, ErrorLog } from "@/analytics";
import { Log } from "./log";

class LogStrategy implements Log {
  constructor(
    private readonly actionLog: ActionLog,
    private readonly screenLog: ScreenLog,
    private readonly errorLog: ErrorLog
  ) { }

  event(type: Log.Type, data: Log.Data) {
    switch (type) {
      case "action":
        this.actionLog.event(type, data)
        break;

      case "screen":
        this.screenLog.event(type, data)
        break;

      case "error":
        this.errorLog.event(type, data)
        this.screenLog.event(type, data)
        break;
      default:
        throw new Error('invalid type to log')
    }
  }
}

export default LogStrategy;