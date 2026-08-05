import type { FlagIcon } from './types'

export const IconFlagMS: FlagIcon = ({
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
  const titleText = title ?? 'MS'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ms-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ms-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#07319c' />
          <stop offset='100%' stopColor='#00247e' />
        </linearGradient>
        <linearGradient id='ms-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <linearGradient id='ms-e' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#08b9d6' />
          <stop offset='100%' stopColor='#00a3be' />
        </linearGradient>
        <linearGradient id='ms-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <path
          id='ms-d'
          d='M0 3.5V1c0-.553.444-1 1-1h3c.552 0 1 .441 1 1v2.5C5 6 2.5 7 2.5 7S0 6 0 3.5'
        />
        <clipPath id='ms-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ms-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ms-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ms-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#ms-a)'
            fillRule='nonzero'
            d='M3 3.23-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5z'
          />
          <path
            fill='url(#ms-c)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            fill='url(#ms-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#ms-c)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
          <g transform='translate(13 4)'>
            <mask id='ms-f' fill='#fff'>
              <use xlinkHref='#ms-d' />
            </mask>
            <use xlinkHref='#ms-d' fill='url(#ms-e)' />
            <path fill='#a63d09' d='M0 5h5v2H0z' mask='url(#ms-f)' />
            <path fill='url(#ms-g)' d='M3 2V1H2v1H1v1h1v2h1V3h1V2z' mask='url(#ms-f)' />
          </g>
        </g>
      </g>
    </svg>
  )
}
