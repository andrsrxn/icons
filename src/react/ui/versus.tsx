import type { Icon } from './types'

export const IconVersus: Icon = ({
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
      data-slot='versus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.78 4.04a.75.75 0 1 1 1.3.75l-.65-.38zM8.14 20.27a.75.75 0 0 1-1.3-.75l.65.37zM16.43 4.4l.65.38-4.47 7.74-.65-.38-.65-.37 4.47-7.74zm-4.47 7.74.65.38-4.47 7.74-.65-.38-.65-.37 4.47-7.74z'
        fill='currentColor'
      />
      <path
        d='m3.77 3.88 2.55 7.5a1 1 0 0 0 1.88.04l2.9-7.54m9.13 9.54c-.25-.74-1.06-1.57-2.5-1.57-1.45 0-2.6.77-2.6 2.09 0 2.8 5.1 1.1 5.1 4.04 0 1.55-1.27 2.14-2.5 2.14-1.45 0-2.6-.59-2.6-1.68'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
