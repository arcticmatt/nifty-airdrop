import LandingPage from "src/components/pages/landing";
import useLogPageView from "src/hooks/useLogPageView";

export default function Home() {
  useLogPageView();

  return <LandingPage />;
}
