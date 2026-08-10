import type { Icon } from './types'

export const IconSunDim: Icon = ({
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
      data-slot='sun-dim'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.77 12a3.77 3.77 0 1 1-7.54 0 3.77 3.77 0 0 1 7.54 0'
        fill='currentColor'
      />
      <path
        d='m16.7 7.3.35-.35M12 5.35v-.49M7.3 7.3l-.35-.35M5.35 12h-.49M12 18.65v.49M7.3 16.7l-.35.35m9.75-.35.35.35m1.6-5.05h.49m-3.37 0a3.77 3.77 0 1 1-7.54 0 3.77 3.77 0 0 1 7.54 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
