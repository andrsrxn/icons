import type { Icon } from './types'

export const IconBeta: Icon = ({
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
      data-slot='beta'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.15 18.4 8.92 5.73l2.99-2.13 3.49.84 1.05 3-2.41 3.11 3.07 1.56.89 2.93-.9 3.22-3.75 1.93z'
        fill='currentColor'
      />
      <path
        d='M12.6 9.8a.75.75 0 0 0 0 1.5zm3.7-2.72h-.76c0 1.46-1.27 2.72-2.93 2.72v1.5c2.4 0 4.43-1.85 4.43-4.22zm-7.38 0h.75c0-1.47 1.28-2.73 2.94-2.73v-1.5a4.33 4.33 0 0 0-4.44 4.23zm3.69-3.48v.75c1.66 0 2.93 1.26 2.93 2.73h1.5a4.33 4.33 0 0 0-4.43-4.23z'
        fill='currentColor'
      />
      <path
        d='M13.01 9.8a.75.75 0 0 0 0 1.5zm4.97 5.44h-.75c0 2.14-1.84 3.94-4.22 3.94v1.5c3.12 0 5.72-2.4 5.72-5.44zm-4.97-4.69v.75c2.38 0 4.22 1.8 4.22 3.94h1.5c0-3.04-2.6-5.44-5.72-5.44zm0 9.38v-.75a4.3 4.3 0 0 1-3.46-1.69l-.6.45-.6.45a5.8 5.8 0 0 0 4.66 2.29z'
        fill='currentColor'
      />
      <path
        d='M8.92 7.08v11.21c0 .93 0 2-.96 2.4-.75.3-1.74 0-2.07-1.02'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
