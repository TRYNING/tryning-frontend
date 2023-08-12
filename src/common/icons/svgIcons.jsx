import { Link } from "react-router-dom";
import { PrivateRoutes } from "../constants/routes";

export function SvgHome({ size, color }) {
  return (
    <Link to={`/${PrivateRoutes.HOME}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 27 29"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="transparent"
          d="M9.7605 27H7.17366C4.31633 27 2 24.4154 2 21.2272V12.1461C2 10.1275 2.94498 8.25547 4.49214 7.20921L10.9592 2.83591C12.6074 1.72136 14.6741 1.72136 16.3223 2.83591L22.7893 7.20921C24.3365 8.25547 25.2815 10.1275 25.2815 12.1461V21.2272C25.2815 24.4154 22.9651 27 20.1078 27H17.521M9.7605 27V21.2272C9.7605 18.836 11.4977 16.8977 13.6407 16.8977C15.7838 16.8977 17.521 18.836 17.521 21.2272V27M9.7605 27H17.521"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function SvgRoutine({ size, color }) {
  return (
    <Link to={`/${PrivateRoutes.ROUTINES}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 22 28"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="transparent"
          d="M7.14286 5.42859H4.28571C3.02335 5.42859 2 6.45194 2 7.7143V23.7143C2 24.9767 3.02335 26 4.28571 26H18C19.2624 26 20.2857 24.9767 20.2857 23.7143V7.7143C20.2857 6.45194 19.2624 5.42859 18 5.42859H15.1429"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          fill="transparent"
          d="M6.57141 8.17143V6C6.57141 5.68441 6.82725 5.42857 7.14284 5.42857C7.45843 5.42857 7.71909 5.17262 7.77315 4.86169C7.94247 3.88767 8.59883 2 11.1428 2C13.6868 2 14.3432 3.88767 14.5126 4.86169C14.5666 5.17262 14.8273 5.42857 15.1428 5.42857C15.4584 5.42857 15.7143 5.68441 15.7143 6V8.17143C15.7143 8.55014 15.4073 8.85714 15.0286 8.85714H7.25713C6.87842 8.85714 6.57141 8.55014 6.57141 8.17143Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}

export function SvgCheck({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 0C2.245 0 0 2.245 0 5C0 7.755 2.245 10 5 10C7.755 10 10 7.755 10 5C10 2.245 7.755 0 5 0ZM7.39 3.85L4.555 6.685C4.485 6.755 4.39 6.795 4.29 6.795C4.19 6.795 4.095 6.755 4.025 6.685L2.61 5.27C2.465 5.125 2.465 4.885 2.61 4.74C2.755 4.595 2.995 4.595 3.14 4.74L4.29 5.89L6.86 3.32C7.005 3.175 7.245 3.175 7.39 3.32C7.535 3.465 7.535 3.7 7.39 3.85Z"
        fill="#689EE2"
      />
    </svg>
  );
}
