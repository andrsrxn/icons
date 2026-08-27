import type { Icon } from './types'

export const IconUtensils: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-utensils'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.64 7.57c1.4-2.34 4.85-4.47 4.85-4.47v12.72H14.6s-.68-5.37 1.03-8.25'
        fill='currentColor'
      />
      <path
        d='M20.49 21.34v-5.3m0 0V4.1c0-.54 0-.81-.25-.96s-.45-.02-.87.2a9.7 9.7 0 0 0-3.65 4.08c-1.2 2.28-1.43 5.06-1.44 6.84 0 .8-.01 1.2.28 1.49s.72.3 1.58.3z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='m3.93 9.13-.04-.53a1 1 0 0 1 1-1.08h5a1 1 0 0 1 1 1v.55a1 1 0 0 1-.5.87l-.75.42a1 1 0 0 0-.5.84l-.29 8.76a1 1 0 0 1-.55.86l-.38.19A1 1 0 0 1 7 21l-.33-.18a1 1 0 0 1-.53-.83l-.45-8.81a1 1 0 0 0-.5-.82l-.77-.44a1 1 0 0 1-.5-.8'
        fill='currentColor'
      />
      <path
        d='M7.36 7.6V3.47m3.72 4.13h-7.3m.01-4.12v5.74a2 2 0 0 0 1.02 1.73l.02.01.03.01a2 2 0 0 1 1.02 1.75l.05 7.1a1.53 1.53 0 0 0 3.06 0V12.7A2 2 0 0 1 10 10.97l.02-.01.02-.01a2 2 0 0 0 1.03-1.74V3.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
