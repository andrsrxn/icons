import type { Icon } from './types'

export const IconOmega: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='omega'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse opacity='.2' cx='12' cy='12.27' rx='6.35' ry='7.56' fill='currentColor' />
      <path
        d='M20.38 17.53v1.33a1 1 0 0 1-1 1h-5.22c2.36-.77 4.62-4.54 4.62-7.62 0-4.46-3.04-8.07-6.78-8.07s-6.78 3.61-6.78 8.07c0 3.08 2.06 6.89 4.52 7.62H4.62a1 1 0 0 1-1-1v-1.33'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
