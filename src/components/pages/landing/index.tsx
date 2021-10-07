import LandingBody from "src/components/pages/landing/LandingBody";
import swrFetcher from "src/constants/swrFetcher";
import useSWR from "swr";

export default function LandingPage(): JSX.Element {
  const { data, error } = useSWR(
    "https://api.opensea.io/api/v1/events?account_address=0x8132769461c1272bed6946c8355696a5bc1da438&only_opensea=false&offset=0&limit=20",
    swrFetcher
  );

  console.log("data", data);

  return <LandingBody />;
}
