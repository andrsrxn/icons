import type { Icon } from './types'

export const IconNotesQuotes: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-notes-quotes'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.9 21.46c2.83 0 4.25 0 5.13-.88s.88-2.3.88-5.12V9.65c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.09c-2.82 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v5.8c0 2.84 0 4.25.88 5.13s2.3.88 5.12.88zm-8.35-9.38a1.93 1.93 0 0 1 3.58-1l.3.51c.47.8.5 1.78.05 2.59l-.87 1.58-2.21-1.74a2.2 2.2 0 0 1-.85-1.75zm9.98-1.2a1.72 1.72 0 0 0-3.13.98v.39c0 .7.31 1.36.85 1.8l2.06 1.71.81-1.45c.49-.88.43-1.96-.14-2.79z'
        fill='currentColor'
      />
      <rect
        width='17.81'
        height='17.81'
        rx='3'
        transform='matrix(0 -1 -1 0 20.9 21.46)'
        stroke='currentColor'
      />
      <path d='M12 5.3V2' stroke='currentColor' />
      <path d='M7.6 5.3V2' stroke='currentColor' />
      <path d='M16.4 5.3V2' stroke='currentColor' />
      <path
        d='M6.38 12.12a2.23 2.23 0 0 1 3.82-1.56c.4.4.66 1.13.66 1.94 0 1-.02 2.36-1.26 3.57-.25.24-.37.36-.5.32-.11-.05-.12-.25-.14-.64-.03-.57-.2-1.17-.73-1.34-1.17-.37-1.85-1.06-1.85-2.29'
        stroke='currentColor'
      />
      <path
        d='M13.14 12.12a2.23 2.23 0 0 1 3.82-1.56c.4.4.66 1.13.66 1.94 0 1-.02 2.36-1.25 3.57-.25.24-.37.36-.5.3-.12-.04-.12-.24-.12-.62 0-.59-.11-1.21-.65-1.34-1.2-.28-1.96-1.06-1.96-2.29'
        stroke='currentColor'
      />
    </svg>
  )
}
