import type { SVGProps } from 'react'

export const IconFlagVC = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>VC</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vc-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vc-linearGradient-2'>
          <stop stopColor='#08C47A' offset='0%' />
          <stop stopColor='#009F60' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vc-linearGradient-3'>
          <stop stopColor='#0C87E1' offset='0%' />
          <stop stopColor='#0073C7' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vc-linearGradient-4'>
          <stop stopColor='#FFD147' offset='0%' />
          <stop stopColor='#FECA2F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vc-linearGradient-5'>
          <stop stopColor='#00C778' offset='0%' />
          <stop stopColor='#009F60' offset='100%' />
        </linearGradient>
      </defs>
      <g id='vc-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='vc-VC'>
          <rect
            id='vc-FlagBackground'
            fill='url(#vc-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect id='vc-Mask' fill='url(#vc-linearGradient-2)' x='10' y='0' width='11' height='15' />
          <rect
            id='vc-Rectangle-2'
            fill='url(#vc-linearGradient-3)'
            x='0'
            y='0'
            width='7'
            height='15'
          />
          <rect
            id='vc-Rectangle-2-Copy'
            fill='url(#vc-linearGradient-4)'
            x='6'
            y='0'
            width='9'
            height='15'
          />
          <path
            d='M11,6 L12.5,3 L14,6 L12.5,9 L11,6 Z M7,6 L8.5,3 L10,6 L8.5,9 L7,6 Z M9,10 L10.5,7 L12,10 L10.5,13 L9,10 Z'
            id='vc-Rectangle-1194'
            fill='url(#vc-linearGradient-5)'
          />
        </g>
      </g>
    </svg>
  )
}
