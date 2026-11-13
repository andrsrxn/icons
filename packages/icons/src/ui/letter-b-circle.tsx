import type { Icon } from './types'

export const IconLetterBCircle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-letter-b-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='12' r='10.22' fill='currentColor' />
      <circle cx='12' cy='12' r='10.22' stroke='currentColor' />
      <path
        d='M10.85 6.74h1.66a2.43 2.43 0 0 1 2.43 2.43c0 1.34-.82 2.42-3 2.42h.9a2.83 2.83 0 0 1 0 5.67H11m.03 0c-.78 0-1.18 0-1.45-.2q-.16-.1-.27-.26c-.2-.28-.2-.67-.2-1.46V8.65c0-.78 0-1.18.2-1.45q.1-.16.27-.27c.27-.2.67-.2 1.45-.2'
        stroke='currentColor'
      />
    </svg>
  )
}
