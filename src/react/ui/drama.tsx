import type { Icon } from './types'

export const IconDrama: Icon = ({
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
      data-slot='drama'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.2 15.7c-3.69.55-6.24-4.88-6.67-7.79-.28-1.93.79-1.81 2.39-1.64.8.08 1.76.18 2.73.04.97-.15 1.85-.52 2.6-.83 1.48-.63 2.47-1.05 2.76.88.1.7.14 1.58.09 2.53 0 0-3.29-1.88-3.9-.6-.95 1.62 0 7.4 0 7.4'
        fill='currentColor'
      />
      <path
        d='M20.47 10.89c-.43 2.9-2.83 8.42-6.52 7.87-3.7-.55-4.4-6.52-3.96-9.43.43-2.9 2.47-.48 5.36-.05s5.55-1.3 5.12 1.6Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M14.02 8.75c.07-.89.06-1.72-.02-2.39-.33-2.91-2.45-.55-5.35-.22s-5.5-1.48-5.17 1.44 2.55 8.5 6.26 8.08q.34-.04.65-.14'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m12.57 11.6 1.1.17M6.55 9.1l1.13-.11m8.8 3.2.98.14m-4.27 2.57c.4.35.71.5 1.24.57.53.08.88.03 1.37-.19m-7.72-2.7c.4-.36.7-.51 1.23-.6.28-.06.28-.04.51 0'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
