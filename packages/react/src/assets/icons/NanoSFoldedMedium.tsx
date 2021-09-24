import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoSFoldedMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.91992 21.3599H17.9519C20.2079 21.3599 22.0799 19.4879 22.0799 17.2079C22.0799 16.1519 21.6959 15.1439 20.9999 14.4239L15.8159 9.21589L16.4639 8.56789L14.7599 6.86389L14.1119 7.51189L12.1919 5.61589L12.8639 4.94389L11.1599 3.23989L10.4879 3.91189L9.23992 2.63989L3.50392 8.37589L8.23192 13.0799H1.91992V21.3599ZM3.71992 19.5599V14.8799H17.9519C19.2239 14.8799 20.2799 15.9359 20.2799 17.2079C20.2799 18.5039 19.2239 19.5599 17.9519 19.5599H3.71992ZM6.04792 8.37589L9.23992 5.18389L17.1119 13.0799H16.3919H10.7759L6.04792 8.37589ZM16.5599 17.2079C16.5599 17.8799 17.1119 18.4799 17.8319 18.4799C18.5279 18.4799 19.0799 17.8799 19.0799 17.2079C19.0799 16.5119 18.5279 15.9599 17.8319 15.9599C17.1119 15.9599 16.5599 16.5119 16.5599 17.2079Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoSFoldedMedium;
