import type { Icon } from './types'

export const IconCassetteTape: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-cassette-tape'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.27 4.06c3.72 0 5.58 0 6.74 1.14l.06.06c1.14 1.17 1.14 3.02 1.14 6.74s0 5.57-1.14 6.74l-.06.06c-1.16 1.14-3.02 1.14-6.74 1.14H9.73c-3.72 0-5.58 0-6.74-1.14l-.06-.06C1.79 17.57 1.79 15.72 1.79 12s0-5.57 1.14-6.74l.06-.06C4.15 4.06 6 4.06 9.73 4.06zM18 8.68a2 2 0 0 0-1.74-1h-8.6c-.67 0-1.3.34-1.68.9l-.02.03a1.98 1.98 0 0 0 1.65 3.1h8.71a1.98 1.98 0 0 0 1.7-3z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.79 12c0-3.72 0-5.57 1.14-6.74l.06-.06C4.15 4.06 6 4.06 9.73 4.06h4.54c3.72 0 5.58 0 6.74 1.14l.06.06c1.14 1.17 1.14 3.02 1.14 6.74v0c0 3.72 0 5.57-1.14 6.74l-.06.06c-1.16 1.14-3.02 1.14-6.74 1.14H9.73c-3.72 0-5.58 0-6.74-1.14l-.06-.06C1.79 17.57 1.79 15.72 1.79 12'
        stroke='currentColor'
      />
      <path
        d='M5.44 9.51c0-1.07.88-1.95 1.96-1.95h9.2c1.08 0 1.96.88 1.96 1.95v0c0 1.08-.88 1.96-1.96 1.96H7.4A1.95 1.95 0 0 1 5.44 9.5'
        stroke='currentColor'
      />
      <path d='M6.55 16.44h10.9' stroke='currentColor' />
      <path d='M5.44 9.51a1.95 1.95 0 1 1 3.91 0 1.95 1.95 0 0 1-3.9 0' stroke='currentColor' />
      <path d='M14.65 9.51a1.95 1.95 0 1 1 3.9 0 1.95 1.95 0 0 1-3.9 0' stroke='currentColor' />
    </svg>
  )
}
