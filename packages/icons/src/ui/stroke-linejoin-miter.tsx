import type { Icon } from './types'

export const IconStrokeLinejoinMiter: Icon = ({
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
      data-slot='icon-ui-stroke-linejoin-miter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.36 2.7c2.77 0 4.15 0 5.02.84.88.86.91 2.24.98 5l.3 12.77H10.33c-.9 0-1.34 0-1.63-.27-.29-.28-.31-.72-.37-1.61l-.17-2.95c-.05-.83-.08-1.25-.34-1.51-.26-.27-.68-.3-1.5-.37l-2.14-.16c-.87-.07-1.31-.1-1.58-.4-.26-.28-.26-.72-.26-1.6V4.7c0-.94 0-1.41.3-1.7.28-.3.76-.3 1.7-.3zm-2.58 9.54c-1.18 0-2.2-1.77-2.2-2.96 0-1.2 1.94-1.54 3.12-1.54s2.6 2.33 1.54 3.62c-.54.65-1.85.88-2.46.88'
        fill='currentColor'
      />
      <path d='M2.34 9.7h8.57' stroke='currentColor' />
      <path d='M13.77 21.3v-8.6' stroke='currentColor' />
      <path
        d='M15.58 10.13a2.33 2.33 0 0 1-2.33 2.34 2.34 2.34 0 1 1 2.33-2.34'
        stroke='currentColor'
      />
      <path
        d='M21.49 21.3V8.7c0-2.84 0-4.25-.88-5.13s-2.3-.88-5.12-.88H2.34'
        stroke='currentColor'
      />
      <path
        d='M8.46 21.3v-3.05c0-1.89 0-2.83-.59-3.41-.58-.6-1.52-.6-3.41-.6H2.34'
        stroke='currentColor'
      />
    </svg>
  )
}
