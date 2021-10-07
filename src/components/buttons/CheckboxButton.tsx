import CheckboxBlankIcon from "src/components/icons/CheckboxBlankIcon";
import CheckboxFilledIcon from "src/components/icons/CheckboxFilledIcon";
import { memo } from "react";
import styles from "@/css/buttons/CheckboxButton.module.css";

type Props = {
  isChecked?: boolean;
  onChange: (isChecked: boolean, shiftKey: boolean) => void;
};

function CheckboxButton({ isChecked = false, onChange }: Props) {
  return (
    <button
      className={styles.checkboxButton}
      onClick={(e) => {
        onChange(!isChecked, e.shiftKey);
      }}
      type="button"
    >
      {isChecked ? <CheckboxFilledIcon /> : <CheckboxBlankIcon />}
    </button>
  );
}

export default memo(CheckboxButton);
