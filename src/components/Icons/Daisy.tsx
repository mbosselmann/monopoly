export default function Daisy() {
  const description =
    '"Pixel Art" by "Florian Körner", licensed under "CC0 1.0". / Remix of the original. - Created with dicebear.com';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      shape-rendering="crispEdges"
      width="512"
      height="512"
    >
      <desc>{description}</desc>
      <mask id="viewboxMask">
        <rect width="16" height="16" rx="0" ry="0" x="0" y="0" fill="#fff" />
      </mask>
      <g mask="url(#viewboxMask)">
        <g transform="translate(0 8)">
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H9v1h4v1h1v2H2v-2h1v-1h4v-1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#a26d3d"
          />
          <path
            d="M4 2h8v1h1v3h1v2h-1v3h-1v1H4v-1H3V8H2V6h1V3h1V2Z"
            fill="#fff"
            fill-opacity=".1"
          />
          <path d="M4 13h1v2h6v-2h1v2h1v1H3v-1h1v-2Z" fill="#d11141" />
          <path fill="#fff" fill-opacity=".2" d="M4 13h1v2H4zM11 13h1v2h-1z" />
          <path d="M10 5h1v2H9V6h1V5ZM5 5h1v2H4V6h1V5Z" fill="#fff" />
          <path fill="#876658" d="M11 6h-1v1h1zM6 6H5v1h1z" />
          <path d="M9 9v1H7v1H6v-1h1V9h2Z" fill="#de0f0d" />
          <path
            d="M4 0H1v3h2v1H2v2h1V5h2V4h1V3h5v1h1v1h1v1h1V3h-1V2h-1V1H6v1H4V0ZM2 8h1v1H2V8ZM14 8h-1v1h1V8Z"
            fill="#bd1700"
          />
        </g>
      </g>
    </svg>
  );
}
