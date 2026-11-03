import type { Icon } from './types'

export const IconUnlock: Icon = ({
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
      data-slot='icon-ui-unlock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <rect opacity='.2' x='3.3' y='9.24' width='17.39' height='12.98' rx='3' fill='currentColor' />
      <rect x='3.3' y='9.24' width='17.39' height='12.98' rx='3' stroke='currentColor' />
      <path
        d='m7.62 9.24.42-3.62.07-.53a4 4 0 0 1 3.81-3.3h.54l.31.02a4 4 0 0 1 2.96 1.62l.18.26.07.1'
        stroke='currentColor'
      />
      <path
        d='M13.11 15.44a1.11 1.11 0 1 1-2.22 0 1.11 1.11 0 0 1 2.22 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
