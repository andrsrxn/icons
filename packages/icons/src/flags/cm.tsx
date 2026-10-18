import type { FlagIcon } from './types'

export const IconFlagCM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CM',
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
      data-slot='icon-flag-cm'
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
            id='cm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cm-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdc44' />
            <stop offset='1' stopColor='#fdd216' />
          </linearGradient>
          <linearGradient id='cm-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#059170' />
            <stop offset='1' stopColor='#007b5e' />
          </linearGradient>
          <linearGradient
            id='cm-e'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e21a30' />
            <stop offset='1' stopColor='#ce1126' />
          </linearGradient>
          <linearGradient
            id='cm-f'
            x1='17.5'
            x2='17.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdc44' />
            <stop offset='1' stopColor='#fdd216' />
          </linearGradient>
          <linearGradient
            id='cm-g'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='9.52'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdc42' />
            <stop offset='1' stopColor='#fdd217' />
          </linearGradient>
          <clipPath id='cm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cm-clip)'>
        <g clipPath='url(#cm-a)'>
          <path fill='url(#cm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cm-c)' d='M21 0H10v15h11z' />
          <path fill='url(#cm-d)' d='M7 0H0v15h7z' />
          <path fill='url(#cm-e)' d='M14 0H7v15h7z' />
          <path fill='url(#cm-f)' d='M21 0h-7v15h7z' />
          <path
            fill='url(#cm-g)'
            fillRule='evenodd'
            d='M10.5 8.48 9.03 9.52l.54-1.72-1.45-1.07 1.8-.02L10.5 5l.57 1.71 1.8.02-1.44 1.07.54 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
