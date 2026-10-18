import type { FlagIcon } from './types'

export const IconFlagCL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CL',
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
      data-slot='icon-flag-cl'
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
            id='cl-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cl-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ea3b2e' />
            <stop offset='1' stopColor='#d52b1e' />
          </linearGradient>
          <linearGradient
            id='cl-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='cl-e' x1='3.5' x2='3.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0b48c2' />
            <stop offset='1' stopColor='#0239a7' />
          </linearGradient>
          <linearGradient
            id='cl-f'
            x1='3.5'
            x2='3.5'
            y1='1.5'
            y2='5.12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='cl-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cl-clip)'>
        <g clipPath='url(#cl-a)'>
          <path fill='url(#cl-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cl-c)' d='M21 7H0v8h21z' />
          <path fill='url(#cl-d)' d='M21 0H0v7h21z' />
          <path fill='url(#cl-e)' d='M7 0H0v7h7z' />
          <path
            fill='url(#cl-f)'
            fillRule='evenodd'
            d='m3.5 4.28-1.18.84.44-1.38-1.16-.86 1.44-.01.46-1.37.46 1.37 1.44.01-1.16.86.44 1.38z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
