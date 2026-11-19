import type { Icon } from './types'

export const IconCloud: Icon = ({
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
      data-slot='icon-ui-cloud'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m1.47 14.51 2.84 3.52 14.4.51 3.33-2.27v-4.55L18.7 9.89h-1.94L15.7 7.28l-3.73-2.34-3.22.93L6.22 8.8l-3.48 1.7z'
        fill='currentColor'
      />
      <path
        d='M5.95 18.3c-1.16 0-2.3-.52-3.08-1.36a4.7 4.7 0 0 1-1.22-3.19 4.44 4.44 0 0 1 4.3-4.55c1.41 0 2.66.72 3.45 1.82'
        stroke='currentColor'
      />
      <path d='M18.97 18.3H5.78' stroke='currentColor' />
      <path d='M6.46 9.2A5.2 5.2 0 0 1 16 8a5.7 5.7 0 0 1 .63 3.97' stroke='currentColor' />
      <path
        d='M16.77 10.09a3.6 3.6 0 0 1 3.45.11 4.37 4.37 0 0 1 1.6 5.97c-.72 1.24-1.69 2-2.7 2.12'
        stroke='currentColor'
      />
    </svg>
  )
}
