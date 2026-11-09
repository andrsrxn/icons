import type { Icon } from './types'

export const IconCos: Icon = ({
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
      data-slot='icon-ui-cos'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M8.71 12.03c0-2.21 1.38-4.01 3.08-4.01s3.07 1.8 3.07 4.01c0 2.22-1.37 4.02-3.07 4.02-.86 0-1.64-.46-2.2-1.2a4.7 4.7 0 0 1-.88-2.82'
        stroke='currentColor'
      />
      <path
        d='M22.42 9a3.7 3.7 0 0 0-2.54-1.05c-1.22 0-2.55.68-2.55 2.1 0 3.07 5.1.63 5.1 3.74 0 1.46-1.31 2.24-2.55 2.24s-2.08-.39-2.65-1.24'
        stroke='currentColor'
      />
      <path
        d='M6.67 8.45a3 3 0 0 0-1.58-.43c-1.92 0-3.48 1.78-3.48 3.97s1.56 3.97 3.48 3.97q.86 0 1.58-.43'
        stroke='currentColor'
      />
    </svg>
  )
}
