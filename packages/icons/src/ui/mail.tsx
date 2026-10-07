import type { Icon } from './types'

export const IconMail: Icon = ({
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
      data-slot='icon-ui-mail'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.09 8.6c0-1.9 0-2.84.58-3.1.59-.27 1.3.35 2.73 1.59l5.29 4.59c.62.54.94.81 1.31.81s.69-.27 1.31-.81l5.29-4.6c1.43-1.23 2.14-1.85 2.73-1.59.58.27.58 1.22.58 3.1V18c0 .94 0 1.41-.3 1.7-.28.3-.76.3-1.7.3H4.1c-.94 0-1.42 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <rect x='1.75' y='4' width='20.49' height='16' rx='3' stroke='currentColor' />
      <path
        d='m3.34 5.1 4.47 4.5c2 2.02 3 3.03 4.26 3.03 1.24 0 2.25-1 4.25-3.02l4.49-4.5'
        stroke='currentColor'
      />
    </svg>
  )
}
