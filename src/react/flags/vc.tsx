import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagVC: FlagIcon = ({
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
      <title>VC</title>

      <defs>
        <linearGradient id='vc-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='vc-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#08c47a' />
          <stop offset='100%' stopColor='#009f60' />
        </linearGradient>
        <linearGradient id='vc-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c87e1' />
          <stop offset='100%' stopColor='#0073c7' />
        </linearGradient>
        <linearGradient id='vc-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd147' />
          <stop offset='100%' stopColor='#feca2f' />
        </linearGradient>
        <linearGradient id='vc-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#00c778' />
          <stop offset='100%' stopColor='#009f60' />
        </linearGradient>
        <clipPath id='vc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vc-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#vc-a)' d='M0 0h21v15H0z' />
          <path fill='url(#vc-b)' d='M10 0h11v15H10z' />
          <path fill='url(#vc-c)' d='M0 0h7v15H0z' />
          <path fill='url(#vc-d)' d='M6 0h9v15H6z' />
          <path
            fill='url(#vc-e)'
            d='m11 6 1.5-3L14 6l-1.5 3zM7 6l1.5-3L10 6 8.5 9zm2 4 1.5-3 1.5 3-1.5 3z'
          />
        </g>
      </g>
    </svg>
  )
}
