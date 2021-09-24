import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function StorageMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 21.3599C17.2321 21.3599 21.3601 19.6319 21.3601 16.7759V7.17589C21.3601 4.34389 17.3761 2.63989 12.0001 2.63989C6.79214 2.63989 2.64014 4.31989 2.64014 7.17589V16.7759C2.64014 19.6319 6.67214 21.3599 12.0001 21.3599ZM4.56014 16.7759V14.8799C6.21614 15.9599 8.88014 16.5599 12.0001 16.5599C15.0721 16.5599 17.7601 15.9599 19.4401 14.8799V16.7759C19.4401 18.3599 16.6561 19.5359 12.0001 19.5359C7.27214 19.5359 4.56014 18.3599 4.56014 16.7759ZM4.56014 10.0319C6.21614 11.1119 8.88014 11.6879 12.0001 11.6879C15.0721 11.6879 17.7601 11.0879 19.4401 10.0079V12.0479C19.4401 13.5359 16.6321 14.7599 12.0001 14.7599C7.29614 14.7599 4.58414 13.5599 4.58414 12.0479L4.56014 10.0319ZM4.58414 7.17589C4.56014 5.61589 7.36814 4.43989 12.0001 4.43989C16.8001 4.43989 19.4401 5.61589 19.4401 7.17589C19.4401 8.68789 16.6321 9.88789 12.0001 9.88789C7.29614 9.88789 4.58414 8.71189 4.58414 7.17589Z"
        fill={color}
      />
    </svg>
  );
}

export default StorageMedium;
