import BackgroundColorClass from "src/types/enums/BackgroundColorClass";
import LandingBody from "src/components/pages/landing/LandingBody";
import LandingFooter from "src/components/pages/landing/LandingFooter";
import joinClasses from "src/utils/joinClasses";
import styles from "@/css/pages/landing/LandingPage.module.css";

export default function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <div
        className={joinClasses(
          styles.bodyContainer,
          BackgroundColorClass.LightBlue
        )}
      >
        <LandingBody />
      </div>
      <LandingFooter />
    </div>
  );
}
