import type { Icon } from './types'

export const IconMirror: Icon = ({
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
      data-slot='icon-ui-mirror'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M20.24 9.6c0-3.76 0-5.65-1.17-6.82S16 1.6 12.24 1.6h-.48C8 1.6 6.1 1.6 4.93 2.78S3.76 5.84 3.76 9.6v4.78c0 3.77 0 5.66 1.17 6.83S8 22.4 11.76 22.4h.48c3.77 0 5.66 0 6.83-1.17s1.17-3.06 1.17-6.83z'
        fill='currentColor'
      />
      <path
        d='M12 22.4h-.24c-3.77 0-5.66 0-6.83-1.18-1.17-1.17-1.17-3.06-1.17-6.83V9.61c0-3.77 0-5.66 1.17-6.83S8 1.6 11.76 1.6h.48c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v4.78c0 3.77 0 5.66-1.17 6.83S16 22.4 12.24 22.4z'
        stroke='currentColor'
      />
      <path d='M9.55 4.68 6.91 7.33' stroke='currentColor' />
      <path d='M13.92 5.03 7.3 11.66' stroke='currentColor' />
    </svg>
  )
}
