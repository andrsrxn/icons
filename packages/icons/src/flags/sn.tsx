import type { FlagIcon } from './types'

export const IconFlagSN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SN',
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
      data-slot='icon-flag-sn'
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
            id='sn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sn-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f13642' />
            <stop offset='1' stopColor='#e1202c' />
          </linearGradient>
          <linearGradient id='sn-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#17a052' />
            <stop offset='1' stopColor='#108442' />
          </linearGradient>
          <linearGradient
            id='sn-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff166' />
            <stop offset='1' stopColor='#fdee54' />
          </linearGradient>
          <linearGradient
            id='sn-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='9.52'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#17a052' />
            <stop offset='1' stopColor='#108442' />
          </linearGradient>
          <clipPath id='sn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sn-clip)'>
        <g clipPath='url(#sn-a)'>
          <path fill='url(#sn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sn-c)' d='M21 0H10v15h11z' />
          <path fill='url(#sn-d)' d='M7 0H0v15h7z' />
          <path fill='url(#sn-e)' d='M14 0H7v15h7z' />
          <path
            fill='url(#sn-f)'
            fillRule='evenodd'
            d='m10.5 8.53-1.47 1 .5-1.71-1.4-1.1 1.77-.05.6-1.67.6 1.67 1.78.06-1.4 1.09.49 1.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
