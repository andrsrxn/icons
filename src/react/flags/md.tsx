import type { FlagIcon } from './types'

export const IconFlagMD: FlagIcon = ({
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
  const titleText = title ?? 'MD'

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
        <linearGradient id='md-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='md-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#eb1c43' />
          <stop offset='100%' stopColor='#ca1134' />
        </linearGradient>
        <linearGradient id='md-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#115bcb' />
          <stop offset='100%' stopColor='#094aac' />
        </linearGradient>
        <linearGradient id='md-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd953' />
          <stop offset='100%' stopColor='#ffd130' />
        </linearGradient>
        <filter
          id='md-d'
          width='121.4%'
          height='110%'
          x='-10.7%'
          y='-5%'
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
        <path id='md-e' d='M7 0h7v15H7z' />
        <clipPath id='md-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#md-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#md-a)' d='M0 0h21v15H0z' />
          <path fill='url(#md-b)' d='M10 0h11v15H10z' />
          <path fill='url(#md-c)' d='M0 0h7v15H0z' />
          <use xlinkHref='#md-e' fill='#000' filter='url(#md-d)' />
          <use xlinkHref='#md-e' fill='url(#md-f)' />
          <path fill='#af7f59' d='M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9zm1 1v1.5h1V7z' />
        </g>
      </g>
    </svg>
  )
}
