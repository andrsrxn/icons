import type { FlagIcon } from './types'

export const IconFlagAI: FlagIcon = ({
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
  const titleText = title ?? 'AI'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ai'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ai-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ai-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0a17a7' />
          <stop offset='100%' stopColor='#030e88' />
        </linearGradient>
        <linearGradient id='ai-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#db1e36' />
          <stop offset='100%' stopColor='#d51931' />
        </linearGradient>
        <linearGradient id='ai-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffa51b' />
          <stop offset='100%' stopColor='#ff9a00' />
        </linearGradient>
        <filter
          id='ai-e'
          width='112.5%'
          height='120%'
          x='-6.2%'
          y='-5%'
          filterUnits='objectBoundingBox'>
          <feOffset dy='.5' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <path id='ai-d' d='M0 2.5V0l1 .5L2 0l1 .5L4 0v2.5C4 4 2 5 2 5S0 4 0 2.5' />
        <clipPath id='ai-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ai-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ai-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ai-b)' d='M0 0h21v15H0z' />
          <path
            fill='url(#ai-a)'
            fillRule='nonzero'
            d='M3 3.23-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5z'
          />
          <path
            fill='url(#ai-c)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25a.54.54 0 0 1-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.9.9 0 0 1-.458-.149L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            fill='url(#ai-a)'
            d='M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 0 0 .505-.495V4.5h3.51a.49.49 0 0 0 .49-.505v-.99a.495.495 0 0 0-.49-.505H5.5V0h-2v2.5z'
          />
          <path fill='url(#ai-c)' d='M0 3h4V0h1v3h4v1H5v3H4V4H0z' />
          <g transform='translate(13 5)'>
            <mask id='ai-f' fill='#fff'>
              <use xlinkHref='#ai-d' />
            </mask>
            <use xlinkHref='#ai-d' fill='#000' filter='url(#ai-e)' />
            <use xlinkHref='#ai-d' fill='url(#ai-a)' />
            <path fill='#9accff' d='M0 4h4v1H0z' mask='url(#ai-f)' />
            <path
              fill='url(#ai-g)'
              d='M2 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M1 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              mask='url(#ai-f)'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
