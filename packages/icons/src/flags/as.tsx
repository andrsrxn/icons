import type { FlagIcon } from './types'

export const IconFlagAS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AS',
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
      data-slot='icon-flag-as'
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
            id='as-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='as-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#071585' />
            <stop offset='1' stopColor='#000b64' />
          </linearGradient>
          <linearGradient
            id='as-d'
            x1='11'
            x2='11'
            y1='-.5'
            y2='15.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d32636' />
            <stop offset='1' stopColor='#ba1827' />
          </linearGradient>
          <linearGradient
            id='as-e'
            x1='11.96'
            x2='11.96'
            y1='.93'
            y2='14.07'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='as-f'
            x1='16.5'
            x2='15.63'
            y1='3'
            y2='7.88'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ab5423' />
            <stop offset='1' stopColor='#5a3719' />
          </linearGradient>
          <clipPath id='as-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='as-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#as-clip)'>
        <g clipPath='url(#as-a)'>
          <path fill='url(#as-b)' d='M21 0H0v15h21z' />
          <path fill='url(#as-c)' d='M21 0H0v15h21z' />
          <path fill='url(#as-d)' d='m22 15.5-22-8 22-8z' />
          <path fill='url(#as-e)' d='M21 .93 2.93 7.5 21 14.07z' />
          <path
            fill='url(#as-f)'
            fillRule='evenodd'
            d='M16 7.04c-.12-.12-.8.15-.8.15L14 6s-.06-.66.5-1c.42-.25 1.22-.16 2-.5C17.75 3.96 19 3 19 3l-.8 2.2s.92.48.8.8c-.03.1-.93.38-1 .5-.13.22.52.29.32.54C17.73 7.76 17 8.5 17 8.5L16 8s.15-.81 0-.96'
            clipRule='evenodd'
          />
          <path fill='#ffc322' d='M13.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ffc322' d='M12.5 9h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1' />
          <path
            fill='#ffc322'
            d='m14.2 10.46 3.5-1.5a.5.5 0 0 0-.4-.92l-3.5 1.5a.5.5 0 1 0 .4.92'
          />
        </g>
      </g>
    </svg>
  )
}
