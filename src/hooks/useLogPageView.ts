import AmplitudeEvent from "src/types/enums/AmplitudeEvent";
import getAmplitude from "src/utils/amplitude/getAmplitude";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

export default function useLogPageView(props?: { [key: string]: string }) {
  const router = useRouter();
  useEffect(() => {
    const amplitude = getAmplitude();
    amplitude.logEvent(AmplitudeEvent.PageView, {
      asPath: router.asPath,
      origin: window.self.origin,
      pathname: router.pathname,
      ...props,
    });
  }, [props, router.asPath, router.pathname]);
}
