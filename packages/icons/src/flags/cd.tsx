import type { FlagIcon } from './types'

export const IconFlagCD: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CD',
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
      data-slot='icon-flag-cd'
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
            id='cd-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='cd-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#158aff' />
            <stop offset='1' stopColor='#007fff' />
          </linearGradient>
          <linearGradient
            id='cd-d'
            x1='11.18'
            x2='9.36'
            y1='9.42'
            y2='5.85'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ce1120' />
            <stop offset='1' stopColor='#e11b2b' />
          </linearGradient>
          <clipPath id='cd-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cd-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cd-clip)'>
        <g clipPath='url(#cd-a)'>
          <path fill='url(#cd-b)' d='M21 0H0v15h21z' />
          <path fill='url(#cd-c)' d='M21 0H0v15h21z' />
          <path
            fill='#fdd216'
            fillRule='evenodd'
            d='M24.27 3.9-1.57 17.08l-2.72-5.34L21.55-1.44z'
            clipRule='evenodd'
          />
          <path fill='url(#cd-d)' d='M-1.74 16 24.1 2.83 22.28-.73-3.56 12.43z' />
          <path
            fill='#fdd216'
            fillRule='evenodd'
            d='M3.5 4.48 2.03 5.52l.55-1.72-1.45-1.07 1.8-.02.57-1.7.58 1.7 1.8.02L4.43 3.8l.54 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
