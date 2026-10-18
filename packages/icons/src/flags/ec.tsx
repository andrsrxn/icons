import type { FlagIcon } from './types'

export const IconFlagEC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'EC',
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
      data-slot='icon-flag-ec'
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
            id='ec-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ec-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0748ae' />
            <stop offset='1' stopColor='#003993' />
          </linearGradient>
          <linearGradient
            id='ec-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de2035' />
            <stop offset='1' stopColor='#ce1126' />
          </linearGradient>
          <linearGradient
            id='ec-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd935' />
            <stop offset='1' stopColor='#fdd216' />
          </linearGradient>
          <linearGradient
            id='ec-f'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='9.6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fbdc44' />
            <stop offset='1' stopColor='#ffdc32' />
          </linearGradient>
          <clipPath id='ec-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ec-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ec-clip)'>
        <g clipPath='url(#ec-a)'>
          <path fill='url(#ec-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ec-c)' d='M21 7H0v4h21z' />
          <path fill='url(#ec-d)' d='M21 11H0v4h21z' />
          <path fill='url(#ec-e)' d='M21 0H0v7h21z' />
          <path
            fill='url(#ec-f)'
            fillRule='evenodd'
            d='M9.3 6a2 2 0 1 0 2.4 0L11 8.1h-1z'
            clipRule='evenodd'
          />
          <path fill='#5fc0dc' fillRule='evenodd' d='M10.5 5.5 11 8h-1z' clipRule='evenodd' />
          <path
            fill='#3f2821'
            d='M9.68 3.82a.3.3 0 0 0-.26-.06l-1.5.5a.25.25 0 1 0 .16.48l1.35-.45.9.89c.1.1.25.1.35 0l.89-.9 1.35.46a.25.25 0 0 0 .16-.48l-1.5-.5a.3.3 0 0 0-.26.06l-.82.83z'
            opacity='.66'
          />
        </g>
      </g>
    </svg>
  )
}
