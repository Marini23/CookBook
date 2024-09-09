export const HeartIconCustom = ({
  fill = 'black',
  stroke = 'white',
  strokeWidth = 2,
}) => (
  <svg
    className="heart-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 21C12 21 6 16 4 10C4 7 6 5 8.5 5C10 5 11 6 12 7C13 6 14 5 15.5 5C18 5 20 7 20 10C18 16 12 21 12 21Z" />
  </svg>
);
