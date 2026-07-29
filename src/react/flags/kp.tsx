import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagKP: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>KP</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kp-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kp-linearGradient-2'>
          <stop stopColor='#1461B6' offset='0%' />
          <stop stopColor='#0B52A1' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='kp-linearGradient-3'>
          <stop stopColor='#F53846' offset='0%' />
          <stop stopColor='#EB2130' offset='100%' />
        </linearGradient>
      </defs>
      <g id='kp-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='kp-KP'>
          <rect
            id='kp-FlagBackground'
            fill='url(#kp-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='kp-Rectangle-2'
            fill='url(#kp-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='kp-Rectangle-2'
            fill='url(#kp-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='kp-Rectangle-2'
            fill='url(#kp-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='9'
          />
          <rect
            id='kp-Rectangle-2-Copy-4'
            fill='url(#kp-linearGradient-3)'
            x='0'
            y='4'
            width='21'
            height='7'
          />
          <path
            d='M7.5,10 C6.11928813,10 5,8.88071187 5,7.5 C5,6.11928813 6.11928813,5 7.5,5 C8.88071187,5 10,6.11928813 10,7.5 C10,8.88071187 8.88071187,10 7.5,10 Z M7.5,8.50318386 L8.96946313,9.52254249 L8.45408455,7.81000086 L9.87764129,6.72745751 L8.08965668,6.68840721 L7.5,5 L6.91034332,6.68840721 L5.12235871,6.72745751 L6.54591545,7.81000086 L6.03053687,9.52254249 L7.5,8.50318386 Z'
            id='kp-Oval-12'
            fill='url(#kp-linearGradient-1)'
          />
        </g>
      </g>
    </svg>
  )
}
