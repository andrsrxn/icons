import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagLA: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>LA</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='la-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='la-linearGradient-2'>
          <stop stopColor='#073A88' offset='0%' />
          <stop stopColor='#032A67' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='la-linearGradient-3'>
          <stop stopColor='#E2273E' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='la-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='la-LA'>
          <rect
            id='la-FlagBackground'
            fill='url(#la-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='la-Rectangle-2-Copy-4'
            fill='url(#la-linearGradient-2)'
            x='0'
            y='4'
            width='21'
            height='7'
          />
          <rect
            id='la-Rectangle-2'
            fill='url(#la-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='4'
          />
          <rect
            id='la-Rectangle-2'
            fill='url(#la-linearGradient-3)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <circle id='la-Oval-12' fill='url(#la-linearGradient-1)' cx='10.5' cy='7.5' r='2.5' />
        </g>
      </g>
    </svg>
  )
}
