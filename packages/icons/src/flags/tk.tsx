import type { FlagIcon } from './types'

export const IconFlagTK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TK',
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
      data-slot='icon-flag-tk'
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
            id='tk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0637c5' />
            <stop offset='1' stopColor='#002caa' />
          </linearGradient>
          <linearGradient id='tk-d' x1='11' x2='11' y1='2' y2='13' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fdd33f' />
            <stop offset='1' stopColor='#fed02f' />
          </linearGradient>
          <clipPath id='tk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tk-clip)'>
        <g clipPath='url(#tk-a)'>
          <path fill='url(#tk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tk-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#tk-d)'
            fillRule='evenodd'
            d='M4 12h15v1H3zm7.5-6c3-2 6.5-4 6.5-4s-1.64 3.07-1.5 4.5C16.7 8.4 19 11 19 11H5s3.5-3 6.5-5'
            clipRule='evenodd'
          />
          <path
            fill='#fff'
            fillRule='evenodd'
            d='m4 9-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm1-6.5-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm2 3-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7zm-5 0-.7.2.2-.7-.2-.7.7.2.7-.2-.2.7.2.7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
