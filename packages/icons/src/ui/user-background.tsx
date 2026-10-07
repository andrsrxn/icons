import type { Icon } from './types'

export const IconUserBackground: Icon = ({
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
      data-slot='icon-ui-user-background'
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
        d='M19.56 21.3c.96 0 1.75-.78 1.75-1.74V8.69c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.69c-2.82 0-4.24 0-5.12.88S2.7 5.87 2.7 8.7v10.84a1.78 1.78 0 0 0 3.5.49l.43-1.5.1-.34a3 3 0 0 1 1.07-1.44c.31-.26.47-.38.6-.52a3 3 0 0 0 .73-2.84c-.04-.18-.12-.37-.27-.74l-.17-.43-.14-.36a3 3 0 0 1 .4-2.68l.24-.3.2-.24a3 3 0 0 1 2.09-1H12c.42 0 .63 0 .82.02a3 3 0 0 1 2.2 1.46c.1.17.19.36.35.75l.2.49a2.7 2.7 0 0 1-.27 2.6 2.7 2.7 0 0 0 .56 3.7l.32.25.05.05a3 3 0 0 1 .94 1.25l.02.07.73 1.9c.26.69.9 1.14 1.64 1.14'
        fill='currentColor'
      />
      <path
        d='M15.82 11.4A3.8 3.8 0 0 1 12 15.22a3.82 3.82 0 1 1 3.82-3.82'
        stroke='currentColor'
      />
      <path d='M17.93 21.14a5.92 5.92 0 1 0-11.85 0' stroke='currentColor' />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='matrix(0 -1 -1 0 21.58 21.77)'
        stroke='currentColor'
      />
    </svg>
  )
}
