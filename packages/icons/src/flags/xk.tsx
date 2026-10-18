import type { FlagIcon } from './types'

export const IconFlagXK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'XK',
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
      data-slot='icon-flag-xk'
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
            id='xk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='xk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2f5fbf' />
            <stop offset='1' stopColor='#244ea3' />
          </linearGradient>
          <linearGradient
            id='xk-d'
            x1='10.5'
            x2='10.5'
            y1='2.29'
            y2='6.71'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='xk-e'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e9c072' />
            <stop offset='1' stopColor='#cfa557' />
          </linearGradient>
          <clipPath id='xk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='xk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#xk-clip)'>
        <g clipPath='url(#xk-a)'>
          <path fill='url(#xk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#xk-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#xk-d)'
            fillRule='evenodd'
            d='m9 3.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm3 0-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm3 1-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm2 2-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-13 0-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm2-2-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#xk-e)'
            fillRule='evenodd'
            d='m9 10-1-.5-1-2h1l1-1 .5-1 1-.5.5.5 1 .5v.5l.5.5L14 8l-.5 1.5L12 11l-.5-1-1.5 1v1l-.5-.5z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
