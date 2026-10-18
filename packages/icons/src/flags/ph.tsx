import type { FlagIcon } from './types'

export const IconFlagPH: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PH',
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
      data-slot='icon-flag-ph'
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
            id='ph-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ph-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dd1c34' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='ph-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0d4bc3' />
            <stop offset='1' stopColor='#073da6' />
          </linearGradient>
          <linearGradient id='ph-e' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ph-f' x1='4.5' x2='4.5' y1='2' y2='13' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fdd64d' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <clipPath id='ph-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ph-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ph-clip)'>
        <g clipPath='url(#ph-a)'>
          <path fill='url(#ph-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ph-c)' d='M21 7H0v8h21z' />
          <path fill='url(#ph-d)' d='M21 0H0v7h21z' />
          <path fill='url(#ph-e)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#ph-f)'
            fillRule='evenodd'
            d='m3.4 8.5-.86 1.3.33-1.54-.14-.14-1.54.33 1.32-.86v-.2l-1.32-.86 1.54.33.14-.14-.33-1.54.86 1.32h.2l.86-1.32-.33 1.54.14.14 1.54-.33-1.32.86v.2l1.32.86-1.54-.33-.14.14.33 1.54-.86-1.32zM7.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
