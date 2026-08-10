import type { Icon } from './types'

export const IconTextLowecase: Icon = ({
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
      data-slot='text-lowecase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M19.82 14.17a3.05 3.05 0 0 1-3.09 3.02 3.05 3.05 0 0 1-3.08-3.02 3.05 3.05 0 0 1 3.08-3.03c1.7 0 3.09 1.35 3.09 3.03m-9.55 0a3.05 3.05 0 0 1-3.09 3.02 3.05 3.05 0 0 1-3.08-3.02 3.05 3.05 0 0 1 3.08-3.03c1.7 0 3.09 1.35 3.09 3.03'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M14.23 7.82c1.83-2.26 5.92-1.38 5.67 3.44s.17 5.97.17 5.97M4.67 7.82c1.84-2.26 5.93-1.38 5.68 3.44s.17 5.97.17 5.97m9.3-3.06a3.05 3.05 0 0 1-3.09 3.02 3.05 3.05 0 0 1-3.08-3.02 3.05 3.05 0 0 1 3.08-3.03c1.7 0 3.09 1.35 3.09 3.03Zm-9.55 0a3.05 3.05 0 0 1-3.09 3.02 3.05 3.05 0 0 1-3.08-3.02 3.05 3.05 0 0 1 3.08-3.03c1.7 0 3.09 1.35 3.09 3.03Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
