import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSK: FlagIcon = ({
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
      <title>SK</title>

      <defs>
        <linearGradient id='sk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c47b7' />
          <stop offset='100%' stopColor='#073da4' />
        </linearGradient>
        <linearGradient id='sk-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e53b35' />
          <stop offset='100%' stopColor='#d32e28' />
        </linearGradient>
        <linearGradient id='sk-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sk-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f73744' />
          <stop offset='100%' stopColor='#ec212f' />
        </linearGradient>
        <path
          id='sk-e'
          d='M1.711 2.001A1.05 1.05 0 0 1 2.751 1H7.25c.553 0 1.018.447 1.04 1.001L8.46 6.5c.022.553-.297 1.289-.72 1.652L6.146 9.518c-.633.542-1.662.54-2.292 0L2.259 8.15c-.419-.36-.742-1.098-.72-1.652z'
        />
        <clipPath id='sk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sk-b)' d='M0 5h21v5H0z' />
          <path fill='url(#sk-c)' d='M0 10h21v5H0z' />
          <path fill='url(#sk-a)' d='M0 0h21v5H0z' />
          <g transform='translate(2.5 2)'>
            <path
              fill='url(#sk-d)'
              fillRule='nonzero'
              d='M2.751 0H7.25c1.09 0 1.997.872 2.039 1.963L9.46 6.46c.033.86-.415 1.89-1.07 2.45l-1.594 1.367c-1.007.863-2.589.861-3.594 0L1.61 8.91C.957 8.352.506 7.32.539 6.46l.173-4.497A2.05 2.05 0 0 1 2.752 0'
            />
            <mask id='sk-g' fill='#fff'>
              <use xlinkHref='#sk-e' />
            </mask>
            <use xlinkHref='#sk-e' fill='url(#sk-f)' />
            <path
              fill='url(#sk-a)'
              d='M4.5 6.245A.25.25 0 0 0 4.252 6H3.248A.246.246 0 0 1 3 5.748v-.496C3 5.113 3.118 5 3.248 5h1.004a.246.246 0 0 0 .248-.252v-.496A.25.25 0 0 0 4.248 4h-.496a.25.25 0 0 1-.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252-.107.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.107.252.252.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.25.25 0 0 0-.252.252v.496c0 .139.118.252.248.252h1.004C6.89 5 7 5.107 7 5.252v.496C7 5.887 6.882 6 6.752 6H5.748a.245.245 0 0 0-.248.245v1.51A.245.245 0 0 1 5.248 8h-.496a.247.247 0 0 1-.252-.245z'
              mask='url(#sk-g)'
            />
            <path
              fill='#1251a1'
              d='M4.097 8.07C2.882 8.26 2 8.828 2 9.5c0 .828 1.343 1.5 3 1.5s3-.672 3-1.5c0-.671-.882-1.24-2.097-1.43a1 1 0 0 0-1.806 0'
              mask='url(#sk-g)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
