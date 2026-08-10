import type { Icon } from './types'

export const IconTextSection: Icon = ({
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
      data-slot='text-section'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.4 5.7c-.33-.99-1.41-2.1-3.33-2.1S8.6 4.65 8.6 6.39c0 3.73 6.78 1.47 6.78 5.38 0 2.07-1.69 2.84-3.32 2.84-1.92 0-3.46-.77-3.46-2.23'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.4 11.54c0-.95-1.41-2.14-3.33-2.14S8.6 10.43 8.6 12.17c0 3.73 6.78 1.47 6.78 5.38 0 1.74-1.4 2.84-3.32 2.84S9 19.34 8.6 18.4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <ellipse opacity='.2' cx='12' cy='12' rx='3.39' ry='2.34' fill='currentColor' />
    </svg>
  )
}
