import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagNU: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>NU</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nu-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nu-linearGradient-2'>
          <stop stopColor='#FCD54E' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nu-linearGradient-3'>
          <stop stopColor='#053C8A' offset='0%' />
          <stop stopColor='#002B67' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nu-linearGradient-4'>
          <stop stopColor='#DB1E36' offset='0%' />
          <stop stopColor='#D51931' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nu-linearGradient-5'>
          <stop stopColor='#FDD650' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
      </defs>
      <g id='nu-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='nu-NU'>
          <rect
            id='nu-FlagBackground'
            fill='url(#nu-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='nu-Mask-Copy'
            fill='url(#nu-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='nu-Rectangle-1476'
            fill='url(#nu-linearGradient-3)'
            x='0'
            y='0'
            width='9'
            height='7'
          />
          <path
            d='M3,3.22996746 L-1.3516287,-0.5 L0.660232527,-0.5 L4.16023253,2 L4.85660189,2 L9.5,-0.902123821 L9.5,0.25 C9.5,0.552509227 9.33308555,0.876533554 9.08215972,1.05576629 L6,3.25730895 L6,3.77003254 L9.13722049,6.45907867 C9.59934261,6.85518335 9.34102897,7.5 8.75,7.5 C8.50478614,7.5 8.2052751,7.40393402 8.00092153,7.25796718 L4.83976747,5 L4.14339811,5 L-0.5,7.90212382 L-0.5,6.24269105 L3,3.74269105 L3,3.22996746 Z'
            id='nu-Rectangle-36'
            fill='url(#nu-linearGradient-1)'
            fillRule='nonzero'
          />
          <path
            d='M3.5,3 L-4.4408921e-16,7.10542736e-15 L0.5,7.10542736e-15 L4,2.5 L5,2.5 L9,7.10542736e-15 L9,0.25 C9,0.388071187 8.91348267,0.561798096 8.79154062,0.648899555 L5.5,3 L5.5,4 L8.8118248,6.83870697 C8.91575109,6.92778665 8.8840332,7 8.75,7 L8.75,7 C8.61192881,7 8.41348267,6.9382019 8.29154062,6.85110044 L5,4.5 L4,4.5 L-4.4408921e-16,7 L-4.4408921e-16,6.5 L3.5,4 L3.5,3 Z'
            id='nu-Rectangle-36'
            fill='url(#nu-linearGradient-4)'
          />
          <path
            d='M-4.4408921e-16,2.5 L-4.4408921e-16,4.5 L3.5,4.5 L3.5,7.00461102 C3.5,7.2782068 3.71403503,7.5 4.00468445,7.5 L4.99531555,7.5 C5.27404508,7.5 5.5,7.2842474 5.5,7.00461102 L5.5,4.5 L9.00952148,4.5 C9.28040529,4.5 9.5,4.28596497 9.5,3.99531555 L9.5,3.00468445 C9.5,2.72595492 9.28494263,2.5 9.00952148,2.5 L5.5,2.5 L5.5,7.10542736e-15 L3.5,7.10542736e-15 L3.5,2.5 L-4.4408921e-16,2.5 Z'
            id='nu-Rectangle-2'
            fill='url(#nu-linearGradient-1)'
          />
          <polygon
            id='nu-Rectangle-36'
            fill='url(#nu-linearGradient-4)'
            points='-4.4408921e-16 3 4 3 4 2.5 4 7.10542736e-15 5 7.10542736e-15 5 2.5 5 3 9 3 9 4 5 4 5 4.5 5 7 4 7 4 4.5 4 4 -4.4408921e-16 4'
          />
          <circle id='nu-Oval-316' fill='url(#nu-linearGradient-3)' cx='4.5' cy='3.5' r='1' />
          <path
            d='M4.5,4 C4.22385763,4 4,3.77614237 4,3.5 C4,3.22385763 4.22385763,3 4.5,3 C4.77614237,3 5,3.22385763 5,3.5 C5,3.77614237 4.77614237,4 4.5,4 Z M6.5,4 C6.22385763,4 6,3.77614237 6,3.5 C6,3.22385763 6.22385763,3 6.5,3 C6.77614237,3 7,3.22385763 7,3.5 C7,3.77614237 6.77614237,4 6.5,4 Z M2.5,4 C2.22385763,4 2,3.77614237 2,3.5 C2,3.22385763 2.22385763,3 2.5,3 C2.77614237,3 3,3.22385763 3,3.5 C3,3.77614237 2.77614237,4 2.5,4 Z M4.5,2 C4.22385763,2 4,1.77614237 4,1.5 C4,1.22385763 4.22385763,1 4.5,1 C4.77614237,1 5,1.22385763 5,1.5 C5,1.77614237 4.77614237,2 4.5,2 Z M4.5,6 C4.22385763,6 4,5.77614237 4,5.5 C4,5.22385763 4.22385763,5 4.5,5 C4.77614237,5 5,5.22385763 5,5.5 C5,5.77614237 4.77614237,6 4.5,6 Z'
            id='nu-Combined-Shape'
            fill='url(#nu-linearGradient-5)'
          />
        </g>
      </g>
    </svg>
  )
}
