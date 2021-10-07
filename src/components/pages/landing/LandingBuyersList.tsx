import LandingBuyersListItem from "src/components/pages/landing/LandingBuyersListItem";
import { Maybe } from "src/types/UtilityTypes";
import groupBy from "src/utils/groupBy";
import styles from "@/css/pages/landing/LandingBuyersList.module.css";
import swrFetcher from "src/constants/swrFetcher";
import useSWR from "swr";

type Props = {
  walletAddress: string;
};

function LandingBuyersListInner({ walletAddress }: Props): JSX.Element {
  const { data, error } = useSWR(
    `https://api.opensea.io/api/v1/events?account_address=${walletAddress}&event_type=successful&only_opensea=false&offset=0&limit=100`,
    swrFetcher
  );
  console.log("data", data);
  console.log("error", error);

  if (data == null && error == null) {
    return <div>Loading</div>;
  }

  if (error != null) {
    return <div>Error</div>;
  }

  const dataGrouped = groupBy(
    (data as any).asset_events,
    (item) => item.winner_account.address
  );
  console.log("dataGrouped", dataGrouped);

  return (
    <div className={styles.container}>
      {Object.keys(dataGrouped).map((address) => (
        <LandingBuyersListItem key={address} address={address} />
      ))}
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
