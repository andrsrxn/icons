import type { FlagIcon } from './types'

export const IconFlagCEU: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'CEU',
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
      data-slot='icon-flag-ceu'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <clipPath id='ceu-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ceu-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ceu-clip)'>
        <g clipPath='url(#ceu-a)'>
          <mask id='ceu-b' width='21' height='15' x='0' y='0' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M21 0H0v15h21z' />
          </mask>
          <g mask='url(#ceu-b)'>
            <path fill='#19bfbf' d='M21 0H0v15h21z' />
            <path
              fill='#fff'
              fillRule='evenodd'
              d='m12.38 13.09-.78-.79-.06-.1-.43-1.27a.25.25 0 0 0-.48.14l.4 1.56a.3.3 0 0 1-.07.23l-.23.23a.25.25 0 0 1-.35 0l-.25-.25a.3.3 0 0 1-.07-.18v-.84q0-.06-.03-.1l-.4-.82a.3.3 0 0 0-.23-.14H8.12L8 10.8l-.85.43a.3.3 0 0 0-.13.14l-.43 1.3a.3.3 0 0 1-.13.15l-.79.4a.3.3 0 0 1-.23 0l-.74-.38a.3.3 0 0 1-.14-.22v-1.6c0-.13.1-.25.25-.25h1q.23-.01.25-.25v-.7l.01-.09.43-1.29a.3.3 0 0 1 .24-.17h.76q.06 0 .11-.02l.9-.45.1-.03h.7q.23-.01.25-.25v-.14q0-.1.07-.18l.18-.18a.25.25 0 0 1 .4.06l.28.55a.3.3 0 0 0 .22.14h1.17a.3.3 0 0 0 .23-.17l.39-1.16a.3.3 0 0 1 .24-.17h.57a.25.25 0 0 0 0-.5h-.5a.25.25 0 0 1-.25-.25v-.69l.02-.11.4-.79a.3.3 0 0 0-.05-.28l-.2-.2a.25.25 0 0 0-.35 0l-.75.75a.3.3 0 0 0-.07.18v.85q0 .05-.02.08l-.43 1.3a.3.3 0 0 1-.23.16h-.22a.3.3 0 0 1-.18-.07l-.35-.35a.3.3 0 0 1-.07-.18.25.25 0 0 0-.36-.22l-.48.24a.3.3 0 0 1-.29-.04l-.3-.3a.3.3 0 0 1-.07-.18v-.8q0-.1.07-.17l2.39-2.38.1-.06 1.4-.47.08-.02h.8q.15.01.23.14l.4.81q.03.06.03.11v1.34q0 .1.07.18l.32.31q.1.12.06.26l-.4 1.17c-.03.1.01.23.1.29l1.35.9.74.37c.14.06.18.23.1.36l-.8 1.2-.04.14v1.24a.3.3 0 0 1-.17.24l-1.23.41a.3.3 0 0 0-.15.13l-.43.87-.05.06-.8.8a.3.3 0 0 1-.27.05zm-4.32-.33a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-1.5-6.5a.5.5 0 1 1-1 .04.5.5 0 0 1 1-.04'
              clipRule='evenodd'
            />
            <path
              fill='#fff'
              fillRule='evenodd'
              d='m7.03 6.32.03-.12v-.38q0-.06-.03-.1l-.3-.6a.25.25 0 0 1 .23-.36h.35c.14 0 .25.12.25.25v1.2l.02.1.3.6a.25.25 0 0 1-.23.35h-.69a.25.25 0 0 1-.22-.36z'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
