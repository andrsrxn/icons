import type { FlagIcon } from './types'

export const IconFlagCAF: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CAF',
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
      data-slot='icon-flag-caf'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <clipPath id='caf-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='caf-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#caf-clip)'>
        <g clipPath='url(#caf-a)'>
          <mask id='caf-b' width='21' height='15' x='0' y='0' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M21 0H0v15h21z' />
          </mask>
          <g mask='url(#caf-b)'>
            <path fill='#19bfbf' d='M21 0H0v15h21z' />
            <path
              fill='#fff'
              fillRule='evenodd'
              d='M6.01 4.13a.3.3 0 0 1 .07-.22l1.84-1.84A.3.3 0 0 1 8.1 2h1.24q.15 0 .22.14l.36.72a.3.3 0 0 0 .23.14h1.69q.15 0 .22.14l1.36 2.72a.3.3 0 0 0 .23.14h.84c.2 0 .33.24.2.4l-1.18 1.58-.03.04-.46.93-.03.1v.9l-.02.1-.48.95-.93 1.86a.3.3 0 0 1-.22.14h-.7a.3.3 0 0 1-.22-.14l-.4-.8-.03-.12V9.1a.3.3 0 0 0-.07-.17l-.39-.39-.06-.1-.42-1.27A.3.3 0 0 0 8.8 7H6.7a.25.25 0 0 1-.25-.2zM14 10.25q.02-.23.25-.25h.5q.23.02.25.25v.7l-.02.1-.41.81a.3.3 0 0 1-.22.14h-.1a.25.25 0 0 1-.25-.25z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
