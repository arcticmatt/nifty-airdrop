import Body1 from "src/components/text/Body1";
import CheckboxButton from "src/components/buttons/CheckboxButton";
import ColorClass from "src/types/enums/ColorClass";
import CopiedToast from "src/components/toast/CopiedToast";
import CopyIcon from "src/components/icons/CopyIcon";
import PlainButton from "src/components/buttons/PlainButton";
import shortenAddress from "src/utils/shortenAddress";
import styles from "@/css/pages/landing/LandingBuyersListItem.module.css";
import { useState } from "react";

type Props = {
  address: string;
};

export default function LandingBuyersListItem({ address }: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);
  const [toastReset, setToastReset] = useState(0);

  return (
    <div className={styles.container}>
      <CopiedToast
        isShown={isToastShown}
        reset={toastReset}
        setIsShown={setIsToastShown}
      />
      <div className={styles.row}>
        <CheckboxButton isChecked={isChecked} onChange={setIsChecked} />
        <PlainButton
          onClick={() => {
            // See https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
            navigator.clipboard.writeText(address);
            setToastReset((curr) => curr + 1);
            setIsToastShown(true);
          }}
        >
          <Body1 className={styles.address} colorClass={ColorClass.Primary}>
            {shortenAddress(address)} <CopyIcon />
          </Body1>
        </PlainButton>
      </div>
    </div>
  );
}
