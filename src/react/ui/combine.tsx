import type { Icon } from './types'

export const IconCombine: Icon = ({
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
      data-slot='combine'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.76'
        y='3.76'
        width='7.24'
        height='7.24'
        rx='1.5'
        fill='currentColor'
      />
      <rect opacity='.2' x='13' y='13' width='7.24' height='7.24' rx='1.5' fill='currentColor' />
      <rect
        x='3.76'
        y='3.76'
        width='7.24'
        height='7.24'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='13'
        y='13'
        width='7.24'
        height='7.24'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M14 6.18h1.58c1.61 0 2.42 0 2.92.55s.5 1.42.5 3.18m-3.57-5.82c-.91.95-1.44 1.5-1.44 2.1 0 .59.53 1.14 1.44 2.09m-5.55 9.44H8.3c-1.62 0-2.42 0-2.92-.54-.5-.55-.5-1.42-.5-3.18m3.57 5.82c.9-.95 1.43-1.5 1.43-2.1 0-.59-.52-1.14-1.43-2.09'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
