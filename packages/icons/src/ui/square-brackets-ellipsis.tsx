import type { Icon } from './types'

export const IconSquareBracketsEllipsis: Icon = ({
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
      data-slot='icon-ui-square-brackets-ellipsis'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M7.23 11.55a.45.45 0 1 1 0 .9.45.45 0 0 1 0-.9'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M12 11.55a.45.45 0 1 1 0 .9.45.45 0 0 1 0-.9'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M16.77 11.55a.45.45 0 1 1 0 .9.45.45 0 0 1 0-.9'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M7.24 21.29c-1.2 0-1.81 0-2.3-.18a3 3 0 0 1-1.83-1.83c-.17-.48-.17-1.08-.17-2.3V7.02c0-1.2 0-1.8.17-2.3A3 3 0 0 1 4.94 2.9c.49-.18 1.1-.18 2.3-.18'
        stroke='currentColor'
      />
      <path
        d='M16.76 21.29c1.2 0 1.81 0 2.3-.18a3 3 0 0 0 1.83-1.83c.17-.48.17-1.08.17-2.3V7.02c0-1.2 0-1.8-.17-2.3a3 3 0 0 0-1.83-1.82c-.49-.18-1.1-.18-2.3-.18'
        stroke='currentColor'
      />
    </svg>
  )
}
