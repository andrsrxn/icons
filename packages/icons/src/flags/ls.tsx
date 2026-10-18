import type { FlagIcon } from './types'

export const IconFlagLS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LS',
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
      data-slot='icon-flag-ls'
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
            id='ls-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ls-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c33b8' />
            <stop offset='1' stopColor='#05279d' />
          </linearGradient>
          <linearGradient
            id='ls-d'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1db158' />
            <stop offset='1' stopColor='#149447' />
          </linearGradient>
          <linearGradient
            id='ls-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ls-f'
            x1='10.5'
            x2='10.5'
            y1='6.28'
            y2='9.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='ls-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ls-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ls-clip)'>
        <g clipPath='url(#ls-a)'>
          <path fill='url(#ls-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ls-c)' d='M21 0H0v5h21z' />
          <path fill='url(#ls-d)' d='M21 10H0v5h21z' />
          <path fill='url(#ls-e)' d='M21 5H0v5h21z' />
          <path
            fill='url(#ls-f)'
            fillRule='evenodd'
            d='m10 7.5.34-1.03c.09-.26.23-.26.32 0L11 7.5l.86 1.3c.08.1.06.27-.05.35 0 0-.31.35-1.31.35s-1.3-.35-1.3-.35a.3.3 0 0 1-.06-.36z'
            clipRule='evenodd'
          />
          <path
            fill='#242424'
            d='M10.5 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 0c.28 0 .5-.72.5-1a.5.5 0 0 0-1 0c0 .28.22 1 .5 1'
          />
        </g>
      </g>
    </svg>
  )
}
