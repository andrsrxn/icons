import type { FlagIcon } from './types'

export const IconFlagGL: FlagIcon = ({
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
  const titleText = title ?? 'GL'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-gl'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='gl-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='gl-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e82245' />
          <stop offset='100%' stopColor='#cc1838' />
        </linearGradient>
        <filter
          id='gl-b'
          width='107.1%'
          height='118.8%'
          x='-3.6%'
          y='-9.4%'
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
        <path id='gl-c' d='M0 0h21v8H0z' />
        <clipPath id='gl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gl-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#gl-a)' d='M0 0h21v15H0z' />
          <use xlinkHref='#gl-c' fill='#000' filter='url(#gl-b)' />
          <use xlinkHref='#gl-c' fill='url(#gl-a)' />
          <path fill='url(#gl-d)' d='M3 8H0v7h21V8H11a4 4 0 1 0-8 0' />
          <path fill='url(#gl-a)' d='M3 8a4 4 0 1 0 8 0z' />
        </g>
      </g>
    </svg>
  )
}
