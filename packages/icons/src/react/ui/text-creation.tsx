import type { Icon } from './types'

export const IconTextCreation: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-text-creation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.57' y='2.48' width='4.54' height='4.54' rx='1' fill='currentColor' />
      <rect opacity='.2' x='17.01' y='2.48' width='4.54' height='4.54' rx='1' fill='currentColor' />
      <rect opacity='.2' x='2.57' y='16.9' width='4.54' height='4.54' rx='1' fill='currentColor' />
      <rect opacity='.2' x='17.01' y='16.9' width='4.54' height='4.54' rx='1' fill='currentColor' />
      <rect x='2.57' y='2.48' width='4.54' height='4.54' rx='1' stroke='currentColor' />
      <rect x='17.01' y='2.48' width='4.54' height='4.54' rx='1' stroke='currentColor' />
      <rect x='2.57' y='16.9' width='4.54' height='4.54' rx='1' stroke='currentColor' />
      <rect x='17.01' y='16.9' width='4.54' height='4.54' rx='1' stroke='currentColor' />
      <path d='M4.84 7.03v9.55' stroke='currentColor' />
      <path d='M7.29 19.02h9.55' stroke='currentColor' />
      <path d='M19.28 7.03v9.55' stroke='currentColor' />
      <path d='M7.29 4.58h9.55' stroke='currentColor' />
      <path d='M12 8.95v6.78' stroke='currentColor' />
      <path d='M13.12 15.73h-2.24' stroke='currentColor' />
      <path d='M14.74 9.74a.8.8 0 0 0-.79-.79h-3.9a.8.8 0 0 0-.8.8' stroke='currentColor' />
    </svg>
  )
}
