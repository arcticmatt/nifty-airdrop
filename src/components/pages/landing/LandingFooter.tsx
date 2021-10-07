import BackgroundColorClass from "src/types/enums/BackgroundColorClass";
import GlobalClass from "src/types/enums/GlobalClass";
import Image from "next/image";
import cloudFooter from "public/images/cloud-footer.svg";
import joinClasses from "src/utils/joinClasses";
import pigeonLeft from "public/images/pigeon-left.png";
import pigeonRight from "public/images/pigeon-right.png";
import styles from "@/css/pages/landing/LandingFooter.module.css";

export default function LandingFooter(): JSX.Element {
  return (
    <div
      className={joinClasses(BackgroundColorClass.LightBlue, styles.container)}
    >
      <div className={GlobalClass.HideText}>
        <div className={styles.cloudContainer}>
          <Image src={cloudFooter} layout="responsive" />
        </div>
        <div className={styles.pigeonLeftContainer}>
          <Image src={pigeonLeft} />
        </div>
        <div className={styles.pigeonRightContainer}>
          <Image src={pigeonRight} />
        </div>
      </div>
    </div>
  );
}
