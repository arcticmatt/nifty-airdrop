import Body2Medium from "src/components/text/Body2Medium";
import ColorClass from "src/types/enums/ColorClass";
import GlobalClass from "src/types/enums/GlobalClass";
import Image from "next/image";
import cloudFooter from "public/images/cloud-footer.svg";
import joinClasses from "src/utils/joinClasses";
import pigeonLeft from "public/images/pigeon-left.png";
import pigeonRight from "public/images/pigeon-right.png";
import styles from "@/css/pages/landing/LandingFooter.module.css";

function Link({
  children,
  href,
}: {
  children: any;
  href: string;
}): JSX.Element {
  return (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
}

export default function LandingFooter(): JSX.Element {
  return (
    <>
      <div className={styles.padding} />
      <div className={styles.container}>
        <div
          className={joinClasses(styles.cloudContainer, GlobalClass.HideText)}
        >
          <Image src={cloudFooter} layout="responsive" />
        </div>
        <div className={styles.pigeonLeftContainer}>
          <Image src={pigeonLeft} />
        </div>
        <div className={styles.pigeonRightContainer}>
          <Image src={pigeonRight} />
        </div>
        <Body2Medium
          className={styles.text}
          colorClass={ColorClass.Primary}
          textAlign="center"
        >
          a little tool for crypto artists, created with 💖 by{" "}
          <Link href="https://twitter.com/petrichorate">Kat</Link> &{" "}
          <Link href="https://twitter.com/pencilflip">Matt</Link>
          <br />
          <br />
          <Body2Medium colorClass={ColorClass.Secondary}>
            suggestions or feedback?{" "}
            <Link href="https://twitter.com/pencilflip">tweet</Link> us!
          </Body2Medium>
        </Body2Medium>
      </div>
    </>
  );
}
