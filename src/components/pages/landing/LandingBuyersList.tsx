import Body2Medium from "src/components/text/Body2Medium";
import ColorClass from "src/types/enums/ColorClass";
import ColorValue from "src/types/enums/ColorValue";
import LandingBuyersListItem from "src/components/pages/landing/LandingBuyersListItem";
import LoadingSpinner from "src/components/loading/LoadingSpinner";
import { Maybe } from "src/types/UtilityTypes";
import equalsIgnoreCase from "src/utils/equalsIgnoreCase";
import groupBy from "src/utils/groupBy";
import styles from "@/css/pages/landing/LandingBuyersList.module.css";
import swrFetcher from "src/constants/swrFetcher";
import useSWR from "swr";

type Props = {
  walletAddress: string;
};

function LandingBuyersListInner({ walletAddress }: Props): JSX.Element {
  const { data, error } = useSWR(
    `https://api.opensea.io/api/v1/events?account_address=${walletAddress}&event_type=transfer&only_opensea=false&offset=0&limit=100`,
    swrFetcher
  );

  if (data == null && error == null) {
    return (
      <div className={styles.loadingSpinnerContainer}>
        <LoadingSpinner
          colorValue={ColorValue.Primary}
          height={24}
          width={24}
        />
      </div>
    );
  }

  if (error != null) {
    return (
      <Body2Medium colorClass={ColorClass.Primary} textAlign="center">
        An unexpected error occurred.
      </Body2Medium>
    );
  }

  const dataGrouped = groupBy(
    (data as any).asset_events,
    (item) => item.to_account.address
  );

  return (
    <div className={styles.container}>
      {Object.keys(dataGrouped).map(
        (address) =>
          !equalsIgnoreCase(address, walletAddress) && (
            <LandingBuyersListItem
              key={address}
              address={address}
              events={dataGrouped[address]}
            />
          )
      )}
    </div>
  );
}

export default function LandingBuyersList({
  walletAddress,
}: Props): Maybe<JSX.Element> {
  if (walletAddress.length === 0) {
    return null;
  }

  return <LandingBuyersListInner walletAddress={walletAddress} />;
}
