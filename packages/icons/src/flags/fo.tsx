import type { FlagIcon } from './types'

export const IconFlagFO: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'FO',
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
      data-slot='icon-flag-fo'
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
            id='fo-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fo-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1879d6' />
            <stop offset='1' stopColor='#0f67bb' />
          </linearGradient>
          <linearGradient
            id='fo-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f13e4f' />
            <stop offset='1' stopColor='#eb2d3f' />
          </linearGradient>
          <clipPath id='fo-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='fo-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fo-clip)'>
        <g clipPath='url(#fo-a)'>
          <path fill='url(#fo-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#fo-c)'
            fillRule='evenodd'
            d='M0 9h6v6h3V9h12V6H9V0H6v6H0z'
            clipRule='evenodd'
          />
          <path
            fill='url(#fo-d)'
            fillRule='evenodd'
            d='M0 8h7v7h1V8h13V7H8V0H7v7H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
