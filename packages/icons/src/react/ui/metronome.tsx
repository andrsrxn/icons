import type { Icon } from './types'

export const IconMetronome: Icon = ({
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
      data-slot='ui-icon-metronome'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.86 8.04c1.57-3.57 2.35-5.35 3.66-5.35 1.3 0 2.09 1.78 3.66 5.35l3.44 7.8c1.12 2.53 1.68 3.8 1.08 4.7-.59.92-1.97.92-4.74.92H8.08c-2.77 0-4.16 0-4.75-.91-.59-.9-.03-2.18 1.09-4.7z'
        fill='currentColor'
      />
      <path
        d='M7.75 7.9c1.55-3.6 2.33-5.42 3.65-5.43 1.3 0 2.1 1.8 3.7 5.4l3.52 7.97c1.12 2.53 1.68 3.8 1.1 4.7-.6.92-1.98.92-4.76.92H8.01c-2.74 0-4.11 0-4.7-.9-.6-.9-.06-2.16 1.02-4.68zm3.77 3.98V7.5m0 10.18 6.96-10.44'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle opacity='.2' cx='19.51' cy='5.7' r='1.83' fill='currentColor' />
      <circle cx='19.51' cy='5.7' r='1.83' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
