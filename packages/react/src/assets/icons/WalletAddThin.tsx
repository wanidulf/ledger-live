import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function WalletAddThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2399 19.2H21.1199V6.47999H6.59988V6.95999H20.6399V18.72H12.2399V19.2ZM2.87988 16.8H6.71988V20.64H7.19988V16.8H11.0399V16.32H7.19988V12.48H6.71988V16.32H2.87988V16.8ZM3.35988 11.76H3.83988V5.27999C3.83988 4.36799 4.36788 3.83999 5.27988 3.83999H19.0559C18.7199 3.52799 18.2639 3.35999 17.7599 3.35999H5.27988C4.17588 3.35999 3.35988 4.17599 3.35988 5.27999V11.76ZM15.7199 12.936C15.7199 13.392 16.1039 13.8 16.5839 13.8C17.0159 13.8 17.3999 13.392 17.3999 12.936C17.3999 12.504 17.0159 12.12 16.5839 12.12C16.1039 12.12 15.7199 12.504 15.7199 12.936Z"
        fill={color}
      />
    </svg>
  );
}

export default WalletAddThin;
