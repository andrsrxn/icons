import type { SVGProps } from 'react'

export const IconFlagSS = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
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
      <title>SS</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ss-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ss-linearGradient-2'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ss-linearGradient-3'>
          <stop stopColor='#E22A32' offset='0%' />
          <stop stopColor='#D61C24' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ss-linearGradient-4'>
          <stop stopColor='#2CA244' offset='0%' />
          <stop stopColor='#218736' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ss-linearGradient-5'>
          <stop stopColor='#185AC6' offset='0%' />
          <stop stopColor='#104CAD' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ss-linearGradient-6'>
          <stop stopColor='#FDE14A' offset='0%' />
          <stop stopColor='#FCDC34' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ss-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ss-SS'>
          <rect
            id='ss-FlagBackground'
            fill='url(#ss-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ss-Rectangle-2'
            fill='url(#ss-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='4'
          />
          <rect
            id='ss-Rectangle-2'
            fill='url(#ss-linearGradient-3)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='ss-Rectangle-2'
            fill='url(#ss-linearGradient-1)'
            x='0'
            y='4'
            width='21'
            height='1'
          />
          <rect
            id='ss-Rectangle-2'
            fill='url(#ss-linearGradient-4)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <rect
            id='ss-Rectangle-2'
            fill='url(#ss-linearGradient-1)'
            x='0'
            y='10'
            width='21'
            height='1'
          />
          <polygon id='ss-Rectangle-83' fill='url(#ss-linearGradient-5)' points='0 0 10 7.5 0 15' />
          <polygon
            id='ss-Star-53'
            fill='url(#ss-linearGradient-6)'
            points='3.8362378 7.98697775 3.15270364 9.2672036 2.94825467 7.83040236 1.51946386 7.57593429 2.82276483 6.93749577 2.62325771 5.5 3.63319098 6.54222453 4.9386796 5.90827135 4.25955172 7.19084006 5.26589519 8.23653122'
          />
        </g>
      </g>
    </svg>
  )
}
