import type { Icon } from './types'

export const IconFieldX: Icon = ({
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
      data-slot='icon-ui-field-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m16.63 14.38 5.68 5.68' stroke='currentColor' />
      <path d='m16.62 20.06 5.67-5.68' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.3 5.46c3.78 0 5.66 0 6.83 1.18 1.18 1.17 1.18 3.05 1.18 6.82v1l-4.11 4.08H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M12.67 18.54H8.23c-2.37 0-3.55 0-4.45-.49a4 4 0 0 1-1.6-1.6c-.49-.9-.49-2.08-.49-4.45s0-3.55.49-4.45a4 4 0 0 1 1.6-1.6c.9-.49 2.08-.49 4.45-.49h8.88c1.11 0 1.67 0 2.13.11a4 4 0 0 1 2.95 2.96c.12.46.12 1.02.12 2.13'
        stroke='currentColor'
      />
      <path d='M5.98 14.52h6.58' stroke='currentColor' />
    </svg>
  )
}
