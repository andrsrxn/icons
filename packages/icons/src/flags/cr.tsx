import type { FlagIcon } from './types'

export const IconFlagCR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CR',
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
      data-slot='icon-flag-cr'
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
            id='cr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#06358f' />
            <stop offset='1' stopColor='#042e7d' />
          </linearGradient>
          <linearGradient
            id='cr-d'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#06358f' />
            <stop offset='1' stopColor='#042e7d' />
          </linearGradient>
          <linearGradient
            id='cr-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cr-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e61f37' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <clipPath id='cr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cr-clip)'>
        <g clipPath='url(#cr-a)'>
          <path fill='url(#cr-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cr-c)' d='M21 0H0v3h21z' />
          <path fill='url(#cr-d)' d='M21 12H0v3h21z' />
          <path fill='url(#cr-e)' d='M21 3H0v9h21z' />
          <path fill='url(#cr-f)' d='M21 5H0v5h21z' />
        </g>
      </g>
    </svg>
  )
}
