import BodyText from "src/components/text/BodyText";
import ColorClass from "src/types/enums/ColorClass";
import FontClass from "src/types/enums/FontClass";
import GenericInput from "src/components/input/GenericInput";
import inputStyles from "@/css/input/InputStyles.module.css";
import joinClasses from "src/utils/joinClasses";
import styles from "@/css/input/TextInput.module.css";

type Props = {
  button?: JSX.Element;
  buttonInner?: JSX.Element | boolean;
  className?: string;
  label?: string;
  labelColorClass?: ColorClass;
  labelTextTransform?: "none" | "uppercase";
  maxLength?: number;
  onChange: (val: string) => void;
  permaPlaceholder?: string | JSX.Element;
  placeholder?: string;
  showMaxLengthHint?: boolean;
  subLabel?: string;
  value: string;
};

export default function TextInput({
  button,
  buttonInner,
  className,
  label,
  labelColorClass,
  labelTextTransform = "none",
  maxLength,
  onChange,
  permaPlaceholder,
  placeholder,
  showMaxLengthHint = true,
  subLabel,
  value,
}: Props): JSX.Element {
  const hint =
    maxLength != null && showMaxLengthHint
      ? `${maxLength - (value?.length ?? 0)} characters left`
      : undefined;

  return (
    <GenericInput
      hint={hint}
      label={label}
      labelColorClass={labelColorClass}
      labelTextTransform={labelTextTransform}
      subLabel={subLabel}
    >
      <div className={styles.container}>
        {permaPlaceholder && typeof permaPlaceholder === "string" && (
          <BodyText
            className={styles.permaPlaceholder}
            fontClass={FontClass.Body1}
          >
            {permaPlaceholder}
          </BodyText>
        )}
        {permaPlaceholder && typeof permaPlaceholder !== "string" && (
          <div className={styles.permaPlaceholder}>{permaPlaceholder}</div>
        )}
        {buttonInner && (
          <div
            className={styles.buttonInner}
            style={{ right: button == null ? 16 : 48 }}
          >
            {buttonInner}
          </div>
        )}
        <div className={styles.inputContainer}>
          <input
            className={joinClasses(
              inputStyles.textInput,
              className,
              FontClass.Body1
            )}
            maxLength={maxLength}
            onChange={(e) => {
              const val = e.target.value;
              if (maxLength != null && val.length > maxLength) {
                return;
              }

              onChange(val);
            }}
            placeholder={placeholder}
            type="text"
            value={value}
          />
          {button}
        </div>
      </div>
    </GenericInput>
  );
}
