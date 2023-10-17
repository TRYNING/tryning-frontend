import { Link } from "react-router-dom";
import { PrivateRoutes } from "@common/constants/routes";

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

export function SvgUsers({ size }) {
  return (
    <Link to={`/${PrivateRoutes.ROUTINES}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 24.1819V22.8182C1 17.5464 5.27365 13.2728 10.5455 13.2728C15.8173 13.2728 20.0909 17.5464 20.0909 22.8182V24.1819"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M17.3638 16.0001C17.3638 12.2345 20.4164 9.18188 24.182 9.18188C27.9475 9.18188 31.0001 12.2345 31.0001 16.0001V16.6819"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M10.5455 13.2727C13.5579 13.2727 16 10.8305 16 7.81813C16 4.80567 13.5579 2.36359 10.5455 2.36359C7.53302 2.36359 5.09094 4.80567 5.09094 7.81813C5.09094 10.8305 7.53302 13.2727 10.5455 13.2727Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.1819 9.18182C26.4413 9.18182 28.2728 7.35025 28.2728 5.09091C28.2728 2.83157 26.4413 1 24.1819 1C21.9224 1 20.0909 2.83157 20.0909 5.09091C20.0909 7.35025 21.9224 9.18182 24.1819 9.18182Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
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

export function SvgAnalytics({ size }) {
  return (
    <Link to={`/${PrivateRoutes.ANALYTICS}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 3L14 9L10 5L3 11M4.5 21C3.67157 21 3 20.3284 3 19.5V17.5C3 16.6716 3.67157 16 4.5 16C5.32843 16 6 16.6716 6 17.5V19.5C6 20.3284 5.32843 21 4.5 21ZM11.5 21C10.6716 21 10 20.3284 10 19.5V14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5V19.5C13 20.3284 12.3284 21 11.5 21ZM18.5 21C17.6716 21 17 20.3284 17 19.5V16.5C17 15.6716 17.6716 15 18.5 15C19.3284 15 20 15.6716 20 16.5V19.5C20 20.3284 19.3284 21 18.5 21Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
}

export function SvgMenu({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="#111"
      viewBox="0 0 32 32"
    >
      <g id="_118_menu-04" data-name="118 menu-04">
        <rect x="4" y="24" width="16" height="2" />
        <rect x="4" y="6" width="24" height="2" />
        <rect x="4" y="15" width="24" height="2" />
      </g>
    </svg>
  );
}

export function SvgLupa({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#111"
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <title />

      <g id="search">
        <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
      </g>
    </svg>
  );
}

export function SvgSearch({ className }) {
  return (
    <svg className={className} x="0px" y="0px" viewBox="0 0 50 50">
      <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
    </svg>
  );
}

export function SvgDelete({ className }) {
  <svg className={className} x="0px" y="0px" viewBox="0 0 24 24">
    <path d="M11 0.7H13V23.3H11z" transform="rotate(-45.001 12 12)"></path>
    <path d="M0.7 11H23.3V13H0.7z" transform="rotate(-45.001 12 12)"></path>
  </svg>;
}
