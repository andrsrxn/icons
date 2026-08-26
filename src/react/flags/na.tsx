import type { FlagIcon } from './types'

export const IconFlagNA: FlagIcon = ({
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
  const titleText = title ?? 'NA'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-na'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='na-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='na-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c4799' />
          <stop offset='100%' stopColor='#05387e' />
        </linearGradient>
        <linearGradient id='na-g' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd243' />
          <stop offset='100%' stopColor='#ffcd2f' />
        </linearGradient>
        <linearGradient id='na-j' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#1bac55' />
          <stop offset='100%' stopColor='#149447' />
        </linearGradient>
        <linearGradient id='na-m' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e52347' />
          <stop offset='100%' stopColor='#d01739' />
        </linearGradient>
        <filter
          id='na-b'
          width='107.1%'
          height='115%'
          x='-3.6%'
          y='-7.5%'
          filterUnits='objectBoundingBox'>
          <feMorphology
            in='SourceAlpha'
            operator='dilate'
            radius='.25'
            result='shadowSpreadOuter1'
          />
          <feOffset in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <filter
          id='na-e'
          width='112.5%'
          height='125%'
          x='-6.2%'
          y='-6.2%'
          filterUnits='objectBoundingBox'>
          <feOffset dy='.5' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <filter
          id='na-h'
          width='107.1%'
          height='115%'
          x='-3.6%'
          y='-7.5%'
          filterUnits='objectBoundingBox'>
          <feMorphology
            in='SourceAlpha'
            operator='dilate'
            radius='.25'
            result='shadowSpreadOuter1'
          />
          <feOffset in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <filter
          id='na-k'
          width='106.2%'
          height='107.9%'
          x='-3.1%'
          y='-3.9%'
          filterUnits='objectBoundingBox'>
          <feMorphology
            in='SourceAlpha'
            operator='dilate'
            radius='.25'
            result='shadowSpreadOuter1'
          />
          <feOffset in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <path id='na-c' d='m3.121 12.304 21-10h-21z' />
        <path
          id='na-f'
          d='m6.621 6.804-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z'
        />
        <path id='na-i' d='M3.121 17.304h21v-10z' />
        <path id='na-l' d='M5.433 19.304 25.75 6.609 21.81.304 1.493 12.999z' />
        <clipPath id='na-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#na-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#na-a)' d='M0 0h21v15H0z' />
          <g transform='translate(-3.12 -2.3)'>
            <use xlinkHref='#na-c' fill='#000' filter='url(#na-b)' />
            <use xlinkHref='#na-c' fill='url(#na-d)' />
          </g>
          <g transform='translate(-3.12 -2.3)'>
            <use xlinkHref='#na-f' fill='#000' filter='url(#na-e)' />
            <use xlinkHref='#na-f' fill='url(#na-g)' />
          </g>
          <g transform='translate(-3.12 -2.3)'>
            <use xlinkHref='#na-i' fill='#000' filter='url(#na-h)' />
            <use xlinkHref='#na-i' fill='url(#na-j)' />
          </g>
          <g transform='translate(-3.12 -2.3)'>
            <use xlinkHref='#na-l' fill='#000' filter='url(#na-k)' />
            <use xlinkHref='#na-l' fill='url(#na-a)' />
          </g>
          <path
            fill='url(#na-m)'
            d='M2.65 19.608 27.243 4.24 24.593 0 0 15.368z'
            transform='translate(-3.12 -2.3)'
          />
        </g>
      </g>
    </svg>
  )
}
