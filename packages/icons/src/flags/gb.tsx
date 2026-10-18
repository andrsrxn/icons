import type { FlagIcon } from './types'

export const IconFlagGB: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GB',
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
      data-slot='icon-flag-gb'
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
            id='gb-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0a17a7' />
            <stop offset='1' stopColor='#030e88' />
          </linearGradient>
          <linearGradient
            id='gb-d'
            x1='10.5'
            x2='10.5'
            y1='-1.44'
            y2='16.44'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gb-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e6273e' />
            <stop offset='1' stopColor='#cf152b' />
          </linearGradient>
          <clipPath id='gb-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gb-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gb-clip)'>
        <g clipPath='url(#gb-a)'>
          <path fill='url(#gb-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gb-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gb-d)'
            fillRule='evenodd'
            d='M5 10H0V5h5L-2.08.22l1.12-1.66L8 4.61V-1h5v5.6l8.96-6.04L23.08.22 15.99 5h5v5h-5l7.09 4.78-1.12 1.66L13 10.39V16H8v-5.6l-8.96 6.04-1.12-1.66z'
            clipRule='evenodd'
          />
          <path
            fill='#db1f35'
            d='m14.14 4.96 9.5-6.25a.25.25 0 1 0-.28-.42l-9.5 6.25a.25.25 0 1 0 .28.42m.73 5.52 8.51 5.74a.25.25 0 0 0 .28-.41l-8.51-5.74a.25.25 0 1 0-.28.41M6.14 4.53l-8.88-6a.25.25 0 0 0-.28.42l8.88 5.99a.25.25 0 0 0 .28-.41M6.83 10l-9.85 6.52a.25.25 0 1 0 .28.42l9.84-6.53a.25.25 0 1 0-.27-.41'
          />
          <path
            fill='url(#gb-e)'
            fillRule='evenodd'
            d='M0 9h9v6h3V9h9V6h-9V0H9v6H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
