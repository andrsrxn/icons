import type { Icon } from './types'

export const IconLamp: Icon = ({
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
      data-slot='icon-ui-lamp'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.43 4.19c.56-1 .84-1.49 1.3-1.76s1.04-.27 2.18-.27h6.25c1.15 0 1.72 0 2.19.27.47.28.75.78 1.3 1.78l2.68 4.82c.74 1.32 1.1 1.98.82 2.48-.3.49-1.05.49-2.56.49H4.44c-1.53 0-2.29 0-2.58-.5s.09-1.16.84-2.49z'
        fill='currentColor'
      />
      <path d='M12 21.6V12' stroke='currentColor' />
      <path d='M15.62 21.6H8.38' stroke='currentColor' />
      <path
        d='M5.43 4.19c.56-1 .84-1.49 1.3-1.76s1.04-.27 2.18-.27h6.25c1.15 0 1.72 0 2.19.27.47.28.75.78 1.3 1.78l2.68 4.82c.74 1.32 1.1 1.98.82 2.48-.3.49-1.05.49-2.56.49H4.44c-1.53 0-2.29 0-2.58-.5s.09-1.16.84-2.49z'
        stroke='currentColor'
      />
    </svg>
  )
}
