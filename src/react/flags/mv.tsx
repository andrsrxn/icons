import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMV: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>MV</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mv-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mv-linearGradient-2'>
          <stop stopColor='#F32249' offset='0%' />
          <stop stopColor='#D01739' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mv-linearGradient-3'>
          <stop stopColor='#15A04F' offset='0%' />
          <stop stopColor='#0F7E3D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mv-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mv-MV'>
          <rect
            id='mv-FlagBackground'
            fill='url(#mv-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mv-Mask-Copy'
            fill='url(#mv-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mv-Rectangle-1568'
            fill='url(#mv-linearGradient-3)'
            x='3'
            y='3'
            width='15'
            height='9'
            rx='0.5'
          />
          <path
            d='M12.25,4.08054488 C12.008383,4.02779398 11.7574373,4 11.5,4 C9.56700338,4 8,5.56700338 8,7.5 C8,9.43299662 9.56700338,11 11.5,11 C11.7574373,11 12.008383,10.972206 12.25,10.9194551 C10.677409,10.57612 9.5,9.17555931 9.5,7.5 C9.5,5.82444069 10.677409,4.42387999 12.25,4.08054488 Z'
            id='mv-Oval-12'
            fill='url(#mv-linearGradient-1)'
          />
        </g>
      </g>
    </svg>
  )
}
