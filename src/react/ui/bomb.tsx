import type { Icon } from './types'

export const IconBomb: Icon = ({
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
      data-slot='bomb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='9.78' cy='13.46' r='6.23' fill='currentColor' />
      <circle cx='9.78' cy='13.46' r='6.23' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M6.45 12.9a3.4 3.4 0 0 1 .79-1.57c.5-.61.91-.9 1.66-1.17'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='m15.32 11.47 1.2-1.21c.67-.67 1-1 1-1.42s-.33-.74-1-1.41l-.7-.7c-.66-.67-1-1-1.4-1-.42 0-.75.33-1.42 1l-1.21 1.2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M16.43 6.88c.66-.52.92-1.94 2.3-1.88 1.03.05 1.7 1 1.63 2.03-.1 1.41-.97 2.56.1 3.56'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
