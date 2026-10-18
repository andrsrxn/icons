import type { FlagIcon } from './types'

export const IconFlagAX: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AX',
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
      data-slot='icon-flag-ax'
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
            id='ax-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ax-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#157cbb' />
            <stop offset='1' stopColor='#0e6ca5' />
          </linearGradient>
          <linearGradient
            id='ax-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd34d' />
            <stop offset='1' stopColor='#fecb2f' />
          </linearGradient>
          <linearGradient
            id='ax-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#eb363a' />
            <stop offset='1' stopColor='#d52b2f' />
          </linearGradient>
          <clipPath id='ax-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ax-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ax-clip)'>
        <g clipPath='url(#ax-a)'>
          <path fill='url(#ax-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ax-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#ax-d)'
            fillRule='evenodd'
            d='M0 9h6v6h3V9h12V6H9V0H6v6H0z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ax-e)'
            fillRule='evenodd'
            d='M0 8h7v7h1V8h13V7H8V0H7v7H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
