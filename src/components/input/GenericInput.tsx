import BodyText from "src/components/text/BodyText";
import ColorClass from "src/types/enums/ColorClass";
import FontClass from "src/types/enums/FontClass";
import styles from "@/css/input/GenericInput.module.css";

type Props = {
  // input element
  children: JSX.Element | Array<JSX.Element>;
  description?: string;
  descriptionFontClass?: FontClass;
  hint?: string;
  hintColorClass?: ColorClass;
  hintLengthIndicatorFontClass?: FontClass;
  label?: string;
  labelColorClass?: ColorClass;
  labelFontClass?: FontClass;
  labelTextTransform?: "none" | "uppercase";
  subLabel?: string;
  subLabelFontClass?: FontClass;
};

export default function GenericInput({
  children,
  description,
  descriptionFontClass = FontClass.Body1,
  label,
  labelColorClass = ColorClass.Primary,
  labelFontClass = FontClass.Body1,
  labelTextTransform = "none",
  hint,
  hintColorClass = ColorClass.Secondary,
  hintLengthIndicatorFontClass = FontClass.Body2,
  subLabel,
  subLabelFontClass = FontClass.Body2,
}: Props): JSX.Element {
  return (
    <div>
      {(label != null || subLabel != null) && (
        <div className={styles.labels}>
          {label != null && (
            <BodyText
              className={styles.label}
              colorClass={labelColorClass}
              fontClass={labelFontClass}
              textTransform={labelTextTransform}
            >
              {label}
            </BodyText>
          )}
          {subLabel != null && (
            <BodyText
              colorClass={labelColorClass}
              fontClass={subLabelFontClass}
            >
              {subLabel}
            </BodyText>
          )}
        </div>
      )}
      {description != null && (
        <BodyText
          className={styles.description}
          fontClass={descriptionFontClass}
        >
          {description}
        </BodyText>
      )}
      {children}
      {hint != null && (
        <BodyText
          className={styles.hint}
          colorClass={hintColorClass}
          fontClass={hintLengthIndicatorFontClass}
        >
          {hint}
        </BodyText>
      )}
    </div>
  );
}
