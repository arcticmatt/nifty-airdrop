import { AmplitudeClient } from "amplitude-js";
import { Maybe } from "src/types/UtilityTypes";
import isProd from "src/utils/isProd";

let amplitude: any = null;
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  amplitude = require("amplitude-js");
}

let amplitudeInstance: Maybe<AmplitudeClient> = null;

export default function getAmplitude(): AmplitudeClient {
  if (amplitudeInstance != null) {
    return amplitudeInstance;
  }

  amplitudeInstance = amplitude.getInstance();
  amplitudeInstance!.init("7ff00c3bf63abe4ee6a66a4798cb3601");
  if (!isProd()) {
    amplitudeInstance!.setDeviceId("DEV");
  }
  return amplitudeInstance!;
}
