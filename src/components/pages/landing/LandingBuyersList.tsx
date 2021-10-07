import { useEffect, useState } from "react";

import Body2Medium from "src/components/text/Body2Medium";
import ColorClass from "src/types/enums/ColorClass";
import ColorValue from "src/types/enums/ColorValue";
import LandingBuyersListItem from "src/components/pages/landing/LandingBuyersListItem";
import LoadingSpinner from "src/components/loading/LoadingSpinner";
import { Maybe } from "src/types/UtilityTypes";
import PlainButton from "src/components/buttons/PlainButton";
import equalsIgnoreCase from "src/utils/equalsIgnoreCase";
import groupBy from "src/utils/groupBy";
import styles from "@/css/pages/landing/LandingBuyersList.module.css";
import swrFetcher from "src/constants/swrFetcher";
import useSWR from "swr";

const ITEMS_PER_PAGE = 100;

type Props = {
  walletAddress: string;
};

function Page({
  index,
  onClickLoadMore,
  walletAddress,
}: {
  index: number;
  onClickLoadMore?: () => void;
  walletAddress: string;
}) {
  const { data, error } = useSWR(
    `https://api.opensea.io/api/v1/events?account_address=${walletAddress}&event_type=transfer&only_opensea=false&offset=${
      index * ITEMS_PER_PAGE
    }&limit=${ITEMS_PER_PAGE}`,
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
    <>
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
      {onClickLoadMore && (data as any).asset_events.length === ITEMS_PER_PAGE && (
        <PlainButton
          className={styles.loadMoreButton}
          onClick={onClickLoadMore}
          transparent={false}
        >
          <Body2Medium>Load More</Body2Medium>
        </PlainButton>
      )}
    </>
  );
}

function LandingBuyersListInner({ walletAddress }: Props): JSX.Element {
  const [cnt, setCnt] = useState(1);
  useEffect(() => setCnt(1), [walletAddress]);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(
      <Page
        index={i}
        key={i}
        onClickLoadMore={
          i < cnt - 1 ? undefined : () => setCnt((curr) => curr + 1)
        }
        walletAddress={walletAddress}
      />
    );
  }

  return <div className={styles.container}>{pages}</div>;
}

export default function LandingBuyersList({
  walletAddress,
}: Props): Maybe<JSX.Element> {
  if (walletAddress.length === 0) {
    return null;
  }

  return <LandingBuyersListInner walletAddress={walletAddress} />;
}
