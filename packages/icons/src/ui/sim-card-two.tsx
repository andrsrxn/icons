import type { Icon } from './types'

export const IconSimCardTwo: Icon = ({
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
      data-slot='icon-ui-sim-card-two'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.68 6.41c.54.57.82.86.96 1.22s.14.75.14 1.54v8.9c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H8.36c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42V5.94c0-1.89 0-2.83.58-3.42.6-.58 1.53-.58 3.42-.58h4.08c.78 0 1.17 0 1.52.14.36.13.64.4 1.21.93l2.37 2.2z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m16.99 4.78-.81-.85c-.87-.9-1.3-1.36-1.84-1.66a4 4 0 0 0-.75-.32c-.58-.18-1.2-.18-2.46-.18-2.8 0-4.2 0-5.2.67A4 4 0 0 0 4.8 3.56c-.67 1-.67 2.4-.67 5.2v5.7c0 3.63 0 5.45 1.1 6.6q.07.09.15.16c1.16 1.1 2.97 1.1 6.61 1.1s5.45 0 6.61-1.1l.16-.15c1.1-1.16 1.1-2.98 1.1-6.61v-3.48c0-1.61 0-2.42-.3-3.15-.3-.72-.87-1.3-2-2.45z'
        stroke='currentColor'
      />
      <path
        d='M9.91 10.85c.91-1.48 4.22-1.59 4.22 1.23 0 1.84-2.2 2.8-3.72 4.88-.38.52-.57.78-.43 1.05.13.28.49.28 1.2.28h3.05'
        stroke='currentColor'
      />
    </svg>
  )
}
