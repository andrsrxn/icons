import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPW: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>PW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pw-linearGradient-2'>
          <stop stopColor='#65C6EE' offset='0%' />
          <stop stopColor='#4FAED5' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pw-linearGradient-3'>
          <stop stopColor='#FFE044' offset='0%' />
          <stop stopColor='#FFDD32' offset='100%' />
        </linearGradient>
      </defs>
      <g id='pw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='pw-PW'>
          <rect
            id='pw-FlagBackground'
            fill='url(#pw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pw-Mask-Copy'
            fill='url(#pw-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <circle id='pw-Oval-9' fill='url(#pw-linearGradient-3)' cx='9.5' cy='7.5' r='4.5' />
        </g>
      </g>
    </svg>
  )
}
