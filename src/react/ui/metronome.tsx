import type { Icon } from './types'

export const IconMetronome: Icon = ({
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
      data-slot='metronome'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.87 9.2c1.57-3.55 2.36-5.33 3.66-5.33s2.1 1.78 3.66 5.34l2.4 5.43c1.11 2.53 1.67 3.8 1.08 4.7-.6.91-1.98.91-4.74.91h-4.8c-2.76 0-4.15 0-4.74-.9-.59-.91-.03-2.18 1.09-4.71z'
        fill='currentColor'
      />
      <path
        d='M7.78 9.1c1.55-3.61 2.33-5.42 3.64-5.43 1.3 0 2.1 1.8 3.7 5.4l2.46 5.57c1.12 2.53 1.68 3.8 1.09 4.7-.6.91-1.98.91-4.75.91H9.07c-2.74 0-4.11 0-4.7-.9-.6-.9-.06-2.15 1.02-4.67z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M11.53 11.72v-3.9m0 9.08 6.2-9.31'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle opacity='.2' cx='18.65' cy='6.22' r='1.63' fill='currentColor' />
      <circle cx='18.65' cy='6.22' r='1.63' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
