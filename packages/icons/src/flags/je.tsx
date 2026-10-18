import type { FlagIcon } from './types'

export const IconFlagJE: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'JE',
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
      data-slot='icon-flag-je'
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
            id='je-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='je-c'
            x1='10.5'
            x2='10.5'
            y1='-1.44'
            y2='16.43'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ef273f' />
            <stop offset='1' stopColor='#db1c33' />
          </linearGradient>
          <linearGradient
            id='je-d'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='5.29'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f22a41' />
            <stop offset='1' stopColor='#e51d34' />
          </linearGradient>
          <linearGradient
            id='je-e'
            x1='10.5'
            x2='10.5'
            y1='1'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fadf46' />
            <stop offset='1' stopColor='#f9dc38' />
          </linearGradient>
          <clipPath id='je-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='je-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#je-clip)'>
        <g clipPath='url(#je-a)'>
          <path fill='url(#je-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#je-c)'
            fillRule='evenodd'
            d='M10.5 6.3-.96-1.45-2.08.22 8.72 7.5l-10.8 7.28 1.12 1.65L10.5 8.7l11.46 7.73 1.12-1.65-10.8-7.28L23.09.22l-1.12-1.66z'
            clipRule='evenodd'
          />
          <path
            fill='url(#je-d)'
            fillRule='evenodd'
            d='M9 2.5c0-.28.22-.5.5-.5h2c.28 0 .5.21.5.5v1c0 .27-.16.66-.35.85l-.8.8a.5.5 0 0 1-.7 0l-.8-.8c-.2-.2-.35-.57-.35-.86z'
            clipRule='evenodd'
          />
          <path
            fill='url(#je-e)'
            fillRule='evenodd'
            d='M10.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-2C9.67 2 9 1.77 9 1.5c0-.28.67-.5 1.5-.5s1.5.22 1.5.5c0 .27-.67.5-1.5.5'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
