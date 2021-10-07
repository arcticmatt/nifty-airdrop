import BackgroundColorClass from "src/types/enums/BackgroundColorClass";
import emptyFunction from "src/utils/emptyFunction";
import joinClasses from "src/utils/joinClasses";
import styles from "@/css/toast/GenericToast.module.css";
import { useEffect } from "react";

type Props = {
  backgroundColorClass: BackgroundColorClass;
  children: any;
  isShown: boolean;
  // Should initially pass 0
  reset: number;
  setIsShown: (val: boolean) => void;
  timeShownMs?: number;
};

export default function GenericToast({
  backgroundColorClass,
  children,
  isShown,
  reset,
  setIsShown,
  timeShownMs = 1000,
}: Props) {
  useEffect(() => {
    if (!isShown) {
      return emptyFunction;
    }

    const timerId = setTimeout(() => setIsShown(false), timeShownMs);
    return () => clearTimeout(timerId);
  }, [isShown, reset, setIsShown, timeShownMs]);

  return (
    <div
      className={joinClasses(
        styles.container,
        isShown ? styles.containerFadeIn : styles.containerFadeOut,
        reset === 0 ? styles.hidden : null,
        backgroundColorClass
      )}
    >
      {children}
    </div>
  );
}
