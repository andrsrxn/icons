import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPT: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>PT</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pt-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pt-linearGradient-2'>
          <stop stopColor='#FF2936' offset='0%' />
          <stop stopColor='#FD0D1B' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pt-linearGradient-3'>
          <stop stopColor='#128415' offset='0%' />
          <stop stopColor='#0A650C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pt-linearGradient-4'>
          <stop stopColor='#FAF94F' offset='0%' />
          <stop stopColor='#F8F736' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pt-linearGradient-5'>
          <stop stopColor='#1D50B5' offset='0%' />
          <stop stopColor='#15439D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='pt-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='pt-PT'>
          <rect
            id='pt-FlagBackground'
            fill='url(#pt-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pt-Mask-Copy'
            fill='url(#pt-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pt-Rectangle-2-Copy'
            fill='url(#pt-linearGradient-3)'
            x='0'
            y='0'
            width='8'
            height='15'
          />
          <path
            d='M8,9.5 C9.1045695,9.5 10,8.6045695 10,7.5 C10,6.3954305 9.1045695,5.5 8,5.5 C6.8954305,5.5 6,6.3954305 6,7.5 C6,8.6045695 6.8954305,9.5 8,9.5 Z M8,10.5 C6.34314575,10.5 5,9.15685425 5,7.5 C5,5.84314575 6.34314575,4.5 8,4.5 C9.65685425,4.5 11,5.84314575 11,7.5 C11,9.15685425 9.65685425,10.5 8,10.5 Z'
            id='pt-Oval-1'
            fill='url(#pt-linearGradient-4)'
            fillRule='nonzero'
          />
          <path
            d='M7,6.25577831 C7,6.11451585 7.10752869,6 7.24523926,6 L8.75476074,6 C8.89020264,6 9,6.11394024 9,6.25577831 L9,8.00104344 C9,8.55275191 8.55613518,9 8,9 C7.44771525,9 7,8.55733967 7,8.00104344 L7,6.25577831 Z'
            id='pt-Combined-Shape'
            fill='url(#pt-linearGradient-1)'
          />
          <path
            d='M8,8 C8.27614237,8 8.5,7.27614237 8.5,7 C8.5,6.72385763 8.27614237,6.5 8,6.5 C7.72385763,6.5 7.5,6.72385763 7.5,7 C7.5,7.27614237 7.72385763,8 8,8 Z'
            id='pt-Oval-27'
            fill='url(#pt-linearGradient-5)'
          />
        </g>
      </g>
    </svg>
  )
}
