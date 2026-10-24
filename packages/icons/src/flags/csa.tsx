import type { FlagIcon } from './types'

export const IconFlagCSA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CSA',
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
      data-slot='icon-flag-csa'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <clipPath id='csa-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='csa-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#csa-clip)'>
        <g clipPath='url(#csa-a)'>
          <mask id='csa-b' width='21' height='15' x='0' y='0' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M21 0H0v15h21z' />
          </mask>
          <g mask='url(#csa-b)'>
            <path fill='#19bfbf' d='M21 0H0v15h21z' />
            <path
              fill='#fff'
              fillRule='evenodd'
              d='m8.1 12.31.01-.06.97-3.9v-.14l-.45-1.33a.3.3 0 0 0-.12-.14l-.77-.39a.3.3 0 0 1-.14-.22V4.34q0-.06.03-.11l.9-1.81a.3.3 0 0 1 .23-.14h2.6c.13 0 .24.11.24.25v.5c0 .14.11.25.25.25h.5c.14 0 .25.12.25.25v.6q.01.16.14.22l1.72.86a.3.3 0 0 1 .14.23v.78l-.02.12-.45.88-.08.1-1.4.93-.08.1-.94 1.87-.08.1-1.4.93-.08.1-.9 1.8a.3.3 0 0 1-.22.13h-.6a.25.25 0 0 1-.25-.25z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
