import type { Icon } from './types'

export const IconClosedCaptioningFilled: Icon = ({
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
      data-slot='icon-ui-closed-captioning-filled'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M9.3 19.57h5.4c3.35 0 5.03 0 6.15-.94a4 4 0 0 0 .47-.48c.95-1.12.95-2.8.95-6.15v0c0-3.36 0-5.03-.95-6.15a4 4 0 0 0-.47-.48c-1.12-.94-2.8-.94-6.15-.94H9.3c-3.35 0-5.03 0-6.15.94a4 4 0 0 0-.47.48c-.95 1.12-.95 2.8-.95 6.15v0c0 3.36 0 5.03.95 6.15a4 4 0 0 0 .47.48c1.12.94 2.8.94 6.15.94'
        stroke='currentColor'
      />
      <path
        d='M1.75 12c0-3.23 0-4.85.88-5.95a4 4 0 0 1 .62-.61c1.1-.88 2.7-.88 5.94-.88h5.62c3.23 0 4.85 0 5.94.88a4 4 0 0 1 .62.61c.88 1.1.88 2.72.88 5.95s0 4.85-.88 5.95a4 4 0 0 1-.62.61c-1.1.88-2.7.88-5.94.88H9.19c-3.23 0-4.85 0-5.94-.88a4 4 0 0 1-.62-.61c-.88-1.1-.88-2.72-.88-5.95m16.78-3.62a4.04 4.04 0 0 0-5.9 3.62 4.06 4.06 0 0 0 5.9 3.62.75.75 0 0 0-.68-1.34q-.53.27-1.17.28a2.56 2.56 0 1 1 1.17-4.84.75.75 0 0 0 .68-1.34m-9.4-.44q.99.01 1.83.44a.75.75 0 1 1-.68 1.34 2.56 2.56 0 1 0 0 4.56.75.75 0 1 1 .68 1.34A4.05 4.05 0 0 1 5.06 12a4.06 4.06 0 0 1 4.06-4.06'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
    </svg>
  )
}
