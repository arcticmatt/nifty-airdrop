import BackgroundColorClass from "src/types/enums/BackgroundColorClass";
import Body1 from "src/components/text/Body1";
import Body2Medium from "src/components/text/Body2Medium";
import ColorClass from "src/types/enums/ColorClass";
import Image from "next/image";
import LandingBuyersList from "src/components/pages/landing/LandingBuyersList";
import ResponsiveContainer from "src/components/ResponsiveContainer";
import TextInput from "src/components/input/TextInput";
import cloud from "public/images/cloud.svg";
import logo from "public/images/logo.svg";
import styles from "@/css/pages/landing/LandingBody.module.css";
import { useDebounce } from "use-debounce";
import { useState } from "react";

export default function LandingBody(): JSX.Element {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletAddressDebounced] = useDebounce(walletAddress, 500);

  return (
    <div className={BackgroundColorClass.LightBlue}>
      <ResponsiveContainer>
        <div className={styles.containerInner}>
          <div className={styles.logoAndCloud}>
            <div className={styles.cloud}>
              <Image src={cloud} />
            </div>
            <Image src={logo} />
          </div>
          <Body1
            className={styles.title}
            colorClass={ColorClass.Primary}
            textAlign="center"
          >
            Get a list of everyone who has collected your NFTs* so you can
            airdrop them a thank you!
          </Body1>
          <Body2Medium
            className={styles.subtitle}
            colorClass={ColorClass.Secondary}
            textAlign="center"
          >
            *right now only includes Ethereum-based NFTs on Opensea
          </Body2Medium>
          <Body1
            className={styles.walletAddressTitle}
            colorClass={ColorClass.Primary}
            textAlign="center"
          >
            Enter your wallet address:
          </Body1>
          <div className={styles.inputContainer}>
            <TextInput
              onChange={setWalletAddress}
              placeholder="0x1234..."
              value={walletAddress}
            />
          </div>
          <div className={styles.buyersListContainer}>
            <LandingBuyersList walletAddress={walletAddressDebounced} />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
