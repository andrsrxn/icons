import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTT: FlagIcon = ({
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
      <title>TT</title>

      <defs>
        <clipPath id='tt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tt-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tt-linearGradient-2'>
          <stop stopColor='#ED233C' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tt-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g
        clipPath='url(#tt-clip)'
        id='tt-Symbols'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'>
        <g id='tt-TT'>
          <rect
            id='tt-FlagBackground'
            fill='url(#tt-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='tt-Mask-Copy'
            fill='url(#tt-linearGradient-2)'
            x='-0.00446856128'
            y='0.00461341129'
            width='21'
            height='15'
          />
          <polygon
            id='tt-Rectangle-2'
            fill='url(#tt-linearGradient-1)'
            transform='translate(10.750000, 7.504613) scale(-1, 1) translate(-10.750000, -7.504613) '
            points='23 -1 15.8562517 -4.06074167 0.755939376 13.9351097 -1.5 16 6.15268546 19.0699685 20.9773661 1.40260205'
          />
          <polygon
            id='tt-Rectangle-2'
            fill='url(#tt-linearGradient-3)'
            transform='translate(10.495531, 7.504613) scale(-1, 1) translate(-10.495531, -7.504613) '
            points='3.09022221 20.2192269 21.7310629 -1.99606199 17.9008407 -5.21000004 -0.74000001 17.0052888 3.09022221 20.2192269'
          />
        </g>
      </g>
    </svg>
  )
}
