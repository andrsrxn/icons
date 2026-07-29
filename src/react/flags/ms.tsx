import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagMS: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>MS</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ms-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ms-linearGradient-2'>
          <stop stopColor='#07319C' offset='0%' />
          <stop stopColor='#00247E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ms-linearGradient-3'>
          <stop stopColor='#DB1E36' offset='0%' />
          <stop stopColor='#D51931' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ms-linearGradient-4'>
          <stop stopColor='#08B9D6' offset='0%' />
          <stop stopColor='#00A3BE' offset='100%' />
        </linearGradient>
        <path
          d='M0,3.5 L2.57831658e-17,0.999341965 C1.15435165e-17,0.447420638 0.443716645,0 0.999807492,0 L4.00019251,0 C4.55237094,0 5,0.440959692 5,0.999341965 L5,3.5 C5,6 2.5,7 2.5,7 C2.5,7 0,6 0,3.5 Z'
          id='ms-path-5'
        />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ms-linearGradient-7'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ms-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ms-MS'>
          <rect
            id='ms-FlagBackground'
            fill='url(#ms-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ms-Mask-Copy'
            fill='url(#ms-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z'
            id='ms-Rectangle-36'
            fill='url(#ms-linearGradient-1)'
            fillRule='nonzero'
          />
          <path
            d='M3.5,3 L-4.4408921e-16,-2.13162821e-14 L0.5,-2.13162821e-14 L4,2.5 L5,2.5 L9,-2.13162821e-14 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z'
            id='ms-Rectangle-36'
            fill='url(#ms-linearGradient-3)'
          />
          <path
            d='M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,-2.13162821e-14 L3.5,-2.13162821e-14 L3.5,2.5 L-4.4408921e-16,2.5 Z'
            id='ms-Rectangle-2'
            fill='url(#ms-linearGradient-1)'
          />
          <polygon
            id='ms-Rectangle-36'
            fill='url(#ms-linearGradient-3)'
            points='-4.4408921e-16 3 4 3 4 2.5 4 -2.13162821e-14 5 -2.13162821e-14 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4'
          />
          <g id='ms-Rectangle-1105' transform='translate(13.000000, 4.000000)'>
            <mask id='ms-mask-6' fill='white'>
              <use xlinkHref='#ms-path-5' />
            </mask>
            <use id='ms-Combined-Shape' fill='url(#ms-linearGradient-4)' xlinkHref='#ms-path-5' />
            <polygon
              id='ms-Rectangle-1106'
              fill='#A63D09'
              mask='url(#ms-mask-6)'
              points='1.37667655e-13 5 5 5 5 7 3 7 2 7 1.61648472e-13 7'
            />
            <path
              d='M3,2 L3,1 L2,1 L2,2 L1,2 L1,3 L2,3 L2,5 L3,5 L3,3 L4,3 L4,2 L3,2 Z'
              id='ms-Rectangle-1106'
              fill='url(#ms-linearGradient-7)'
              mask='url(#ms-mask-6)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
