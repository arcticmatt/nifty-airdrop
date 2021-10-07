import BackgroundColorClass from "src/types/enums/BackgroundColorClass";
import Body2Medium from "src/components/text/Body2Medium";
import GenericToast from "src/components/toast/GenericToast";
import styles from "@/css/toast/CopiedToast.module.css";

type Props = {
  isShown: boolean;
  // Should initially pass 0
  reset: number;
  setIsShown: (val: boolean) => void;
};

export default function CopiedToast({ isShown, reset, setIsShown }: Props) {
  return (
    <GenericToast
      backgroundColorClass={BackgroundColorClass.Primary}
      isShown={isShown}
      reset={reset}
      setIsShown={setIsShown}
      timeShownMs={1000}
    >
      <div className={styles.body}>
        <Body2Medium className={styles.text}>Copied!</Body2Medium>
      </div>
    </GenericToast>
  );
}
