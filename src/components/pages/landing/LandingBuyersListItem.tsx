import Body1 from "src/components/text/Body1";
import CheckboxButton from "src/components/buttons/CheckboxButton";
import shortenAddress from "src/utils/shortenAddress";
import styles from "@/css/pages/landing/LandingBuyersListItem.module.css";
import { useState } from "react";

type Props = {
  address: string;
};

export default function LandingBuyersListItem({ address }: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <CheckboxButton isChecked={isChecked} onChange={setIsChecked} />
        <Body1>{shortenAddress(address)}</Body1>
      </div>
    </div>
  );
}
