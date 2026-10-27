import type { Icon } from './types'

export const IconFieldSparkle: Icon = ({
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
      data-slot='icon-ui-field-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M20.63 8.17c.76-.4 1.68.16 1.68 1.02v3.04c0 2.81 0 4.22-.88 5.1l-.01.01c-.88.87-2.28.87-5.1.87H7.69c-2.82 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12v-.42c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h10.4l-.75.6c-.6.5-.51 1.46.19 1.81q.28.16.44.43c.4.69.97 1.68 1.02 1.72.04.03.33-.55.61-1.11q.34-.7 1.03-1.07'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M5.95 13.93h6.55' stroke='currentColor' />
      <path
        d='M22.3 12.08v.13c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.12.88H7.69c-2.82 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12v-.42c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h4.56'
        stroke='currentColor'
      />
      <path d='M18.8 3.85c0 1.77-1.9 3.7-3.68 3.7' stroke='currentColor' />
      <path d='M18.8 3.85c0 1.77 1.92 3.7 3.7 3.7' stroke='currentColor' />
      <path d='M18.8 11.23c0-1.74-1.91-3.69-3.68-3.69' stroke='currentColor' />
      <path d='M18.8 11.23c0-1.76 1.95-3.69 3.7-3.69' stroke='currentColor' />
    </svg>
  )
}
