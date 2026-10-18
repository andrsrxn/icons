import type { FlagIcon } from './types'

export const IconFlagLV: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LV',
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
      data-slot='icon-flag-lv'
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
            id='lv-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lv-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#b9414b' />
            <stop offset='1' stopColor='#9d323b' />
          </linearGradient>
          <linearGradient
            id='lv-d'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#b9414b' />
            <stop offset='1' stopColor='#9d323b' />
          </linearGradient>
          <linearGradient
            id='lv-e'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='lv-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='lv-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lv-clip)'>
        <g clipPath='url(#lv-a)'>
          <path fill='url(#lv-b)' d='M21 0H0v15h21z' />
          <path fill='url(#lv-c)' d='M21 0H0v6h21z' />
          <path fill='url(#lv-d)' d='M21 9H0v6h21z' />
          <path fill='url(#lv-e)' d='M21 6H0v3h21z' />
        </g>
      </g>
    </svg>
  )
}
