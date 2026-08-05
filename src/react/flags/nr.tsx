import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagNR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
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
      <title>NR</title>

      <defs>
        <linearGradient id='nr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='nr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0744a7' />
          <stop offset='100%' stopColor='#00307d' />
        </linearGradient>
        <linearGradient id='nr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fcc747' />
          <stop offset='100%' stopColor='#fec539' />
        </linearGradient>
        <clipPath id='nr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#nr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#nr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#nr-b)' d='M0 0h21v15H0z' />
          <path fill='url(#nr-c)' d='M0 6h21v2H0z' />
          <path
            fill='url(#nr-a)'
            d='m5.5 12.25-.773 1.128.038-1.367-1.288.458.834-1.083L3 11l1.311-.386-.834-1.083 1.288.458-.038-1.367L5.5 9.75l.773-1.128-.038 1.367 1.288-.458-.834 1.083L8 11l-1.311.386.834 1.083-1.288-.458.038 1.367z'
          />
        </g>
      </g>
    </svg>
  )
}
