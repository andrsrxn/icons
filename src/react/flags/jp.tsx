import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagJP: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>JP</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jp-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jp-linearGradient-2'>
          <stop stopColor='#D81441' offset='0%' />
          <stop stopColor='#BB0831' offset='100%' />
        </linearGradient>
      </defs>
      <g id='jp-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='jp-JP'>
          <rect
            id='jp-FlagBackground'
            fill='url(#jp-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <circle id='jp-Oval-9' fill='url(#jp-linearGradient-2)' cx='10.5' cy='7.5' r='4.5' />
        </g>
      </g>
    </svg>
  )
}
