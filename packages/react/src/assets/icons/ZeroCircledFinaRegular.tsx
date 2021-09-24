import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledFinaRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6079 16.704C13.0079 16.704 14.2799 14.856 14.2799 12.024C14.2799 9.16801 13.0319 7.34401 10.6079 7.34401C8.20786 7.34401 6.93586 9.19201 6.93586 12.024C6.93586 14.856 8.20786 16.704 10.6079 16.704ZM4.15186 21.24H10.6079C15.7919 21.24 19.8479 17.016 19.8479 12C19.8479 6.84001 15.7679 2.76001 10.6079 2.76001H4.15186V4.32001H10.6079C14.9279 4.32001 18.2879 7.68001 18.2879 12C18.2879 16.176 14.9279 19.68 10.6079 19.68H4.15186V21.24ZM8.54386 12.888V11.208C8.54386 9.26401 9.14386 8.66401 10.5839 8.66401C11.3999 8.66401 11.9519 8.85601 12.2879 9.33601L8.56786 13.536C8.54386 13.344 8.54386 13.128 8.54386 12.888ZM8.90386 14.712L12.6479 10.488C12.6719 10.704 12.6719 10.944 12.6719 11.208V12.888C12.6719 14.808 12.0239 15.408 10.5839 15.408C9.76786 15.408 9.23986 15.216 8.90386 14.712Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledFinaRegular;
