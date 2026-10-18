import type { FlagIcon } from './types'

export const IconFlagMK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MK',
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
      data-slot='icon-flag-mk'
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
            id='mk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e81b26' />
            <stop offset='1' stopColor='#d00914' />
          </linearGradient>
          <linearGradient
            id='mk-d'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe94f' />
            <stop offset='1' stopColor='#ffe633' />
          </linearGradient>
          <linearGradient
            id='mk-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe94f' />
            <stop offset='1' stopColor='#ffe633' />
          </linearGradient>
          <linearGradient
            id='mk-f'
            x1='10.5'
            x2='10.5'
            y1='-2.65'
            y2='17.65'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe94f' />
            <stop offset='1' stopColor='#ffe633' />
          </linearGradient>
          <clipPath id='mk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mk-clip)'>
        <g clipPath='url(#mk-a)'>
          <path fill='url(#mk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mk-c)' d='M21 0H0v15h21z' />
          <path fill='url(#mk-d)' d='M10.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5' />
          <path
            fill='url(#mk-e)'
            fillRule='evenodd'
            d='M13.96 8 21 9V6l-7.04 1a4 4 0 0 1 0 1M7.03 7 0 6v3l7.03-1a4 4 0 0 1 0-1m4.15-2.93L12 0H9l.81 4.07a4 4 0 0 1 1.37 0m-1.37 6.86L9 15h3l-.82-4.07a4 4 0 0 1-1.37 0'
            clipRule='evenodd'
          />
          <path
            fill='url(#mk-f)'
            fillRule='evenodd'
            d='m7.65 9.54-8.19 5.88 2 2.23 6.71-7.54q-.3-.25-.52-.57m5.69-4.08 8.2-5.88-2.02-2.23-6.7 7.53q.3.26.52.58m-.52 4.65 6.7 7.54 2.01-2.23-8.19-5.88q-.22.3-.52.57M8.17 4.88l-6.7-7.53L-.54-.42l8.2 5.88q.22-.31.51-.58'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
