import type { Icon } from './types'

export const IconClosedCaptioningFilled: Icon = ({
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
      data-slot='icon-ui-closed-captioning-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect x='1.73' y='4.43' width='20.54' height='15.14' rx='3' stroke='currentColor' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.75 10.56c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h8.5c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v2.88c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88h-8.5c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12zm16.68-2.08a3.96 3.96 0 0 0-5.79 3.54 3.98 3.98 0 0 0 5.79 3.55.75.75 0 1 0-.68-1.34q-.51.26-1.13.27a2.48 2.48 0 1 1 1.13-4.69.75.75 0 0 0 .68-1.33m-9.29-.44q.99.01 1.8.44a.75.75 0 1 1-.67 1.33 2.48 2.48 0 1 0 0 4.42.75.75 0 0 1 .68 1.34 3.96 3.96 0 0 1-5.79-3.55c0-2.2 1.78-3.98 3.98-3.98'
        fill='currentColor'
      />
    </svg>
  )
}
