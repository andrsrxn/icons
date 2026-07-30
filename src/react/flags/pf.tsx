import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>PF</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pf-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pf-linearGradient-2'>
          <stop stopColor='#E02639' offset='0%' />
          <stop stopColor='#CA1A2C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pf-linearGradient-3'>
          <stop stopColor='#DC2235' offset='0%' />
          <stop stopColor='#CA1A2C' offset='100%' />
        </linearGradient>
        <circle id='pf-path-4' cx='2.5' cy='2.5' r='2.5' />
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pf-linearGradient-6'>
          <stop stopColor='#FFA135' offset='0%' />
          <stop stopColor='#FD9C2D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pf-linearGradient-7'>
          <stop stopColor='#DF2034' offset='0%' />
          <stop stopColor='#CA1A2C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pf-linearGradient-8'>
          <stop stopColor='#0B4BAD' offset='0%' />
          <stop stopColor='#08429A' offset='100%' />
        </linearGradient>
      </defs>
      <g id='pf-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='pf-PF'>
          <rect
            id='pf-FlagBackground'
            fill='url(#pf-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pf-Rectangle-2'
            fill='url(#pf-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='4'
          />
          <rect
            id='pf-Rectangle-2'
            fill='url(#pf-linearGradient-3)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <rect
            id='pf-Rectangle-2'
            fill='url(#pf-linearGradient-1)'
            x='0'
            y='4'
            width='21'
            height='7'
          />
          <g id='pf-Group' transform='translate(8.000000, 5.000000)'>
            <mask id='pf-mask-5' fill='white'>
              <use xlinkHref='#pf-path-4' />
            </mask>
            <g id='pf-Oval-1' />
            <rect
              id='pf-Rectangle-1362'
              fill='url(#pf-linearGradient-6)'
              mask='url(#pf-mask-5)'
              x='0'
              y='0'
              width='5'
              height='2.5'
            />
            <polygon
              id='pf-Rectangle-1364-Copy'
              fill='#FFFFFF'
              mask='url(#pf-mask-5)'
              points='1 1.5 4 1.5 3.5 2.5 1.5 2.5'
            />
            <path
              d='M2,0 L3,0 L3,1.49531555 C3,1.77404508 2.76806641,2 2.5,2 C2.22385763,2 2,1.78596497 2,1.49531555 L2,0 Z M1,1 C1,1 1.75,2.5 2.5,2.5 C3.25,2.5 4,1 4,1 L4,2 C4,2.55228475 3.55733967,3 3.00104344,3 L1.99895656,3 C1.44724809,3 1,2.55613518 1,2 L1,1 Z'
              id='pf-Combined-Shape'
              fill='url(#pf-linearGradient-7)'
              mask='url(#pf-mask-5)'
            />
            <rect
              id='pf-Rectangle-1362-Copy'
              fill='url(#pf-linearGradient-8)'
              mask='url(#pf-mask-5)'
              x='0'
              y='3'
              width='5'
              height='2'
            />
            <polygon
              id='pf-Rectangle-1364'
              fill='#FFFFFF'
              mask='url(#pf-mask-5)'
              points='0 3.5 5 3.5 5 4 0 4'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
