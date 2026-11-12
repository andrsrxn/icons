import type { Icon } from './types'

export const IconFieldSparkle: Icon = ({
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
      data-slot='icon-ui-field-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.3 7.09v5.4c0 2.83 0 4.25-.87 5.13-.88.88-2.3.88-5.12.88H7.69c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-1c0-2.82 0-4.24.88-5.12s2.3-.87 5.12-.87h10.4l-2.04 1.72 1.62 1.14c.37.68 1.08 2.23 1.14 2.28 0 0 .83-1.63 1.13-2.28z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M5.95 13.93h6.55' stroke='currentColor' />
      <path
        d='M12.25 5.5H8.2c-2.81 0-4.22 0-5.17.77q-.32.24-.56.56C1.7 7.78 1.7 9.19 1.7 12s0 4.22.77 5.17q.24.32.56.56c.95.77 2.36.77 5.17.77h7.7c2.74 0 4.1 0 5.04-.73q.38-.27.65-.65c.73-.94.73-2.3.73-5.04'
        stroke='currentColor'
      />
      <path d='M18.8 3.85c0 1.77-1.9 3.7-3.68 3.7' stroke='currentColor' />
      <path d='M18.8 3.85c0 1.77 1.92 3.7 3.7 3.7' stroke='currentColor' />
      <path d='M18.8 11.23c0-1.74-1.91-3.69-3.68-3.69' stroke='currentColor' />
      <path d='M18.8 11.23c0-1.76 1.95-3.69 3.7-3.69' stroke='currentColor' />
    </svg>
  )
}
