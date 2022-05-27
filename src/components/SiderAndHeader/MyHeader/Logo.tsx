interface ILogoProps {
  className?: string;
}

export const Logo = ({ className }: ILogoProps) => (
  <svg className={className} viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="491" cy="509" r="465" fill="#FFFFFF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M18.2494 496.5C18.0836 501.646 18 506.813 18 512C18 772.955 229.545 984.5 490.5 984.5C751.455 984.5 963 772.955 963 512C963 506.813 962.916 501.646 962.751 496.5H18.2494Z" fill="#3F3F3F" />
    <path fillRule="evenodd" clipRule="evenodd" d="M18 512C18 251.046 229.546 39.5 490.5 39.5C751.454 39.5 963 251.046 963 512C963 772.955 751.455 984.5 490.5 984.5C229.545 984.5 18 772.955 18 512ZM490.5 54.5C237.83 54.5 33 259.33 33 512C33 764.67 237.83 969.5 490.5 969.5C743.17 969.5 948 764.67 948 512C948 259.33 743.17 54.5 490.5 54.5Z" fill="#3F3F3F" />
    <path fillRule="evenodd" clipRule="evenodd" d="M157.198 458C138.778 458 121.782 452.001 124.136 444.5C126.875 435.775 127.463 430.476 127.871 426.804C128.514 421.008 128.708 419.267 136.198 414.5C139.454 412.873 145.679 413.365 152.524 413.906C156.191 414.196 171.587 417.001 175.249 417.001C184.154 417.001 196.028 382.946 207.249 358.501C221.249 328.001 223.337 323.325 230.749 308.501C239.749 290.501 237.749 294.282 241.749 287.001C257.696 257.971 269.13 246.001 278.698 246.001C300.317 245.918 324.86 495.504 319.776 495H1006.55L987.276 526C987.276 526 296.198 526.5 278.698 526C271.081 525.783 273.863 521.291 276.276 507.5C279.776 487.5 282.655 457.233 266.014 456C239.014 454.001 221.698 453.001 221.698 453.001C218.879 452.688 218.86 452.767 214.904 468.97C212.545 478.634 208.786 494.031 202.198 518.501C197.377 536.408 184.776 568.5 184.776 568.5C176.943 588.681 170.952 599.323 157.198 617C157.198 617 132.129 650 124.136 620C115.696 588.322 97.9548 569.873 97.7764 561.5L157.198 458ZM266.014 334.5C259.252 319 230.749 420.5 230.749 420.5C230.749 420.5 276.276 440.5 276.276 420.5C276.276 414.325 272.776 350 266.014 334.5Z" fill="url(#header-logo-gradient)" />
    <g filter="url(#header-logo-a-fitler)">
      <path d="M366.04 737.5L326.09 631.08H325.41C325.75 634.593 326.033 639.353 326.26 645.36C326.487 651.253 326.6 657.43 326.6 663.89V737.5H312.49V616.12H335.1L372.5 715.57H373.18L411.26 616.12H433.7V737.5H418.57V662.87C418.57 656.976 418.683 651.14 418.91 645.36C419.25 639.58 419.533 634.876 419.76 631.25H419.08L378.62 737.5H366.04Z" fill="white" />
      <path d="M559.029 694.66C559.029 703.046 557.329 710.64 553.929 717.44C550.529 724.126 545.315 729.453 538.289 733.42C531.375 737.273 522.535 739.2 511.769 739.2C496.695 739.2 485.192 735.12 477.259 726.96C469.439 718.686 465.529 707.806 465.529 694.32V616.12H480.829V694.83C480.829 704.69 483.435 712.34 488.649 717.78C493.975 723.22 501.965 725.94 512.619 725.94C523.612 725.94 531.545 723.05 536.419 717.27C541.405 711.376 543.898 703.84 543.898 694.66V616.12H559.029V694.66Z" fill="white" />
      <path d="M659.914 705.03C659.914 715.796 656.004 724.183 648.184 730.19C640.364 736.196 629.824 739.2 616.564 739.2C609.764 739.2 603.474 738.69 597.694 737.67C591.914 736.65 587.098 735.233 583.244 733.42V718.8C587.324 720.613 592.368 722.256 598.374 723.73C604.494 725.203 610.784 725.94 617.244 725.94C626.311 725.94 633.111 724.183 637.644 720.67C642.291 717.156 644.614 712.396 644.614 706.39C644.614 702.423 643.764 699.08 642.064 696.36C640.364 693.64 637.418 691.146 633.224 688.88C629.144 686.5 623.421 684.006 616.054 681.4C605.741 677.66 597.921 673.07 592.594 667.63C587.381 662.19 584.774 654.766 584.774 645.36C584.774 638.9 586.418 633.403 589.704 628.87C592.991 624.223 597.524 620.653 603.304 618.16C609.198 615.666 615.941 614.42 623.534 614.42C630.221 614.42 636.341 615.043 641.894 616.29C647.448 617.536 652.491 619.18 657.024 621.22L652.264 634.31C648.071 632.496 643.481 630.966 638.494 629.72C633.621 628.473 628.521 627.85 623.194 627.85C615.601 627.85 609.878 629.493 606.024 632.78C602.171 635.953 600.244 640.203 600.244 645.53C600.244 649.61 601.094 653.01 602.794 655.73C604.494 658.45 607.271 660.886 611.124 663.04C614.978 665.193 620.191 667.516 626.764 670.01C633.904 672.616 639.911 675.45 644.784 678.51C649.771 681.456 653.511 685.026 656.004 689.22C658.611 693.413 659.914 698.683 659.914 705.03Z" fill="white" />
      <path d="M718.535 737.5H674.675V728.66L688.955 725.43V628.36L674.675 624.96V616.12H718.535V624.96L704.255 628.36V725.43L718.535 728.66V737.5Z" fill="white" />
      <path d="M793.992 627.85C780.959 627.85 770.702 632.213 763.222 640.94C755.742 649.666 752.002 661.623 752.002 676.81C752.002 691.883 755.459 703.84 762.372 712.68C769.399 721.406 779.882 725.77 793.822 725.77C799.149 725.77 804.192 725.316 808.952 724.41C813.712 723.503 818.359 722.37 822.892 721.01V734.27C818.359 735.97 813.656 737.216 808.782 738.01C804.022 738.803 798.299 739.2 791.612 739.2C779.259 739.2 768.946 736.65 760.672 731.55C752.399 726.45 746.166 719.196 741.972 709.79C737.892 700.383 735.852 689.333 735.852 676.64C735.852 664.4 738.062 653.633 742.482 644.34C747.016 634.933 753.646 627.623 762.372 622.41C771.099 617.083 781.696 614.42 794.162 614.42C806.969 614.42 818.132 616.8 827.652 621.56L821.532 634.48C817.792 632.78 813.599 631.25 808.952 629.89C804.419 628.53 799.432 627.85 793.992 627.85Z" fill="white" />
    </g>
    <path d="M543.992 462.817C543.992 466.037 542.083 467.646 538.264 467.646H511.311C508.466 467.646 505.322 466.636 501.878 464.614C498.509 462.518 495.926 460.01 494.129 457.09L475.037 427.217C467.176 414.938 457.667 408.799 446.511 408.799H419.109V457.09C419.109 460.01 418.061 462.518 415.965 464.614C413.943 466.636 411.472 467.646 408.552 467.646H387.439C384.519 467.646 382.011 466.636 379.915 464.614C377.818 462.518 376.77 460.01 376.77 457.09V317.271C376.77 314.351 377.781 311.842 379.802 309.746C381.824 307.65 384.295 306.602 387.215 306.602H479.866C497.011 306.602 511.049 311.206 521.98 320.415C532.986 329.624 538.489 342.052 538.489 357.7C538.489 379.487 524.376 393.151 496.15 398.691C500.642 400.339 504.798 403.184 508.616 407.227C512.434 411.195 516.814 416.997 521.756 424.634L542.195 457.09C543.393 459.186 543.992 461.095 543.992 462.817ZM419.109 377.017H466.951C474.663 377.017 481.438 375.482 487.278 372.412C493.193 369.342 496.15 364.438 496.15 357.7C496.15 350.962 493.193 346.058 487.278 342.988C481.438 339.919 474.663 338.384 466.951 338.384H419.109V377.017Z" fill="#2D2D2D" />
    <path d="M547.81 327.827V317.271C547.81 314.201 548.821 311.655 550.843 309.634C552.864 307.612 555.41 306.602 558.479 306.602H700.994C704.064 306.602 706.609 307.612 708.631 309.634C710.652 311.655 711.663 314.201 711.663 317.271V327.827C711.663 330.897 710.652 333.442 708.631 335.464C706.609 337.41 704.064 338.384 700.994 338.384H650.906V457.314C650.906 460.234 649.858 462.705 647.761 464.727C645.74 466.673 643.269 467.646 640.349 467.646H619.124C616.204 467.646 613.696 466.673 611.599 464.727C609.578 462.705 608.567 460.234 608.567 457.314V338.384H558.479C555.41 338.384 552.864 337.41 550.843 335.464C548.821 333.442 547.81 330.897 547.81 327.827Z" fill="#2D2D2D" />
    <defs>
      <filter id="header-logo-a-fitler" x="312.49" y="614.42" width="532.162" height="141.78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="13" dy="13" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_316:2" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_316:2" result="shape" />
      </filter>
      <linearGradient id="header-logo-gradient" x1="1037.78" y1="502" x2="-19.7237" y2="502" gradientUnits="userSpaceOnUse">
        <stop stopColor="#470000" />
        <stop offset="0.280399" stopColor="#B70000" />
        <stop offset="1" stopColor="#FF0000" />
      </linearGradient>
    </defs>
  </svg>
)
