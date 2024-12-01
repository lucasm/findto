const grayTransparent = {
  fill: 'var(--color-black-translucent)',
}
const gray = {
  fill: 'var(--color-gray)',
}
const white = {
  fill: 'var(--color-bg-white)',
}
const black = {
  fill: 'var(--color-text-black)',
}

interface Props {
  type: 'people' | 'search' | 'phone'
  color?: string
}

const SvgIllustrations = (props: Props): JSX.Element => {
  const SvgPeople = () => (
    <svg viewBox="0 0 808.47 567.04" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M445.656 382.188C442.465 382.226 439.263 382.578 436.094 383.219L435.094 383.406C424.454 385.806 414.953 391.754 409.562 401.344C399.852 418.584 405.646 439.935 410.406 459.125C415.166 478.315 417.748 501.277 403.938 515.438C408.057 503.387 405.365 490.054 396.875 480.562C388.385 471.071 375.433 466.899 363 469.656C362.98 469.66 362.957 469.652 362.938 469.656C365.748 473.505 368.219 477.593 370.312 481.875C377.834 497.142 380.235 514.45 377.156 531.188C374.823 543.465 369.69 555.03 362.156 565C361.646 565.68 361.154 566.35 360.594 567L386.312 567C388.661 566.408 391.003 565.749 393.312 565.031C398.9 563.291 404.354 561.166 409.625 558.625C423.024 552.276 434.653 542.71 443.5 530.812C453.01 517.712 457.155 502 457.875 486C458.635 468.87 456.41 451.42 452.5 434.75C448.51 417.664 442.449 401.141 434.438 385.531C434.097 384.807 434.377 383.943 435.062 383.531C435.357 383.336 435.715 383.277 436.062 383.344C436.4 383.43 436.67 383.651 436.812 383.969C437.813 385.899 438.798 387.831 439.688 389.781C447.447 406.039 453.156 423.21 456.688 440.875C460.128 457.795 462.008 475.61 460.188 493C459.398 501.455 457.377 509.755 454.188 517.625C451.237 524.588 447.266 531.082 442.406 536.875C432.476 548.825 419.333 557.801 405.062 563.781C404.023 564.221 402.966 564.631 401.906 565.031C400.097 565.739 398.276 566.389 396.438 567L444.281 567C446.121 566.39 447.919 565.72 449.719 565C456.591 562.28 463.119 558.713 469.125 554.406C500.545 531.756 512.617 489.008 507.188 450.688C503.798 426.838 493.36 402.508 473 389.688C464.711 384.647 455.23 382.072 445.656 382.188ZM359.938 470.438C357.614 471.117 355.362 472.068 353.25 473.25C336.96 482.34 330.369 503.281 332.719 521.781C334.679 537.191 341.599 551.36 349.219 565C349.599 565.67 349.964 566.34 350.344 567L356.875 567C357.445 566.35 358.033 565.68 358.562 565C380.776 537.575 381.32 498.514 359.938 470.438Z"
        style={grayTransparent}
      />
      <path
        d="M42.47 283C19.274 283 0.47 264.196 0.47 241C0.47 217.804 19.274 199 42.47 199C65.666 199 84.47 217.804 84.47 241C84.47 264.196 65.666 283 42.47 283ZM42.47 201C20.3786 201 2.47 218.909 2.47 241C2.47 263.091 20.3786 281 42.47 281C64.5614 281 82.47 263.091 82.47 241C82.47 218.909 64.5614 201 42.47 201Z"
        style={black}
      />
      <path
        d="M212.47 148C189.274 148 170.47 129.196 170.47 106C170.47 82.804 189.274 64 212.47 64C235.666 64 254.47 82.804 254.47 106L254.47 106C254.47 129.196 235.666 148 212.47 148ZM212.47 66C190.379 66 172.47 83.9086 172.47 106C172.47 128.091 190.379 146 212.47 146C234.561 146 252.47 128.091 252.47 106C252.47 83.9086 234.561 66 212.47 66Z"
        style={black}
      />
      <path
        d="M394.47 84C371.274 84 352.47 65.196 352.47 42C352.47 18.804 371.274 4.26103e-15 394.47 0C417.666 0 436.47 18.804 436.47 42C436.47 65.196 417.666 84 394.47 84ZM394.47 2C372.379 2 354.47 19.9086 354.47 42C354.47 64.0914 372.379 82 394.47 82C416.561 82 434.47 64.0914 434.47 42C434.47 19.9086 416.561 2 394.47 2Z"
        style={black}
      />
      <path
        d="M588.47 150C565.274 150 546.47 131.196 546.47 108C546.47 84.804 565.274 66 588.47 66C611.666 66 630.47 84.804 630.47 108C630.47 131.196 611.666 150 588.47 150ZM588.47 68C566.379 68 548.47 85.9086 548.47 108C548.47 130.091 566.379 148 588.47 148C610.561 148 628.47 130.091 628.47 108C628.47 85.9086 610.561 68 588.47 68Z"
        style={black}
      />
      <path
        d="M766.47 251C743.274 251 724.47 232.196 724.47 209C724.47 185.804 743.274 167 766.47 167C789.666 167 808.47 185.804 808.47 209C808.47 232.196 789.666 251 766.47 251ZM766.47 169C744.379 169 726.47 186.909 726.47 209C726.47 231.091 744.379 249 766.47 249C788.561 249 806.47 231.091 806.47 209C806.47 186.909 788.561 169 766.47 169Z"
        style={black}
      />
      <path
        d="M555.8 539.63L566.81 545.03L592.86 505.14L576.61 497.17L555.8 539.63Z"
        style={gray}
      />
      <path
        d="M554.75 534.66L576.43 545.29L576.43 545.29C584.062 549.029 587.218 558.247 583.48 565.88L583.48 565.88L583.26 566.33L547.76 548.93L554.75 534.66Z"
        style={black}
      />
      <path
        d="M664.89 558.44L677.15 558.44L682.99 511.15L664.89 511.15L664.89 558.44Z"
        style={gray}
      />
      <path
        d="M661.77 550.44L685.91 550.44C694.41 550.44 701.3 557.33 701.3 565.83L701.3 565.83L701.3 566.33L661.77 566.33L661.77 550.44Z"
        style={black}
      />
      <path
        d="M614 207.53C614 193.966 624.996 182.97 638.56 182.97C652.124 182.97 663.12 193.966 663.12 207.53C663.12 221.094 652.124 232.09 638.56 232.09C624.996 232.09 614 221.094 614 207.53Z"
        style={gray}
      />
      <path
        d="M663 542.85C660.589 542.852 658.607 540.949 658.51 538.54L649 412.18C648.978 411.357 648.293 410.708 647.47 410.73L647.47 410.73C646.932 410.751 646.445 411.055 646.19 411.53L585.46 527.53C584.316 529.696 581.652 530.553 579.46 529.46L562.54 521C560.348 519.881 559.458 517.211 560.54 515L596.78 441.57L620.78 386.57C630.05 368.33 639.89 358.92 650.86 357.82C662.12 356.7 674.14 364.44 687.62 381.49L687.73 381.63L687.73 381.81L685.73 536.16C685.739 538.486 683.967 540.432 681.65 540.64L663.48 542.9L663 542.85Z"
        style={black}
      />
      <path
        d="M612.64 395.38C617.689 392.261 619.256 385.641 616.14 380.59C615.81 380.051 615.428 379.545 615 379.08L618.71 281.22L600.71 283.46L599.19 378.66C595.336 382.565 595.023 388.74 598.462 393.015C601.901 397.291 607.999 398.308 612.64 395.38Z"
        style={gray}
      />
      <path
        d="M624 298.52L599.83 295.77C597.19 295.472 595.292 293.09 595.59 290.45L595.59 290.45C595.614 290.217 595.657 289.986 595.72 289.76L602 266.31C603.034 259.135 609.594 254.089 616.794 254.929C623.994 255.769 629.215 262.19 628.57 269.41L629.4 293.57C629.501 296.229 627.429 298.467 624.77 298.57L624.77 298.57C624.534 298.59 624.296 298.59 624.06 298.57L624 298.52Z"
        className={props.color}
      />
      <path
        d="M728.15 236.92C728.03 237.46 727.95 238.008 727.91 238.56L684.91 263.34L674.47 257.34L663.34 271.92L680.79 284.35C683.685 286.416 687.597 286.322 690.39 284.12L734.68 249.12C740.118 251.135 746.16 248.359 748.174 242.92C750.188 237.482 747.411 231.44 741.973 229.427C736.534 227.414 730.493 230.191 728.48 235.63L728.48 235.63C728.332 236.039 728.209 236.456 728.11 236.88L728.15 236.92Z"
        style={gray}
      />
      <path
        d="M683.52 264.52L669.63 282.52C668.114 284.489 665.289 284.856 663.32 283.34C663.147 283.201 662.984 283.05 662.83 282.89L647.11 266.57C641.841 262.283 640.961 254.572 645.127 249.207C649.293 243.843 656.982 242.787 662.44 246.83L682.15 257.83C684.318 259.047 685.091 261.789 683.88 263.96C683.769 264.149 683.649 264.333 683.52 264.51L683.52 264.52Z"
        className={props.color}
      />
      <path
        d="M694.84 389.06L668.19 259.23C665.556 246.407 653.252 237.965 640.34 240.12L631.45 241.6C625.222 242.641 619.663 246.116 616 251.26L616 251.26C610.129 259.451 608.29 269.863 611 279.57L625.71 332.22L614.79 388.63C614.368 390.798 615.783 392.897 617.95 393.32C618.39 393.4 618.84 393.4 619.28 393.32C624.74 392.54 633.75 391.43 644.1 390.82L649.71 369.19L652 390.5C664.71 390.15 678.51 390.77 689.9 393.73C690.922 394.019 692.018 393.89 692.945 393.37C693.871 392.85 694.553 391.983 694.84 390.96C695.01 390.34 695.03 389.689 694.9 389.06L694.84 389.06Z"
        className={props.color}
      />
      <path
        d="M648 202.06C654.31 206.38 662.6 210.83 669 206.22C673.23 203.22 674.57 197.61 672.85 192.7C669.76 183.87 661.28 179.98 653.17 177.01C642.62 173.13 631.17 170.01 620.26 172.82C609.35 175.63 599.75 186.14 601.72 197.2C603.3 206.09 611.72 213.49 610.5 222.45C609.28 231.41 599.16 236.2 590.21 237.81C581.26 239.42 571.21 239.94 564.82 246.37C556.62 254.57 558.67 269.22 566.39 277.88C574.11 286.54 585.75 290.46 597.04 293.13C612.04 296.66 628.17 298.52 642.37 292.65C656.57 286.78 667.63 271 663.52 256.19C661.78 249.94 657.68 244.65 653.73 239.51C649.78 234.37 645.73 228.98 644.25 222.67C643 217.41 643.93 211.3 647.42 207.35C648.722 205.935 648.961 203.841 648.01 202.17L648 202.06Z"
        style={black}
      />
      <path
        d="M163.17 553.73L151.24 550.92L156.4 503.55L174.01 507.7L163.17 553.73Z"
        style={gray}
      />
      <path
        d="M163.49 566L125 557L125.11 556.51C127.037 548.23 135.309 543.078 143.59 545L143.59 545L167.09 550.53L163.49 566Z"
        style={black}
      />
      <path
        d="M209.67 554.13L197.41 554.13L191.58 506.84L209.67 506.84L209.67 554.13Z"
        style={gray}
      />
      <path
        d="M212.8 566L173.27 566L173.27 565.5C173.276 557.008 180.158 550.126 188.65 550.12L212.8 550.12L212.8 566Z"
        style={black}
      />
      <path
        d="M275.88 367.12C277.373 364.694 277.839 361.774 277.177 359.003C276.515 356.233 274.778 353.839 272.35 352.35L272.35 352.35C271.813 352.02 271.247 351.739 270.66 351.51L234.76 260.51L214.76 272.64L256.33 358.3C254.682 363.512 257.187 369.134 262.165 371.392C267.143 373.65 273.024 371.833 275.86 367.16L275.88 367.12Z"
        style={gray}
      />
      <path
        d="M242.38 275.53L219.57 284C218.374 284.446 217.049 284.399 215.888 283.868C214.727 283.337 213.825 282.367 213.38 281.17L213.38 281.17C213.298 280.948 213.231 280.721 213.18 280.49L208.18 256.75C205.637 249.816 209.196 242.133 216.13 239.59C223.064 237.047 230.747 240.606 233.29 247.54L244.92 268.73C245.537 269.846 245.685 271.162 245.33 272.387C244.976 273.612 244.148 274.646 243.03 275.26L243.03 275.26C242.822 275.378 242.605 275.479 242.38 275.56L242.38 275.53Z"
        className={props.color}
      />
      <path
        d="M208.86 537.16L208.68 537.16L191.3 536.47C188.861 536.372 186.949 534.34 187 531.9L188.33 435.9C188.38 435.072 187.748 434.36 186.92 434.31C186.092 434.26 185.38 434.892 185.33 435.72L185.33 435.72L175.25 531.83C175.042 533.851 173.513 535.486 171.51 535.83L171.45 535.83L155.14 534.54C152.682 534.917 150.385 533.228 150.01 530.77L150.01 530.77C149.995 530.537 149.995 530.303 150.01 530.07L151.01 367.29L231.01 372.36L213.33 533.15C213.067 535.424 211.149 537.145 208.86 537.16Z"
        style={black}
      />
      <path
        d="M169.66 200.61C169.66 187.046 180.656 176.05 194.22 176.05C207.784 176.05 218.78 187.046 218.78 200.61C218.78 214.174 207.784 225.17 194.22 225.17C180.656 225.17 169.66 214.174 169.66 200.61Z"
        style={gray}
      />
      <path
        d="M227 379.5L226.66 379.5L152.66 374.09C150.278 373.905 148.451 371.899 148.49 369.51L150.44 276.6C149.91 253.459 168.239 234.27 191.38 233.74C214.521 233.21 233.71 251.539 234.24 274.68C234.277 276.252 234.223 277.824 234.08 279.39C232.79 293.71 231.76 356.26 231.48 375.09C231.431 377.532 229.443 379.49 227 379.5Z"
        className={props.color}
      />
      <path
        d="M95.15 228.19C95.2795 228.728 95.3598 229.277 95.39 229.83L138.39 254.61L148.83 248.61L160 263.19L142.55 275.62C139.655 277.686 135.743 277.592 132.95 275.39L88.62 240.39C83.1817 242.405 77.1399 239.629 75.126 234.19C73.112 228.752 75.8887 222.71 81.3275 220.697C86.7663 218.684 92.8074 221.461 94.82 226.9L94.82 226.9C94.9676 227.309 95.0911 227.726 95.19 228.15L95.15 228.19Z"
        style={gray}
      />
      <path
        d="M138.94 252.14C139.207 250.867 140.014 249.773 141.15 249.14L160.86 238.14C166.318 234.097 174.007 235.153 178.173 240.517C182.339 245.882 181.459 253.593 176.19 257.88L160.47 274.2C158.753 275.99 155.909 276.048 154.12 274.33L154.12 274.33C153.958 274.181 153.811 274.017 153.68 273.84L139.8 255.84C138.984 254.793 138.669 253.44 138.94 252.14Z"
        className={props.color}
      />
      <path
        d="M808 566C808 566.552 807.552 567 807 567L1 567C0.447715 567 6.76354e-17 566.552 0 566C0 565.448 0.447715 565 1 565L807 565C807.552 565 808 565.448 808 566Z"
        style={black}
      />
      {/* Google */}
      <path
        d="M417.51 37.54C417.818 39.1888 417.972 40.8627 417.97 42.54C418 56.25 408.79 66 395 66C381.745 66 371 55.2548 371 42C371 28.7452 381.745 18 395 18C400.946 17.9496 406.68 20.2039 411 24.29L404.21 31L404.21 31C401.714 28.6176 398.38 27.3136 394.93 27.37C386.856 27.37 380.31 33.9156 380.31 41.99C380.31 50.0644 386.856 56.61 394.93 56.61C402.12 56.61 407.01 52.5 408.01 46.86L394.93 46.86L394.93 37.54L417.51 37.54Z"
        style={black}
      />
      {/* DuckDuckGo */}
      <path
        d="M790.47 207.47L790.47 208.2C790.482 208.455 790.458 208.711 790.4 208.96C790.31 209.87 790.29 210.8 790.12 211.7C788.841 219.843 783.421 226.736 775.81 229.9C774.66 230.42 773.43 230.76 772.23 231.18L770.47 227.8L771.02 228C772.33 228.41 773.64 228.84 775.02 229.2C775.68 229.38 775.92 229.2 776.02 228.55C776.168 227.534 776.232 226.507 776.21 225.48C776.141 224.364 775.991 223.254 775.76 222.16C775.64 221.56 775.33 221.44 774.76 221.69C774.155 221.961 773.567 222.268 773 222.61C772.11 223.16 771.24 223.77 770.33 224.37C770.33 223.78 769.84 223.76 769.41 223.74C769.261 223.72 769.109 223.72 768.96 223.74C768.67 223.81 768.55 223.67 768.47 223.41C768.11 222.32 767.7 221.25 767.38 220.15C766.86 218.496 766.65 216.76 766.76 215.03C766.776 214.761 766.813 214.493 766.87 214.23C768.521 214.979 770.239 215.571 772 216C775.346 217.081 778.997 216.65 782 214.82C782.284 214.637 782.529 214.399 782.72 214.12C782.833 213.994 782.891 213.827 782.88 213.657C782.868 213.488 782.789 213.33 782.66 213.22C782.531 213.099 782.356 213.04 782.18 213.06C781.924 213.03 781.666 213.03 781.41 213.06C780.25 213.29 779.09 213.55 777.92 213.79C776.1 214.227 774.215 214.322 772.36 214.07C771.564 213.981 770.804 213.692 770.15 213.23C769.826 213.023 769.599 212.695 769.518 212.32C769.437 211.944 769.51 211.552 769.72 211.23L769.72 211.23C770.029 210.759 770.583 210.509 771.14 210.59C771.356 210.577 771.573 210.604 771.78 210.67C773.243 210.976 774.762 210.873 776.17 210.37C776.97 210.07 777.79 209.86 778.58 209.55C780.33 208.89 782.08 208.16 783.81 207.38C784.212 207.187 784.58 206.931 784.9 206.62C785.223 206.429 785.33 206.013 785.14 205.69L785.14 205.62C785.054 205.49 784.928 205.391 784.78 205.34C783.735 204.799 782.525 204.671 781.39 204.98C779.74 205.44 778.11 205.98 776.46 206.44C775.87 206.61 775.27 206.73 774.63 206.89L774.63 206.59C774.71 205.706 774.73 204.817 774.69 203.93C774.349 201.24 773.402 198.661 771.92 196.39C770.872 194.513 769.037 193.206 766.92 192.83C766.762 192.798 766.616 192.722 766.5 192.61C766.11 192.25 765.77 191.85 765.35 191.53C763.221 189.946 760.653 189.062 758 189C757.08 189 756.16 189.06 755.24 189.1L755.24 189.25L756.92 190.34L756.47 190.49L755.3 190.83C754.81 190.98 754.7 191.19 754.83 191.7C757.021 191.474 759.235 191.797 761.27 192.64C761.163 192.713 761.039 192.757 760.91 192.77C759.451 192.991 758.043 193.468 756.75 194.18C755.868 194.681 755.152 195.428 754.69 196.33C754.188 197.253 753.911 198.28 753.88 199.33C753.88 200.33 753.82 201.43 753.88 202.46C753.988 203.327 754.141 204.189 754.34 205.04C754.62 206.51 754.9 207.98 755.19 209.45C755.48 210.92 755.82 212.37 756.12 213.84C756.52 215.73 756.9 217.63 757.3 219.52C757.58 220.86 757.87 222.22 758.16 223.6L759.03 227.68C759.25 228.68 759.46 229.75 759.69 230.86L758.23 230.32C749.843 227.237 743.863 219.751 742.71 210.89C742.61 210.12 742.55 209.33 742.47 208.56L742.47 207.1C742.46 206.951 742.48 206.801 742.53 206.66C742.7 205.36 742.77 204.04 743.04 202.77C745.701 190.273 757.711 182.071 770.32 184.14C775.103 184.872 779.536 187.082 783 190.46C787.05 194.248 789.631 199.344 790.29 204.85C790.35 205.72 790.39 206.6 790.47 207.47Z"
        style={black}
      />
      <path
        d="M761.41 204C761.388 204.964 760.591 205.728 759.627 205.71C758.664 205.691 757.896 204.897 757.911 203.933C757.925 202.97 758.716 202.199 759.68 202.21C760.148 202.215 760.594 202.407 760.919 202.744C761.244 203.08 761.421 203.532 761.41 204Z"
        style={black}
      />
      <path
        d="M773 202.9C773.022 203.729 772.369 204.418 771.54 204.44L771.54 204.44C770.717 204.44 770.048 203.776 770.041 202.953C770.033 202.13 770.691 201.455 771.514 201.44C772.337 201.426 773.018 202.077 773.04 202.9L773 202.9Z"
        style={black}
      />
      <path
        d="M760 198.74C758.525 198.288 756.939 198.974 756.26 200.36C756.055 199.751 756.3 199.082 756.85 198.75C757.764 197.999 759.081 197.994 760 198.74Z"
        style={black}
      />
      <path
        d="M765.86 225.11L765.86 227.26C765.85 227.393 765.85 227.527 765.86 227.66C766.02 228.36 766.3 228.57 767.08 228.59C768.012 228.674 768.952 228.565 769.84 228.27L769.84 228.36C769.678 228.473 769.503 228.567 769.32 228.64C768.421 228.949 767.464 229.051 766.52 228.94C766.028 228.856 765.661 228.439 765.64 227.94L765.64 225.75C765.694 225.53 765.767 225.316 765.86 225.11Z"
        style={black}
      />
      <path
        d="M768.89 198.65C769.098 198.003 769.691 197.558 770.37 197.54C771.203 197.455 772.002 197.898 772.37 198.65C771.299 198.009 769.961 198.009 768.89 198.65Z"
        style={black}
      />
      <path
        d="M231.14 111.24C231.138 111.714 231.112 112.188 231.06 112.66C230.753 115.429 229.565 118.027 227.67 120.07C227.902 119.81 228.11 119.528 228.29 119.23C228.442 119.008 228.569 118.77 228.67 118.52C228.713 118.439 228.749 118.356 228.78 118.27L228.87 118.02C228.863 117.934 228.888 117.849 228.94 117.78C228.968 117.698 228.991 117.615 229.01 117.53L229.01 117.53L229.01 117.28C229.002 117.19 229.019 117.1 229.06 117.02L229.06 117.02L229.06 116.2C229.062 115.144 228.779 114.108 228.24 113.2C228.12 113 227.98 112.8 227.84 112.61C227.664 112.394 227.477 112.187 227.28 111.99C226.775 111.508 226.19 111.119 225.55 110.84C225.271 110.71 224.98 110.61 224.68 110.54L224.57 110.54L223.06 110.02L223.06 110.02L219.11 108.66L219.11 108.66L218.86 108.57C218.069 108.255 217.412 107.675 217 106.93L215.56 103.25L214 99L213.68 98.18L213.6 98C213.513 97.7735 213.469 97.5327 213.47 97.29L213.47 97.1C213.568 96.1586 214.364 95.4449 215.31 95.45C215.553 95.4531 215.794 95.5005 216.02 95.59L223.39 99.37L224.84 100.11C228.494 102.289 230.85 106.117 231.15 110.36L231.15 111.22L231.14 111.24Z"
        style={black}
      />
      <path
        d="M229.17 116.16C229.167 116.525 229.134 116.89 229.07 117.25L229.01 117.53C228.988 117.699 228.941 117.865 228.87 118.02L228.78 118.27C228.762 118.36 228.725 118.446 228.67 118.52C228.563 118.765 228.439 119.002 228.3 119.23C228.113 119.526 227.902 119.807 227.67 120.07C226.59 121.26 222.95 123.37 221.6 124.23L218.6 126.05C216.581 127.46 214.209 128.28 211.75 128.42L210.89 128.42C204.526 128.158 199.289 123.323 198.52 117C199.106 120.121 202.108 122.178 205.23 121.6C205.817 121.486 206.384 121.284 206.91 121L206.91 121L207.2 120.83L208.39 120.13L209.9 119.23L209.9 119.23L210.09 119.11L223.61 111.11L224.61 110.5L224.72 110.5C225.018 110.571 225.309 110.668 225.59 110.79C226.23 111.073 226.815 111.465 227.32 111.95C227.519 112.142 227.703 112.35 227.87 112.57C228.018 112.756 228.152 112.953 228.27 113.16C228.817 114.065 229.104 115.103 229.1 116.16L229.17 116.16Z"
        style={black}
      />
      <path
        d="M209.93 89.43L209.93 119.24L208.42 120.14L207.23 120.84L206.94 121.01L206.94 121.01C204.148 122.519 200.661 121.481 199.15 118.69C198.86 118.166 198.658 117.599 198.55 117.01C198.558 116.881 198.541 116.752 198.5 116.63C198.475 116.397 198.475 116.163 198.5 115.93L198.5 82.35C198.505 81.2902 199.36 80.4309 200.42 80.42C200.804 80.424 201.179 80.5385 201.5 80.75L207.38 84.59L207.48 84.66C209.057 85.7352 210.001 87.521 210 89.43L209.93 89.43Z"
        style={black}
      />
      <path
        d="M215.45 217C210.87 221.88 202.36 219.26 201.76 212.59C201.71 212.071 201.71 211.549 201.76 211.03C202.07 208.08 203.76 205.4 203.36 202.28C203.271 201.503 202.981 200.762 202.52 200.13C198.87 195.24 190.3 202.32 186.86 197.89C184.74 195.18 187.23 190.89 185.61 187.89C183.47 183.89 177.13 185.89 173.15 183.67C168.73 181.23 168.99 174.45 171.9 170.32C175.46 165.32 181.68 162.6 187.83 162.21C193.98 161.82 200.08 163.49 205.83 165.72C212.35 168.26 218.83 171.78 222.83 177.51C227.71 184.51 228.18 193.86 225.74 202.01C224.26 207 219.19 213.05 215.45 217Z"
        style={black}
      />
      <path
        d="M576.362 86C570.53 86 565.801 90.7291 565.801 96.5692L565.801 119.439C565.801 125.271 570.53 130 576.362 130L609.775 130L609.775 96.5692C609.775 90.7373 605.046 86.0082 599.215 86.0082L576.362 86.0082L576.362 86ZM586.035 91.4523C588.413 91.4441 590.678 92.4515 592.263 94.2179C595.803 93.4681 599.438 95.0787 601.247 98.2146C602.445 100.264 602.703 102.728 601.954 104.977L601.954 104.977C604.383 107.681 604.805 111.618 602.97 114.753C601.807 116.812 599.8 118.268 597.466 118.75C596.346 122.187 593.124 124.521 589.498 124.521C587.12 124.53 584.864 123.522 583.287 121.748C579.73 122.497 576.103 120.886 574.294 117.742C573.097 115.701 572.839 113.237 573.588 110.989C571.159 108.302 570.737 104.356 572.554 101.221C573.734 99.1532 575.742 97.6976 578.076 97.2237C579.196 93.7871 582.417 91.4523 586.035 91.4523ZM586.035 93.6065C582.607 93.6065 579.833 96.3886 579.833 99.8077L579.833 107.173L582.667 108.809L582.667 99.8939C582.667 99.5071 582.865 99.145 583.201 98.9553L589.799 95.1566C589.868 95.1217 589.955 95.0704 589.998 95.0447C588.878 94.1143 587.474 93.6065 586.018 93.6065L586.027 93.6065L586.035 93.6065ZM593.977 96.1988C592.892 96.1988 591.824 96.4922 590.885 97.0348L584.502 100.722L584.502 103.994L592.229 99.5327C592.564 99.343 592.978 99.343 593.314 99.5327L599.904 103.34C599.964 103.374 600.05 103.418 600.093 103.452C600.343 102.031 600.067 100.566 599.352 99.3082C598.241 97.3786 596.182 96.1988 593.96 96.1988L593.977 96.1988ZM577.671 99.5841C576.31 100.084 575.164 101.049 574.441 102.307C572.727 105.269 573.743 109.06 576.706 110.774L583.081 114.443L585.932 112.798L578.214 108.353C577.878 108.155 577.68 107.802 577.68 107.414L577.68 99.5841L577.671 99.5841ZM592.453 101.522L589.619 103.159L597.345 107.621C597.681 107.81 597.879 108.172 597.879 108.56L597.879 116.39C599.232 115.899 600.377 114.935 601.11 113.677L601.101 113.677C602.815 110.696 601.807 106.915 598.835 105.2L592.453 101.531L592.453 101.522ZM587.767 104.219L584.51 106.096L584.51 109.852L587.767 111.73L591.023 109.852L591.023 106.096L587.767 104.219ZM592.883 107.173L592.883 116.079C592.892 116.467 592.676 116.829 592.341 117.019L585.751 120.818C585.699 120.852 585.596 120.904 585.553 120.93C586.664 121.86 588.077 122.368 589.524 122.368L589.524 122.368C592.943 122.377 595.726 119.603 595.726 116.175L595.726 108.819L592.892 107.181L592.883 107.173ZM591.031 111.988L583.313 116.45C582.977 116.64 582.564 116.64 582.228 116.45L575.638 112.643C575.586 112.608 575.492 112.565 575.449 112.531C575.199 113.952 575.457 115.434 576.189 116.674L576.181 116.674C577.895 119.629 581.685 120.636 584.657 118.939L591.04 115.27L591.04 111.997L591.031 111.988Z"
        style={black}
      />
      <path
        d="M27.9201 221.099C25.2902 222.788 23.2414 226.111 21.3036 231.924C18.7011 239.76 17.7322 245.38 18.5352 248.286C19.2273 250.834 21.497 252.163 25.2352 252.163C27.228 252.163 28.889 253.021 29.7195 254.46C30.0798 255.097 30.7168 256.786 31.1321 258.226C32.0176 261.382 32.3778 262.13 33.4852 263.07C34.9803 264.317 35.7274 264.4 46.082 264.289C55.4669 264.206 55.7997 264.179 56.907 263.597C60.1465 261.853 63.0258 256.094 65.6557 246.072C66.6246 242.307 66.9564 238.154 66.4312 236.272C65.7666 233.918 63.7178 232.506 60.8936 232.506C59.0942 232.506 57.6825 232.035 56.6027 231.066C55.7997 230.374 55.4669 229.71 54.6648 227.163C54.1387 225.474 53.6959 223.979 53.6959 223.785C53.6959 223.204 52.3108 221.57 51.2594 220.961C50.2346 220.324 50.1236 220.324 39.6864 220.324L29.1658 220.324L27.9201 221.099ZM51.1485 232.894C50.1796 233.309 49.0447 234.388 48.5736 235.302C48.3517 235.69 47.4387 238.68 46.4973 241.947C44.421 249.2 43.8674 250.446 42.2889 251.332C41.209 251.941 40.7388 252.025 37.084 252.107C33.2358 252.163 33.0974 252.163 33.9004 251.719C35.0353 251.111 35.9492 250.225 36.3919 249.366C36.6138 248.978 37.5827 245.822 38.6066 242.334C39.6039 238.846 40.7113 235.496 41.0431 234.887C41.4309 234.195 42.0955 233.558 42.87 233.143C43.9783 232.561 44.421 232.506 47.9924 232.534C51.2594 232.534 51.7856 232.617 51.1485 232.894Z"
        style={black}
      />
    </svg>
  )
  const SvgSearch = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 643 447.57">
      <path
        style={black}
        d="M613.07,87.06H29.93A30,30,0,0,1,0,57.14V29.93A30,30,0,0,1,29.93,0H613.07A30,30,0,0,1,643,29.93V57.14A30,30,0,0,1,613.07,87.06ZM29.93,1.81A28.16,28.16,0,0,0,1.81,29.93V57.14A28.15,28.15,0,0,0,29.93,85.25H613.07a28.15,28.15,0,0,0,28.12-28.11V29.93A28.16,28.16,0,0,0,613.07,1.81Z"
      />
      <rect
        style={grayTransparent}
        x="57.14"
        y="26.3"
        width="421.71"
        height="34.46"
        rx="17.23"
      />
      <rect
        className={props.color}
        x="107.92"
        y="177.43"
        width="421.71"
        height="34.46"
        rx="17.23"
      />
      <rect
        style={grayTransparent}
        x="107.92"
        y="287"
        width="421.71"
        height="34.46"
        rx="17.23"
      />
      <rect
        style={grayTransparent}
        x="107.92"
        y="396.58"
        width="421.71"
        height="34.46"
        rx="17.23"
      />
      <path
        className={props.color}
        d="M586.31,62.15a2.71,2.71,0,0,1-3.78.66l-14.8-10.3a2.71,2.71,0,0,1,3.11-4.45h0l14.81,10.31A2.72,2.72,0,0,1,586.31,62.15Z"
      />
      <path
        className={props.color}
        d="M569.5,50.44a19.26,19.26,0,1,1-4.73-26.83h0A19.28,19.28,0,0,1,569.5,50.44ZM541.88,31.1A14.45,14.45,0,1,0,562,27.55,14.46,14.46,0,0,0,541.88,31.1Z"
      />
      <path
        style={black}
        d="M596.29,228.33H46.71a.91.91,0,1,1,0-1.81H596.29a.91.91,0,1,1,0,1.81Z"
      />
      <path
        style={black}
        d="M596.29,338H46.71a.91.91,0,1,1,0-1.81H596.29a.91.91,0,1,1,0,1.81Z"
      />
      <path
        style={black}
        d="M596.29,447.57H46.71a.91.91,0,1,1,0-1.81H596.29a.91.91,0,1,1,0,1.81Z"
      />
    </svg>
  )
  const SvgPhone = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 738 729.05">
      <path
        style={grayTransparent}
        d="M550.44,173h-4V63.4A63.41,63.41,0,0,0,483,0H251a63.4,63.4,0,0,0-63.4,63.4v601a63.4,63.4,0,0,0,63.4,63.4H483a63.41,63.41,0,0,0,63.41-63.4V250.92h4Z"
        transform="translate(0 0)"
      />
      <path
        style={white}
        d="M533,63.84V663.93a47.35,47.35,0,0,1-47.35,47.35H252.4a47.35,47.35,0,0,1-47.35-47.35V63.84A47.35,47.35,0,0,1,252.4,16.49h28.29a22.5,22.5,0,0,0,20.83,31h133a22.51,22.51,0,0,0,20.83-31H485.6A47.35,47.35,0,0,1,533,63.84Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M304.6,181H268.79a11.15,11.15,0,0,1-11.13-11.13V134.1A11.15,11.15,0,0,1,268.79,123H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,181Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M469.21,181H433.4a11.15,11.15,0,0,1-11.13-11.13V134.1A11.15,11.15,0,0,1,433.4,123h35.81a11.15,11.15,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,181Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M304.6,272.55H268.79a11.15,11.15,0,0,1-11.13-11.13V225.61a11.14,11.14,0,0,1,11.13-11.13H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,272.55Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M386.91,272.55H351.09A11.14,11.14,0,0,1,340,261.42V225.61a11.12,11.12,0,0,1,11.12-11.13h35.82A11.14,11.14,0,0,1,398,225.61v35.81A11.15,11.15,0,0,1,386.91,272.55Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M469.21,272.55H433.4a11.15,11.15,0,0,1-11.13-11.13V225.61a11.14,11.14,0,0,1,11.13-11.13h35.81a11.14,11.14,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,272.55Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M304.6,364H268.79a11.15,11.15,0,0,1-11.13-11.13V317.1A11.15,11.15,0,0,1,268.79,306H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,364Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M386.91,364H351.09A11.14,11.14,0,0,1,340,352.91V317.1A11.13,11.13,0,0,1,351.09,306h35.82A11.15,11.15,0,0,1,398,317.1v35.81A11.15,11.15,0,0,1,386.91,364Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M469.21,364H433.4a11.15,11.15,0,0,1-11.13-11.13V317.1A11.15,11.15,0,0,1,433.4,306h35.81a11.15,11.15,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,364Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M304.6,455.55H268.79a11.15,11.15,0,0,1-11.13-11.13V408.61a11.14,11.14,0,0,1,11.13-11.13H304.6a11.13,11.13,0,0,1,11.13,11.13v35.81A11.14,11.14,0,0,1,304.6,455.55Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M386.91,455.55H351.09A11.14,11.14,0,0,1,340,444.42V408.61a11.12,11.12,0,0,1,11.12-11.13h35.82A11.14,11.14,0,0,1,398,408.61v35.81A11.15,11.15,0,0,1,386.91,455.55Z"
        transform="translate(0 0)"
      />
      <path
        style={grayTransparent}
        d="M469.21,455.55H433.4a11.15,11.15,0,0,1-11.13-11.13V408.61a11.14,11.14,0,0,1,11.13-11.13h35.81a11.14,11.14,0,0,1,11.13,11.13v35.81A11.15,11.15,0,0,1,469.21,455.55Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M409.94,444.94H374.13a11.65,11.65,0,0,1-11.63-11.63V397.49a11.64,11.64,0,0,1,11.63-11.62h35.81a11.64,11.64,0,0,1,11.63,11.62v35.82A11.65,11.65,0,0,1,409.94,444.94Z"
        transform="translate(0 0)"
      />
      <path
        style={gray}
        d="M240.5,537.35a10.34,10.34,0,0,0,4.65-13.86,9.61,9.61,0,0,0-1-1.56l7.74-75.61H235.21l-6.14,73.83a10.4,10.4,0,0,0,11.43,17.2Z"
        transform="translate(0 0)"
      />
      <circle style={gray} cx="255.84" cy="380.95" r="23.65" />
      <path
        className={props.color}
        d="M260.29,490.35a4.34,4.34,0,0,1-4.17-3.17c-1.89-6.89-6.82-18.52-14.64-34.59a28.66,28.66,0,0,1,13.24-38.3,26.84,26.84,0,0,1,3-1.26h0a28.64,28.64,0,0,1,36.54,17.47l.26.77c6.06,19,5.77,39.39,5.36,47.27a4.33,4.33,0,0,1-3.4,4l-35.29,7.7A4.08,4.08,0,0,1,260.29,490.35Z"
        transform="translate(0 0)"
      />
      <polygon
        style={gray}
        points="294.47 714.88 306.27 714.88 311.88 669.36 294.46 669.36 294.47 714.88"
      />
      <path
        style={black}
        d="M329,725.84H291.94V711.51H314.7A14.34,14.34,0,0,1,329,725.84Z"
        transform="translate(0 0)"
      />
      <polygon
        style={gray}
        points="176.45 699.59 186.79 705.27 213.64 668.09 198.38 659.7 176.45 699.59"
      />
      <path
        style={black}
        d="M201.46,725.84,169,708h0l6.91-12.56h0l19.94,11a14.33,14.33,0,0,1,5.66,19.46Z"
        transform="translate(0 0)"
      />
      <path
        style={black}
        d="M293.91,689.62a4.34,4.34,0,0,1-4.29-3.78L274.86,572.1a2.4,2.4,0,0,0-4.49-.85l-61.52,111.6a4.34,4.34,0,0,1-5.33,2l-13.41-5.11a4.33,4.33,0,0,1-2.51-5.59l0-.09,42.61-104.68a3.51,3.51,0,0,0,.22-.83c5.77-44.67,20.46-67.39,24.82-73.29a3.36,3.36,0,0,0,.48-3.05l-.6-1.8a4.34,4.34,0,0,1,.83-4.22c15.72-17.9,43.13-8.13,43.4-8l.14.05.08.12c30.73,42.14,19.37,179,16.78,206a4.31,4.31,0,0,1-4,3.89l-18.17,1.4Z"
        transform="translate(0 0)"
      />
      <path
        style={gray}
        d="M347.76,408.41a12,12,0,0,0-.23,1.58l-41.35,23.86-10.05-5.79-10.72,14,16.8,12a7.71,7.71,0,0,0,9.24-.23l42.64-33.64a10.11,10.11,0,1,0-6-13,10.37,10.37,0,0,0-.37,1.2Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M304.8,435,291.43,452.3a4.33,4.33,0,0,1-6.08.79,6.29,6.29,0,0,1-.47-.43L269.75,437a12,12,0,0,1,14.75-19l19,10.61a4.34,4.34,0,0,1,1.67,5.9,6.06,6.06,0,0,1-.35.53Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M253,465.08l-21.53-3.89a4.34,4.34,0,0,1-3.49-5,4.52,4.52,0,0,1,.15-.61l7-20.67a12,12,0,0,1,23.66,4.35L258.09,461a4.32,4.32,0,0,1-4.47,4.19,4.48,4.48,0,0,1-.63-.06Z"
        transform="translate(0 0)"
      />
      <path
        style={black}
        d="M259.58,375.51c6.08,4.16,14.06,8.43,20.27,4a11.28,11.28,0,0,0,3.7-13c-3-8.5-11.13-12.24-18.94-15.11-10.15-3.72-21.21-6.69-31.69-4s-19.74,12.82-17.84,23.46c1.52,8.57,9.59,15.69,8.45,24.31S212.62,408.37,204,409.92s-18.25,2.05-24.44,8.24c-7.9,7.89-5.93,22,1.5,30.34s18.65,12.11,29.51,14.67c14.4,3.41,30,5.19,43.65-.45s24.31-20.85,20.35-35.1c-1.67-6-5.62-11.11-9.43-16.06s-7.66-10.14-9.11-16.22c-1.21-5.06-.32-10.94,3-14.74a4.27,4.27,0,0,0,.57-5Z"
        transform="translate(0 0)"
      />
      <polygon
        style={gray}
        points="500 716.46 487.74 716.46 481.91 669.17 500 669.17 500 716.46"
      />
      <path
        style={black}
        d="M479,713h23.65v14.88H464.1A14.88,14.88,0,0,1,479,713Z"
        transform="translate(0 0)"
      />
      <polygon
        style={gray}
        points="546 716.46 533.74 716.46 527.91 669.17 546 669.17 546 716.46"
      />
      <path
        style={black}
        d="M525,713h23.65v14.88H510.1A14.88,14.88,0,0,1,525,713Z"
        transform="translate(0 0)"
      />
      <path
        style={gray}
        d="M544.5,575.62a10.75,10.75,0,0,1-3.22-14.85,10.45,10.45,0,0,1,1.16-1.49l-8.07-114.56L557.62,447l.64,112.19a10.8,10.8,0,0,1-13.76,16.46Z"
        transform="translate(0 0)"
      />
      <path
        style={black}
        d="M499.42,692.64l-13.5-.65a4.5,4.5,0,0,1-4.28-4.46L480.7,551a4.5,4.5,0,0,1,4.47-4.53,5,5,0,0,1,.67,0l54,7.84a4.46,4.46,0,0,1,3.85,4.42l6.94,126.53a4.49,4.49,0,0,1-4.46,4.53H531.58a4.48,4.48,0,0,1-4.44-3.8l-9-57.06a3.5,3.5,0,0,0-6.93.12l-7.13,59.61a4.51,4.51,0,0,1-4.47,4Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M508.92,558.75c-11.9-6.61-21.2-8.35-25.68-8.79a4.5,4.5,0,0,1-4-5.08l12.93-96.05a33.26,33.26,0,0,1,19.37-26A32.3,32.3,0,0,1,543,425.33c.45.3.88.6,1.31.91a33.18,33.18,0,0,1,12.64,34.57c-7.94,32.46-10.66,85.66-11.13,96a4.44,4.44,0,0,1-2.92,4,44.92,44.92,0,0,1-15.22,2.72A38.14,38.14,0,0,1,508.92,558.75Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M539.63,483.21a4.5,4.5,0,0,1-1.86-3.4l-1.7-30.87A12.4,12.4,0,0,1,560.42,445l7.48,27.6a4.5,4.5,0,0,1-3.17,5.52l-21.29,5.78A4.46,4.46,0,0,1,539.63,483.21Z"
        transform="translate(0 0)"
      />
      <circle style={gray} cx="519.74" cy="385.27" r="24.56" />
      <path
        style={gray}
        d="M430.74,433.53a11,11,0,0,1,.24,1.64l43,24.78,10.44-6,11.13,14.57-22.34,15.92-49-38.66a10.55,10.55,0,1,1,6.58-12.24Z"
        transform="translate(0 0)"
      />
      <path
        className={props.color}
        d="M475.47,457.84a4.5,4.5,0,0,1,1.29-3.65l21.87-21.87a12.4,12.4,0,0,1,19.17,15.51l-15.57,24a4.51,4.51,0,0,1-6.23,1.32l-18.5-12A4.47,4.47,0,0,1,475.47,457.84Z"
        transform="translate(0 0)"
      />
      <path
        style={black}
        d="M537.12,404.7c-4.58,4.88-13.09,2.26-13.68-4.4a7.4,7.4,0,0,1,0-1.56c.3-2.95,2-5.64,1.6-8.75a4.52,4.52,0,0,0-.84-2.15C520.56,383,512,390,508.54,385.6c-2.11-2.72.37-7-1.25-10-2.14-4-8.48-2-12.45-4.22-4.42-2.44-4.16-9.23-1.25-13.36,3.55-5,9.78-7.72,15.93-8.1s12.25,1.27,18,3.51c6.52,2.54,13,6,17,11.79,4.88,7,5.35,16.34,2.91,24.5C545.93,394.66,540.87,400.72,537.12,404.7Z"
        transform="translate(0 0)"
      />
      <path
        style={black}
        d="M737,729.05H1a1,1,0,0,1,0-2H737a1,1,0,0,1,0,2Z"
        transform="translate(0 0)"
      />
    </svg>
  )

  const renderSvg = () => {
    switch (props.type) {
      case 'people':
        return <SvgPeople />
      case 'search':
        return <SvgSearch />
      case 'phone':
        return <SvgPhone />
      default:
        return <></>
    }
  }

  return renderSvg()
}

export default SvgIllustrations
