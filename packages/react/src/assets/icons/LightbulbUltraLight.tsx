import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LightbulbUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.19206 18V21.48H14.8081V18C14.8081 16.776 15.1681 16.128 16.3441 14.808L16.9201 14.136C18.1921 12.648 18.8881 11.136 18.8881 9.336C18.8881 5.28 15.6481 2.52 12.0001 2.52C8.35206 2.52 5.11206 5.28 5.11206 9.336C5.11206 11.136 5.80806 12.648 7.08006 14.136L7.65606 14.808C8.83206 16.128 9.19206 16.776 9.19206 18ZM5.95206 9.336C5.95206 5.736 8.78406 3.336 12.0001 3.336C15.2161 3.336 18.0481 5.736 18.0481 9.336C18.0481 10.92 17.4481 12.264 16.2961 13.584L15.6961 14.256C14.4961 15.648 13.9921 16.512 13.9681 18.096H12.4081V12.504H11.5921V18.096H10.0321C10.0081 16.512 9.50406 15.648 8.30406 14.256L7.70406 13.584C6.55206 12.264 5.95206 10.92 5.95206 9.336ZM10.0321 20.664V18.864H13.9681V20.664H10.0321Z"
        fill={color}
      />
    </svg>
  );
}

export default LightbulbUltraLight;
