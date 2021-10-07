import Body1 from "src/components/text/Body1";
import CheckboxButton from "src/components/buttons/CheckboxButton";
import ChevronDownIcon from "src/components/icons/ChevronDownIcon";
import ChevronUpIcon from "src/components/icons/ChevronUpIcon";
import ColorClass from "src/types/enums/ColorClass";
import ColorValue from "src/types/enums/ColorValue";
import CopiedToast from "src/components/toast/CopiedToast";
import CopyIcon from "src/components/icons/CopyIcon";
import PlainButton from "src/components/buttons/PlainButton";
import pluralize from "src/utils/pluralize";
import shortenAddress from "src/utils/shortenAddress";
import styles from "@/css/pages/landing/LandingBuyersListItem.module.css";
import { useState } from "react";

type Props = {
  address: string;
  events: Array<any>;
};

export default function LandingBuyersListItem({
  address,
  events,
}: Props): JSX.Element {
  const [isChecked, setIsChecked] = useState(false);
  const [isToastShown, setIsToastShown] = useState(false);
  const [toastReset, setToastReset] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <CopiedToast
        isShown={isToastShown}
        reset={toastReset}
        setIsShown={setIsToastShown}
      />
      <div className={styles.row}>
        <div className={styles.rowLeft}>
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
        <PlainButton
          className={styles.rowRight}
          onClick={() => setIsExpanded((curr) => !curr)}
        >
          <Body1>
            {events.length} NFT{pluralize(events.length)} collected
          </Body1>
          {!isExpanded ? (
            <ChevronDownIcon colorValue={ColorValue.Primary} />
          ) : (
            <ChevronUpIcon colorValue={ColorValue.Primary} />
          )}
        </PlainButton>
      </div>
      {isExpanded && (
        <div className={styles.assets}>
          {events.map((event) => (
            <a href={event.asset.permalink} key={event.asset.permalink}>
              <img
                className={styles.asset}
                src={event.asset.image_url}
                alt="Asset"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
