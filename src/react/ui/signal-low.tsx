import type { Icon } from './types'

export const IconSignalLow: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='signal-low'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.53 17.22c.08-.2.08-.43.08-.91 0-.88 0-1.31-.16-1.56a1 1 0 0 0-.9-.46c-.3.02-.65.28-1.36.8-1.02.75-1.53 1.12-1.62 1.45a1 1 0 0 0 .36 1.08c.26.2.9.2 2.16.2.48 0 .72 0 .91-.08a1 1 0 0 0 .53-.52'
        fill='currentColor'
      />
      <path
        d='m7.69 12.89-1.4 1.03c-1.7 1.26-2.56 1.89-2.68 2.44-.12.53.06 1.09.48 1.45.42.37 1.48.37 3.6.37m0-5.29v5.3m0-5.3 4.1-3.02m-4.1 8.31h4.1m0 0V9.87m0 8.31h4.1m0 0H17c1.41 0 2.12 0 2.56-.44s.44-1.15.44-2.56V8.92c0-1.84 0-2.76-.45-3.2a1.5 1.5 0 0 0-.82-.41c-.62-.1-1.36.44-2.83 1.53l-4.1 3.03m4.1 8.31V6.84'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
