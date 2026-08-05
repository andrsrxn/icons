import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTM: FlagIcon = ({
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
      <title>TM</title>

      <defs>
        <ellipse id='tm-d' cx='1.5' cy='1' rx='1.5' ry='1' />
        <ellipse id='tm-f' cx='1.5' cy='1' rx='1.5' ry='1' />
        <ellipse id='tm-h' cx='1.5' cy='1' rx='1.5' ry='1' />
        <ellipse id='tm-j' cx='1.5' cy='.5' rx='1.5' ry='1' />
        <ellipse id='tm-k' cx='1.5' cy='1' rx='1.5' ry='1' />
        <linearGradient id='tm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#30c375' />
          <stop offset='100%' stopColor='#28ae67' />
        </linearGradient>
        <linearGradient id='tm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#de414f' />
          <stop offset='100%' stopColor='#ca3745' />
        </linearGradient>
        <clipPath id='tm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tm-b)' d='M0 0h21v15H0z' />
          <path fill='url(#tm-c)' d='M3 0h3v15H3z' />
          <g transform='translate(3 1)'>
            <mask id='tm-e' fill='#fff'>
              <use xlinkHref='#tm-d' />
            </mask>
            <use xlinkHref='#tm-d' fill='#fff' />
            <circle cx='1.5' cy='1' r='1' fill='#dd404f' mask='url(#tm-e)' />
            <path fill='#fbaf29' d='M0 0h1.5v1H0z' mask='url(#tm-e)' />
            <path fill='#fbaf29' d='M1.5 1H3v1H1.5z' mask='url(#tm-e)' />
          </g>
          <g transform='translate(3 12)'>
            <mask id='tm-g' fill='#fff'>
              <use xlinkHref='#tm-f' />
            </mask>
            <use xlinkHref='#tm-f' fill='#fff' />
            <circle cx='1.5' cy='1' r='1' fill='#dd404f' mask='url(#tm-g)' />
            <path fill='#fbaf29' d='M0 0h1.5v1H0z' mask='url(#tm-g)' />
            <path fill='#fbaf29' d='M1.5 1H3v1H1.5z' mask='url(#tm-g)' />
          </g>
          <g transform='translate(3 7)'>
            <mask id='tm-i' fill='#fff'>
              <use xlinkHref='#tm-h' />
            </mask>
            <use xlinkHref='#tm-h' fill='#28ae67' />
            <circle cx='1.5' cy='1' r='1' fill='#dd404f' mask='url(#tm-i)' />
          </g>
          <use xlinkHref='#tm-j' fill='#28ae67' transform='translate(3 10)' />
          <g transform='translate(3 4)'>
            <mask id='tm-l' fill='#fff'>
              <use xlinkHref='#tm-k' />
            </mask>
            <use xlinkHref='#tm-k' fill='#fbaf29' />
            <circle cx='1.5' cy='1' r='1' fill='#dd404f' mask='url(#tm-l)' />
            <path fill='#28ae67' d='M0 0h1v2H0z' mask='url(#tm-l)' />
            <path fill='#28ae67' d='M2 0h1v2H2z' mask='url(#tm-l)' />
          </g>
          <path
            fill='url(#tm-a)'
            d='M11.117 3.179a.5.5 0 1 0 .766.642.5.5 0 0 0-.766-.642M9.821 5.117a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766m-1-1a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766m2-2a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766m-.5 1.5a.5.5 0 1 0-.642.766.5.5 0 0 0 .642-.766'
          />
          <path
            fill='url(#tm-a)'
            d='M13.107 7.088a3.05 3.05 0 0 1-4.626-.366 3.05 3.05 0 0 0 4.26-4.26q.192.14.366.313a3.05 3.05 0 0 1 0 4.313'
          />
        </g>
      </g>
    </svg>
  )
}
