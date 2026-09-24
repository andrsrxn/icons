import type { Icon } from './types'

export const IconShoe: Icon = ({
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
      data-slot='icon-ui-shoe'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 14.4V8.33a.5.5 0 0 1 .58-.5l3.22.52a.5.5 0 0 0 .32-.06L9.7 6.12a.5.5 0 0 1 .58.07l1.86 1.72q.08.07.17.1l9.4 3.42a.5.5 0 0 1 .33.42l.23 2.5a.5.5 0 0 1-.5.54H2.2a.5.5 0 0 1-.5-.5'
        fill='currentColor'
      />
      <path
        d='M5.32 8.43c-.95 0-1.71-.34-2.28-.74-.42-.3-1.3.02-1.3.53v7.47a2 2 0 0 0 2 2h15.53a3 3 0 0 0 3-3v-1.3c0-1.4-.96-2.61-2.31-2.96a62 62 0 0 1-7.1-2.23 5.4 5.4 0 0 1-1.96-1.6 1.3 1.3 0 0 0-1.87-.11c-.9.87-2.29 1.94-3.7 1.94Z'
        stroke='currentColor'
      />
      <path d='M1.95 14.9h20.1' stroke='currentColor' />
      <path d='M12.08 8c-.18.58-.33.9-.67 1.4-.33.48-.57.73-1.03 1.1' stroke='currentColor' />
      <path d='M14.92 9.11c-.02.5-.08.78-.24 1.25s-.3.72-.58 1.1' stroke='currentColor' />
    </svg>
  )
}
