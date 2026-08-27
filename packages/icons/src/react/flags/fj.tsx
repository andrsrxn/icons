import type { FlagIcon } from './types'

export const IconFlagFJ: FlagIcon = ({
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
  const titleText = title ?? 'FJ'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-fj'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='fj-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='fj-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#79cff6' />
          <stop offset='100%' stopColor='#68bfe6' />
        </linearGradient>
        <linearGradient id='fj-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#042c90' />
          <stop offset='100%' stopColor='#00247e' />
        </linearGradient>
        <linearGradient id='fj-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#eb1d43' />
          <stop offset='100%' stopColor='#d21034' />
        </linearGradient>
        <linearGradient id='fj-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <path id='fj-d' d='M0 3.5V0h5v3.5C5 6 2.5 7 2.5 7S0 6 0 3.5' />
        <path
          id='fj-h'
          d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
        />
        <clipPath id='fj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fj-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#fj-a)' d='M0 0h21v15H0z' />
          <path fill='url(#fj-b)' d='M0 0h21v15H0z' />
          <path fill='url(#fj-c)' d='M0 0h9v7H0z' />
          <g transform='translate(13 4)'>
            <mask id='fj-e' fill='#fff'>
              <use xlinkHref='#fj-d' />
            </mask>
            <use xlinkHref='#fj-d' fill='url(#fj-a)' />
            <path
              fill='#2a915c'
              d='M1 2.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m3 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              mask='url(#fj-e)'
            />
            <path fill='url(#fj-f)' d='M0 0h5v1H3v2h2v1H3v3H2V4H0V3h2V1H0z' mask='url(#fj-e)' />
          </g>
          <use xlinkHref='#fj-h' fill='url(#fj-g)' />
          <path
            stroke='#fff'
            strokeWidth='.5'
            d='M3.25 3.115-.676-.25H.5l.145.047L4.08 2.25h.848L9.25-.451V.25c0 .222-.128.47-.313.602L5.75 3.13v.756l3.225 2.764c.282.242.138.601-.225.601-.193 0-.442-.08-.604-.195L4.92 4.75h-.848L-.25 7.451v-1.08l3.5-2.5z'
          />
          <path
            fill='url(#fj-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#fj-g)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
        </g>
      </g>
    </svg>
  )
}
