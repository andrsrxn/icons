import type { Icon } from './types'

export const IconBall: Icon = ({
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
      data-slot='ball'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m9.78 6.17 3.64-2.58L18 5.67 20.51 11 16 13.29l-7.43-.72z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.36 11.28 4 9.2l-.44 3.47 2.85 6.14 6.24 1.7L10 18l-1.43-5.33z'
        fill='currentColor'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='8.5' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M13.7 20.3c-2.83 0-5.12-3.7-5.12-8.28s2.29-8.27 5.12-8.27'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.34 10.93c-.22 1.81-4.03 2.84-8.52 2.3-4.48-.55-7.94-2.46-7.72-4.27'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
