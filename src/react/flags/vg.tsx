import type { FlagIcon } from './types'

export const IconFlagVG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'VG'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-vg'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='vg-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='vg-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#07319c' />
          <stop offset='100%' stopColor='#00247e' />
        </linearGradient>
        <linearGradient id='vg-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#008339' />
          <stop offset='100%' stopColor='#00612a' />
        </linearGradient>
        <linearGradient id='vg-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd033' />
          <stop offset='100%' stopColor='#fec403' />
        </linearGradient>
        <linearGradient id='vg-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <clipPath id='vg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vg-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#vg-a)' d='M0 0h21v15H0z' />
          <path fill='url(#vg-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#vg-c)'
            d='M13 7.5V5c0-.553.444-1 1-1h3c.552 0 1 .441 1 1v2.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
          />
          <path
            fill='url(#vg-d)'
            d='M14.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
          <ellipse cx='15.5' cy='7' fill='url(#vg-a)' rx='1' ry='1.5' />
          <path
            fill='url(#vg-d)'
            fillRule='nonzero'
            d='M12.5 10c0 .954 1.366 1.5 3 1.5s3-.546 3-1.5a.5.5 0 1 0-1 0c0 .01-.121.124-.418.243-.403.161-.97.257-1.582.257s-1.18-.096-1.582-.257c-.297-.119-.418-.233-.418-.243a.5.5 0 1 0-1 0'
          />
          <path
            fill='url(#vg-a)'
            fillRule='nonzero'
            d='M3 3.23-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5z'
          />
          <path
            fill='url(#vg-e)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            fill='url(#vg-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#vg-e)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
        </g>
      </g>
    </svg>
  )
}
