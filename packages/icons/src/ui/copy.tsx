import type { Icon } from './types'

export const IconCopy: Icon = ({
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
      data-slot='icon-ui-copy'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.24 7.92c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H10.8a3 3 0 0 0-2.88 2.92v.52a3 3 0 0 0 2.89 2.85h1.04c.78 0 1.16 0 1.5.08a3 3 0 0 1 2.14 1.88c.12.32.17.7.27 1.48l.24 1.89.03.2a3 3 0 0 0 2.87 2.52h.42a3 3 0 0 0 2.9-2.9V7.92'
        fill='currentColor'
      />
      <path
        d='M8.76 7.93h.35c3.3 0 4.95 0 5.97 1.02 1.03 1.03 1.03 2.68 1.03 5.98v.34c0 3.3 0 4.95-1.03 5.97-1.02 1.03-2.67 1.03-5.97 1.03h-.35c-3.3 0-4.95 0-5.97-1.03-1.03-1.02-1.03-2.67-1.03-5.97v-.34c0-3.3 0-4.95 1.03-5.98 1.02-1.02 2.67-1.02 5.97-1.02'
        stroke='currentColor'
      />
      <path
        d='M7.9 7.59c0-2.2 0-3.3.47-4.13q.47-.79 1.26-1.25c.81-.48 1.92-.48 4.12-.48h1.49c3.3 0 4.95 0 5.97 1.03 1.03 1.02 1.03 2.67 1.03 5.97v1.45c0 2.24 0 3.36-.5 4.18q-.46.76-1.21 1.22c-.83.5-1.95.5-4.19.5'
        stroke='currentColor'
      />
    </svg>
  )
}
