import type { FlagIcon } from './types'

export const IconFlagZA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ZA',
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
      data-slot='icon-flag-za'
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
            id='za-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='za-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#06a86e' />
            <stop offset='1' stopColor='#007a4e' />
          </linearGradient>
          <linearGradient id='za-d' x1='3.5' x2='3.5' y1='2' y2='13' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffbf2e' />
            <stop offset='1' stopColor='#ffb612' />
          </linearGradient>
          <linearGradient
            id='za-e'
            x1='2.38'
            x2='2.38'
            y1='2.25'
            y2='12.75'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='za-f'
            x1='12.13'
            x2='12.13'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f44e46' />
            <stop offset='1' stopColor='#df3931' />
          </linearGradient>
          <linearGradient
            id='za-g'
            x1='12.13'
            x2='12.13'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#072cb4' />
            <stop offset='1' stopColor='#042396' />
          </linearGradient>
          <clipPath id='za-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='za-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#za-clip)'>
        <g clipPath='url(#za-a)'>
          <path fill='url(#za-b)' d='M21 0H0v15h21z' />
          <path fill='url(#za-c)' d='M21 0H0v15h21z' />
          <path fill='url(#za-d)' fillRule='evenodd' d='m0 2 7 5.5L0 13z' clipRule='evenodd' />
          <path
            fill='url(#za-e)'
            fillRule='evenodd'
            d='M-1 2.25 5.75 7.5-1 12.75z'
            clipRule='evenodd'
          />
          <path fill='#fff' fillRule='evenodd' d='M9 6 2 0h19v6z' clipRule='evenodd' />
          <path fill='url(#za-f)' fillRule='evenodd' d='m9.25 5-6-5H21v5z' clipRule='evenodd' />
          <path fill='#fff' fillRule='evenodd' d='M2 15h19V9H9z' clipRule='evenodd' />
          <path fill='url(#za-g)' fillRule='evenodd' d='M3.25 15H21v-5H9.25z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
