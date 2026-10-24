import type { FlagIcon } from './types'

export const IconFlagCNA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CNA',
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
      data-slot='icon-flag-cna'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <clipPath id='cna-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='cna-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#cna-clip)'>
        <g clipPath='url(#cna-a)'>
          <mask id='cna-b' width='21' height='15' x='0' y='0' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M21 0H0v15h21z' />
          </mask>
          <g mask='url(#cna-b)'>
            <path fill='#19bfbf' d='M21 0H0v15h21z' />
            <path
              fill='#fff'
              fillRule='evenodd'
              d='M10.22 10.63a.3.3 0 0 0-.22-.14h-.25a.3.3 0 0 1-.17-.07L7.72 8.57a.3.3 0 0 1-.07-.18v-.8a.3.3 0 0 0-.07-.17l-.88-.88-.07-.12-.45-1.8a.3.3 0 0 0-.16-.17L4.67 4l-.03-.02-.85-.42a.3.3 0 0 1-.14-.22v-.6c0-.14.11-.25.25-.25h.65q.1 0 .17.08l.36.35a.3.3 0 0 0 .17.07h.8a.3.3 0 0 0 .17-.07l.36-.35a.3.3 0 0 1 .17-.08H8.6q.06 0 .11.03l.9.45.11.02h.88q.06 0 .11-.02l.9-.45.11-.03h1.7c.13 0 .24.11.24.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 0-.25.25v1.1q0 .15.14.22l.5.25a.25.25 0 0 0 .36-.22v-.85q.02-.23.25-.25h1c.14 0 .25.11.25.25s.11.25.25.25h1c.14 0 .25.11.25.25v.71l-.01.08-.47 1.4-.06.1-1.43 1.43-.05.07-.45.91-.03.11v.7c0 .13-.11.24-.25.24h-.1a.3.3 0 0 1-.22-.14l-.36-.72a.3.3 0 0 0-.22-.14h-1.2a.3.3 0 0 0-.22.14l-.37.75a.3.3 0 0 0 0 .22l.37.75a.3.3 0 0 0 .23.14h.74q.1 0 .17.07l.86.86a.3.3 0 0 1 .07.18v.64a.25.25 0 0 1-.25.25h-.6a.3.3 0 0 1-.22-.14l-.36-.72a.3.3 0 0 0-.22-.14h-.7a.3.3 0 0 1-.22-.14z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
