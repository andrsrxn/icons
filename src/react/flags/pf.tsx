import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPF: FlagIcon = ({
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
      <title>PF</title>

      <defs>
        <linearGradient id='pf-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pf-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e02639' />
          <stop offset='100%' stopColor='#ca1a2c' />
        </linearGradient>
        <linearGradient id='pf-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#dc2235' />
          <stop offset='100%' stopColor='#ca1a2c' />
        </linearGradient>
        <linearGradient id='pf-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffa135' />
          <stop offset='100%' stopColor='#fd9c2d' />
        </linearGradient>
        <linearGradient id='pf-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#df2034' />
          <stop offset='100%' stopColor='#ca1a2c' />
        </linearGradient>
        <linearGradient id='pf-h' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0b4bad' />
          <stop offset='100%' stopColor='#08429a' />
        </linearGradient>
        <circle id='pf-d' cx='2.5' cy='2.5' r='2.5' />
        <clipPath id='pf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pf-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pf-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pf-b)' d='M0 0h21v4H0z' />
          <path fill='url(#pf-c)' d='M0 11h21v4H0z' />
          <path fill='url(#pf-a)' d='M0 4h21v7H0z' />
          <g transform='translate(8 5)'>
            <mask id='pf-f' fill='#fff'>
              <use xlinkHref='#pf-d' />
            </mask>
            <path fill='url(#pf-e)' d='M0 0h5v2.5H0z' mask='url(#pf-f)' />
            <path fill='#fff' d='M1 1.5h3l-.5 1h-2z' mask='url(#pf-f)' />
            <path
              fill='url(#pf-g)'
              d='M2 0h1v1.495A.51.51 0 0 1 2.5 2a.495.495 0 0 1-.5-.505zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 0 1 1 2z'
              mask='url(#pf-f)'
            />
            <path fill='url(#pf-h)' d='M0 3h5v2H0z' mask='url(#pf-f)' />
            <path fill='#fff' d='M0 3.5h5V4H0z' mask='url(#pf-f)' />
          </g>
        </g>
      </g>
    </svg>
  )
}
