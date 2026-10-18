import type { FlagIcon } from './types'

export const IconFlagMA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MA',
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
      data-slot='icon-flag-ma'
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
            id='ma-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ma-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e33b44' />
            <stop offset='1' stopColor='#c02a32' />
          </linearGradient>
          <clipPath id='ma-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ma-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ma-clip)'>
        <g clipPath='url(#ma-a)'>
          <path fill='url(#ma-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ma-c)' d='M21 0H0v15h21z' />
          <path
            fill='#0a6135'
            d='m10.5 9.26-2.65 1.88.98-3.1-2.61-1.93 3.25-.03L10.5 3l1.03 3.08 3.25.03-2.61 1.93.97 3.1zm0-1.23.8.56-.3-.93.78-.58h-.97l-.31-.93-.31.92-.97.01.78.58-.3.93z'
          />
        </g>
      </g>
    </svg>
  )
}
