import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagSH: FlagIcon = ({
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
      <title>SH</title>

      <defs>
        <linearGradient id='sh-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='sh-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#07319c' />
          <stop offset='100%' stopColor='#00247e' />
        </linearGradient>
        <linearGradient id='sh-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#a7d2ff' />
          <stop offset='100%' stopColor='#91c6fd' />
        </linearGradient>
        <linearGradient id='sh-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ee7b2d' />
          <stop offset='100%' stopColor='#cc621a' />
        </linearGradient>
        <linearGradient id='sh-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fffc4b' />
          <stop offset='100%' stopColor='#fffc38' />
        </linearGradient>
        <linearGradient id='sh-h' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <path
          id='sh-c'
          d='M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 5.5 2.5 6 2.5 6S0 5.5 0 3.5'
        />
        <clipPath id='sh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sh-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#sh-a)' d='M0 0h21v15H0z' />
          <path fill='url(#sh-b)' d='M0 0h21v15H0z' />
          <g transform='translate(13 6)'>
            <mask id='sh-f' fill='#fff'>
              <use xlinkHref='#sh-c' />
            </mask>
            <use xlinkHref='#sh-c' fill='url(#sh-d)' />
            <path
              fill='url(#sh-e)'
              d='M.5 6.5c.828 0 1-1.395 1-2.5s-.172-1.5-1-1.5S-1 2.895-1 4-.328 6.5.5 6.5'
              mask='url(#sh-f)'
            />
            <ellipse cx='2.5' cy='4.5' fill='#a75113' mask='url(#sh-f)' rx='1.5' ry='1' />
            <circle cx='2.5' cy='3.5' r='1' fill='#fff' mask='url(#sh-f)' />
            <path fill='url(#sh-g)' d='M0 0h5v2H0z' mask='url(#sh-f)' />
          </g>
          <path
            fill='url(#sh-a)'
            fillRule='nonzero'
            d='M3 3.23-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5z'
          />
          <path
            fill='url(#sh-h)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            fill='url(#sh-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#sh-h)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
        </g>
      </g>
    </svg>
  )
}
