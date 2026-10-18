import type { FlagIcon } from './types'

export const IconFlagEU: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'EU',
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
      data-slot='icon-flag-eu'
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
            id='eu-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='eu-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#043cae' />
            <stop offset='1' stopColor='#00339a' />
          </linearGradient>
          <linearGradient
            id='eu-d'
            x1='10.5'
            x2='10.5'
            y1='1.79'
            y2='13.21'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd429' />
            <stop offset='1' stopColor='#fc0' />
          </linearGradient>
          <clipPath id='eu-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='eu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#eu-clip)'>
        <g clipPath='url(#eu-a)'>
          <path fill='url(#eu-b)' d='M21 0H0v15h21z' />
          <path fill='url(#eu-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#eu-d)'
            fillRule='evenodd'
            d='m10.5 3-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm0 10-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm5-5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-10 0-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm9.33-2.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-8.66 5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM13 3.67l-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-5 8.66-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm6.83-1.83-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-8.66-5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM13 12.33l-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zM8 3.67l-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
