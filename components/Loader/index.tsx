export default function Loader() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
      <symbol
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        id="loader">
        <circle
          clip-rule="evenodd"
          fill="currentColor"
          fill-rule="evenodd"
          cx="110.2"
          cy="512"
          r="85">
          <animate
            attributeName="cy"
            values="512;372;512;512;512;512"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"></animate>
        </circle>
        <circle
          clip-rule="evenodd"
          fill="currentColor"
          fill-rule="evenodd"
          cx="512"
          cy="512"
          r="85">
          <animate
            attributeName="cy"
            values="512;442;372;442;512;512;512;512;512;512;512;"
            dur="1s"
            begin="0.1s"
            repeatCount="indefinite"></animate>
        </circle>
        <circle
          clip-rule="evenodd"
          fill="currentColor"
          fill-rule="evenodd"
          cx="913.8"
          cy="512"
          r="85">
          <animate
            attributeName="cy"
            values="512;372;512;512;512;512;"
            dur="1s"
            begin="0.2s"
            repeatCount="indefinite"></animate>
        </circle>
      </symbol>
      <use href="#loader"></use>
    </svg>
  )
}
