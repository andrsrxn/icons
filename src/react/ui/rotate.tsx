import type { Icon } from './types'

export const IconRotate: Icon = ({
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
      data-slot='rotate'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M4 5.77h16v12.48H4z' fill='currentColor' />
      <path
        d='m18.65 15.98.09.08c1.06 1.02 1.6 1.53 1.6 2.17s-.54 1.15-1.6 2.16l-.09.09m1.68-2.23H8c-1.89 0-2.83 0-3.41-.59S4 16.13 4 14.25V11.1m-.33-5.33H16c1.89 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v3.14M5.35 3.52l-.09.08C4.2 4.62 3.67 5.13 3.66 5.77c0 .64.54 1.15 1.6 2.17l.09.08'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
