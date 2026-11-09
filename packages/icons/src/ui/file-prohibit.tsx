import type { Icon } from './types'

export const IconFileProhibit: Icon = ({
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
      data-slot='icon-ui-file-prohibit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.7 22.24c-3.77 0-5.66 0-6.83-1.17C3.7 19.89 3.7 18 3.7 14.24v-4.5c0-3.74 0-5.6 1.16-6.78C6 1.8 7.88 1.78 11.62 1.74l1.7-.02v6.8h6.76l.16 8.15-2.3-1.25-2.62 1.25-.8 3.44 2.87 2.13h-5.7'
        fill='currentColor'
      />
      <path
        d='M20.08 12v-.9c0-1.66 0-2.5-.31-3.24-.32-.75-.91-1.33-2.1-2.49l-.58-.56-.84-.84C15.28 3 14.8 2.52 14.2 2.23l-.47-.2c-.63-.21-1.31-.21-2.68-.21-3.14 0-4.72 0-5.8.84a4 4 0 0 0-.71.71c-.84 1.08-.84 2.66-.84 5.8v5.1c0 3.74 0 5.6 1.15 6.78l.04.03c1.17 1.16 3.04 1.16 6.77 1.16'
        stroke='currentColor'
      />
      <path
        d='M13.11 2.33V4.8h0c0 1.89 0 2.83.58 3.42.59.58 1.53.58 3.42.58h2.46'
        stroke='currentColor'
      />
      <circle cx='17.87' cy='18.94' r='3.29' stroke='currentColor' />
      <path d='m15.59 16.66 4.57 4.57' stroke='currentColor' />
    </svg>
  )
}
