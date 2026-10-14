import type { Icon } from './types'

export const IconMoonFog: Icon = ({
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
      data-slot='icon-ui-moon-fog'
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
        d='M19.88 17.14H4.58A10 10 0 0 1 2.49 11c0-5.5 3.57-8.3 6.12-8.92 0 0-1.56 5.28 2.43 10.2 3.41 3.41 7.28 2.34 9.3 1.78.82-.23 1.33-.37 1.4-.1.1.4-.6 1.76-1.85 3.17'
        fill='currentColor'
      />
      <path
        d='M4.57 16.67C3.37 15.49 2.48 12.9 2.48 11c0-3.67 2-6.88 4.95-8.6.92-.54 1.38-.8 1.64-.59.27.22.08.8-.3 1.98-.71 2.24-1 5.66 2.18 8.58 3.01 2.77 7.5 1.94 9.77 1.26.66-.2.98-.3 1.2-.06.2.24.1.5-.13 1.02a7 7 0 0 1-1.35 2.07'
        stroke='currentColor'
      />
      <path d='M22.23 17.14H1.77' stroke='currentColor' />
      <path d='M18.5 20h-13' stroke='currentColor' />
      <path d='M15.03 22.77H8.97' stroke='currentColor' />
    </svg>
  )
}
