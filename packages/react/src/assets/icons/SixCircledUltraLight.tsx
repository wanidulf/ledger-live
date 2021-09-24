import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SixCircledUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21C17.04 21 21 16.896 21 12C21 6.96 17.04 3 12 3C6.96 3 3 6.96 3 12C3 17.04 6.96 21 12 21ZM3.84 12C3.84 7.416 7.44 3.84 12 3.84C16.584 3.84 20.16 7.416 20.16 12C20.16 16.44 16.584 20.16 12 20.16C7.44 20.16 3.84 16.56 3.84 12ZM8.568 12.144C8.592 15 9.84 16.704 11.976 16.704C13.776 16.704 15.048 15.384 15.048 13.608C15.048 11.832 13.776 10.512 12.048 10.512C10.824 10.512 9.84 11.232 9.48 12.288H9.384C9.312 10.008 9.84 8.112 12.024 8.112C13.272 8.112 14.04 8.76 14.232 10.008H15.024C14.808 8.376 13.656 7.344 12.024 7.344C9.816 7.344 8.544 9.216 8.568 12.144ZM9.672 13.704V13.488C9.672 12.144 10.488 11.28 11.904 11.28H12C13.416 11.28 14.232 12.12 14.232 13.488V13.704C14.232 15.072 13.416 15.912 12 15.912H11.904C10.464 15.912 9.672 14.952 9.672 13.704Z"
        fill={color}
      />
    </svg>
  );
}

export default SixCircledUltraLight;
