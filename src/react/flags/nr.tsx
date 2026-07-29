import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagNR: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>NR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nr-linearGradient-2'>
          <stop stopColor='#0744A7' offset='0%' />
          <stop stopColor='#00307D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='nr-linearGradient-3'>
          <stop stopColor='#FCC747' offset='0%' />
          <stop stopColor='#FEC539' offset='100%' />
        </linearGradient>
      </defs>
      <g id='nr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='nr-NR'>
          <rect
            id='nr-FlagBackground'
            fill='url(#nr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='nr-Mask-Copy'
            fill='url(#nr-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='nr-Rectangle-1337'
            fill='url(#nr-linearGradient-3)'
            x='0'
            y='6'
            width='21'
            height='2'
          />
          <polygon
            id='nr-Star-27'
            fill='url(#nr-linearGradient-1)'
            points='5.5 12.25 4.72745751 13.3776413 4.76526843 12.0112712 3.47745751 12.4694631 4.31117935 11.3862712 3 11 4.31117935 10.6137288 3.47745751 9.53053687 4.76526843 9.98872876 4.72745751 8.62235871 5.5 9.75 6.27254249 8.62235871 6.23473157 9.98872876 7.52254249 9.53053687 6.68882065 10.6137288 8 11 6.68882065 11.3862712 7.52254249 12.4694631 6.23473157 12.0112712 6.27254249 13.3776413'
          />
        </g>
      </g>
    </svg>
  )
}
