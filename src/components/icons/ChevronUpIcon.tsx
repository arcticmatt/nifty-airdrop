import ColorValue from "src/types/enums/ColorValue";

type Props = {
  colorValue: ColorValue;
};

export default function ChevronUpIcon({ colorValue }: Props): JSX.Element {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 15L12 9L18 15"
        stroke={colorValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
