import type { Icon } from './types'

export const IconBrush: Icon = ({
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
      data-slot='icon-ui-brush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m6.53 22.13-3.3.1c-.74.01-1.11.02-1.26-.2-.16-.2-.03-.57.24-1.3.26-.73.5-1.58.49-2.22a3.73 3.73 0 1 1 3.83 3.62'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m18.37 2.44.45-.28a2 2 0 0 1 1.9.1 5 5 0 0 1 .92.73 2 2 0 0 1 .39 2.17c-.06.14-.15.28-.33.56l-2.45 3.92c-.12.2-.18.3-.26.4-.07.09-.16.17-.33.34l-2.4 2.35c-.86.84-1.3 1.26-1.8 1.4a2 2 0 0 1-1.01 0c-.5-.12-.94-.54-1.81-1.36-.9-.84-1.34-1.26-1.49-1.77a2 2 0 0 1-.04-1.02c.12-.52.53-.97 1.35-1.87l2.3-2.54c.18-.19.27-.29.37-.37l.42-.3z'
        fill='currentColor'
      />
      <path
        d='M10.2 17.04s4.18-2.12 7.5-5.65a25 25 0 0 0 4.46-7c.3-.68.13-1.44-.37-1.98a1.8 1.8 0 0 0-2-.47 24 24 0 0 0-7.23 4.47c-3.51 3.28-5.02 8.21-5.02 8.21'
        stroke='currentColor'
      />
      <path d='m13.62 14.68-3.96-3.66' stroke='currentColor' />
    </svg>
  )
}
