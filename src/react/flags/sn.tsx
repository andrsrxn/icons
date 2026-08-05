import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSN: FlagIcon = ({
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
      <title>SN</title>

      <defs>
        <linearGradient id='sn-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sn-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f13642' />
          <stop offset='100%' stopColor='#e1202c' />
        </linearGradient>
        <linearGradient id='sn-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#17a052' />
          <stop offset='100%' stopColor='#108442' />
        </linearGradient>
        <linearGradient id='sn-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff166' />
          <stop offset='100%' stopColor='#fdee54' />
        </linearGradient>
        <clipPath id='sn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sn-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sn-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sn-b)' d='M10 0h11v15H10z' />
          <path fill='url(#sn-c)' d='M0 0h7v15H0z' />
          <path fill='url(#sn-d)' d='M7 0h7v15H7z' />
          <path
            fill='url(#sn-c)'
            d='m10.5 8.525-1.47.998.495-1.706-1.403-1.09 1.776-.056L10.5 5l.602 1.67 1.776.057-1.403 1.09.494 1.706z'
          />
        </g>
      </g>
    </svg>
  )
}
