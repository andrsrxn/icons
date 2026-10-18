import type { FlagIcon } from './types'

export const IconFlagKG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KG',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-kg'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='kg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f22a46' />
            <stop offset='1' stopColor='#e71834' />
          </linearGradient>
          <linearGradient
            id='kg-d'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff04d' />
            <stop offset='1' stopColor='#ffee35' />
          </linearGradient>
          <linearGradient
            id='kg-e'
            x1='10.5'
            x2='10.5'
            y1='2.14'
            y2='12.86'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff04d' />
            <stop offset='1' stopColor='#ffee35' />
          </linearGradient>
          <clipPath id='kg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='kg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kg-clip)'>
        <g clipPath='url(#kg-a)'>
          <path fill='url(#kg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#kg-c)' d='M21 0H0v15h21z' />
          <path fill='url(#kg-d)' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          <path
            fill='url(#kg-e)'
            fillRule='evenodd'
            d='m10.5 11.04-1.22 1.82-.31-2.18-1.9 1.12.67-2.1-2.2.19 1.51-1.6L5 7.5l2.05-.79-1.5-1.6 2.19.19-.67-2.1 1.9 1.11.3-2.17 1.23 1.82 1.22-1.82.31 2.17 1.9-1.11-.67 2.1 2.2-.19-1.51 1.6L16 7.5l-2.05.79 1.5 1.6-2.19-.19.67 2.1-1.9-1.12-.3 2.18zm0-.04a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
