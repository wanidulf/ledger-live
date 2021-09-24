import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoFirmwareUpdateLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.64014 21.24H21.3601V14.928H2.66414L2.64014 21.24ZM3.72014 20.16L3.74414 16.008H10.9201C10.3681 16.512 10.0321 17.256 10.0321 18.072C10.0321 18.888 10.3681 19.632 10.9201 20.16H3.72014ZM7.65614 8.73601L12.0001 13.08L16.3441 8.73601L15.5761 7.96801L14.1601 9.40801C13.6321 9.91201 13.1041 10.464 12.5761 11.016V2.76001H11.4241V11.04C10.8961 10.488 10.3681 9.93601 9.84014 9.40801L8.40014 7.96801L7.65614 8.73601ZM11.1121 18.072C11.1121 16.944 12.0481 16.008 13.1281 16.008H20.2801V20.16H13.1281C12.0481 20.16 11.1121 19.224 11.1121 18.072ZM12.1201 18.096C12.1201 18.72 12.6481 19.248 13.2721 19.248C13.9201 19.248 14.4481 18.72 14.4481 18.096C14.4481 17.448 13.9201 16.92 13.2721 16.92C12.6481 16.92 12.1201 17.448 12.1201 18.096Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoFirmwareUpdateLight;
