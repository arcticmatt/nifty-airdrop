import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

import GlobalClass from "src/types/enums/GlobalClass";
import deleteProperty from "src/utils/deleteProperty";
import joinClasses from "src/utils/joinClasses";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & { hideText?: boolean; transparent?: boolean };

const PlainButton = forwardRef<HTMLButtonElement, Props>(
  (props: Props, ref) => (
    // eslint-disable-next-line react/button-has-type
    <button
      {...deleteProperty(deleteProperty(props, "hideText"), "transparent")}
      className={joinClasses(
        GlobalClass.PlainButton,
        props.className,
        props.hideText === true ? GlobalClass.HideText : null
      )}
      ref={ref}
      style={{
        ...(props.transparent == null || props.transparent
          ? { backgroundColor: "transparent" }
          : {}),
        ...props.style,
      }}
      // eslint-disable-next-line react/button-has-type
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  )
);

export default PlainButton;
