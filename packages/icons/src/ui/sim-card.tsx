import type { Icon } from './types'

export const IconSimCard: Icon = ({
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
      data-slot='icon-ui-sim-card'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.68 6.41c.54.57.82.86.96 1.22s.14.75.14 1.54v8.9c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58H8.36c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42V5.94c0-1.89 0-2.83.58-3.42.6-.58 1.53-.58 3.42-.58h4.08c.78 0 1.17 0 1.52.14.36.13.64.4 1.21.93l2.37 2.2zM7.65 14.36c0 2.06 0 3.1.63 3.74l.05.06c.65.62 1.68.62 3.74.62s3.09 0 3.74-.62l.05-.06c.63-.65.63-1.68.63-3.74s0-3.09-.63-3.74l-.05-.05c-.65-.63-1.68-.63-3.74-.63s-3.09 0-3.74.63l-.05.05c-.63.65-.63 1.68-.63 3.74'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='m16.99 4.78-.81-.85a9 9 0 0 0-1.84-1.66 4 4 0 0 0-.75-.32c-.58-.18-1.2-.18-2.46-.18-2.8 0-4.2 0-5.2.67A4 4 0 0 0 4.8 3.56c-.67 1-.67 2.4-.67 5.2v5.7c0 3.63 0 5.45 1.1 6.6q.07.09.15.16c1.16 1.1 2.97 1.1 6.61 1.1s5.45 0 6.61-1.1l.16-.15c1.1-1.16 1.1-2.98 1.1-6.61v-3.48c0-1.61 0-2.42-.3-3.14s-.87-1.3-2-2.46z'
        stroke='currentColor'
      />
      <path
        d='M7.65 14.78v-.84c0-1.88 0-2.83.59-3.41.58-.59 1.52-.59 3.41-.59h.84c1.89 0 2.83 0 3.42.59.58.58.58 1.53.58 3.41v.84c0 1.89 0 2.83-.58 3.42-.59.58-1.53.58-3.42.58h-.84c-1.89 0-2.83 0-3.41-.58-.59-.59-.59-1.53-.59-3.42'
        stroke='currentColor'
      />
      <path d='M10.5 18.16v-3.5' stroke='currentColor' />
      <path d='M13.5 18.16v-3.5' stroke='currentColor' />
    </svg>
  )
}
