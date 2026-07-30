import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBN: FlagIcon = ({
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
      <title>BN</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bn-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bn-linearGradient-2'>
          <stop stopColor='#F7E250' offset='0%' />
          <stop stopColor='#F7DF38' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bn-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bn-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bn-BN'>
          <rect
            id='bn-FlagBackground'
            fill='url(#bn-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bn-Mask-Copy'
            fill='url(#bn-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bn-Rectangle-2-Copy-4'
            fill='url(#bn-linearGradient-1)'
            transform='translate(11.013030, 6.090461) rotate(20.000000) translate(-11.013030, -6.090461) '
            x='-3.48696979'
            y='4.59046107'
            width='29'
            height='3'
          />
          <rect
            id='bn-Rectangle-2-Copy-4'
            fill='url(#bn-linearGradient-3)'
            transform='translate(9.986970, 8.909539) rotate(20.000000) translate(-9.986970, -8.909539) '
            x='-4.51303021'
            y='7.40953893'
            width='29'
            height='3'
          />
        </g>
      </g>
    </svg>
  )
}
