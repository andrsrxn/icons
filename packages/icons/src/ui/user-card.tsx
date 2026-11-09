import type { Icon } from './types'

export const IconUserCard: Icon = ({
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
      data-slot='icon-ui-user-card'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M14.73 19.56c3.34 0 5.01 0 6.13-.94a4 4 0 0 0 .5-.5c.93-1.1.93-2.78.93-6.12s0-5.01-.94-6.13a4 4 0 0 0-.5-.49c-1.1-.94-2.78-.94-6.12-.94H9.27c-3.34 0-5.01 0-6.13.94a4 4 0 0 0-.49.5c-.94 1.1-.94 2.78-.94 6.12s0 5.01.94 6.13a4 4 0 0 0 .5.5c1.1.93 2.78.93 6.12.93zM8.19 14.5a3.13 3.13 0 0 1-3.02-3.03A3.16 3.16 0 0 1 8.2 8.4c1.55 0 2.92 1.44 2.92 3.08 0 .8-.31 1.63-.8 2.16a3 3 0 0 1-2.12.87'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M1.71 12c0-3.34 0-5.01.94-6.13a4 4 0 0 1 .5-.5c1.1-.93 2.78-.93 6.12-.93h5.46c3.34 0 5.01 0 6.13.94a4 4 0 0 1 .5.5c.93 1.1.93 2.78.93 6.12v0c0 3.34 0 5.01-.94 6.13a4 4 0 0 1-.5.5c-1.1.93-2.78.93-6.12.93H9.27c-3.34 0-5.01 0-6.13-.94a4 4 0 0 1-.5-.5c-.93-1.1-.93-2.78-.93-6.12'
        stroke='currentColor'
      />
      <path d='M18.78 10.26H15.2' stroke='currentColor' />
      <path d='M18.78 13.74H15.2' stroke='currentColor' />
      <path d='M11.2 11.48a2.93 2.93 0 1 0-5.87 0 2.93 2.93 0 0 0 5.86 0' stroke='currentColor' />
      <path d='M11.58 15.45a5.8 5.8 0 0 0-6.65 0' stroke='currentColor' />
    </svg>
  )
}
