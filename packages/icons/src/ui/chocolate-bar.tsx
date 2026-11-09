import type { Icon } from './types'

export const IconChocolateBar: Icon = ({
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
      data-slot='icon-ui-chocolate-bar'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M5.9 20.43c1.2 1.18 1.79 1.77 2.52 1.84h.33c.73-.07 1.33-.66 2.51-1.84 1.19-1.19 1.78-1.78 1.84-2.51v-.34c-.06-.73-.65-1.32-1.84-2.5l-2.3-2.32c-1.2-1.18-1.79-1.78-2.52-1.84h-.33c-.73.06-1.33.66-2.51 1.84-1.19 1.19-1.78 1.78-1.84 2.51v.34c.06.73.65 1.32 1.84 2.5z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.73 12.3c1.34 1.33 2 2 2.83 2s1.5-.67 2.83-2l1.05-1.05c1.33-1.34 2-2 2-2.83s-.67-1.5-2-2.83l-2-2c-1.34-1.34-2-2-2.83-2s-1.5.66-2.83 2l-1.05 1.04c-1.34 1.34-2 2-2 2.83s.66 1.5 2 2.83z'
        fill='currentColor'
      />
      <path
        d='m16.77 14.92 2.67-2.67c1.6-1.6 2.4-2.4 2.55-3.38a3 3 0 0 0 0-.9c-.15-.98-.95-1.78-2.55-3.38s-2.4-2.4-3.38-2.56a3 3 0 0 0-.9 0c-.98.15-1.78.95-3.39 2.56L9.11 7.26'
        stroke='currentColor'
      />
      <path
        d='m13.75 17.94-1.46 1.45c-1.6 1.6-2.4 2.41-3.37 2.56a3 3 0 0 1-.91 0c-.98-.15-1.78-.95-3.38-2.56-1.6-1.6-2.4-2.4-2.55-3.37a3 3 0 0 1 0-.91c.14-.97.95-1.78 2.55-3.38l1.45-1.45'
        stroke='currentColor'
      />
      <path
        d='M15.35 13.5 10.2 8.36S8.91 6.8 7.57 6.91c-.42.04-.9.2-1.34.42-.86.4-1.3.6-1.38 1.11-.1.51.3.9 1.06 1.66l7.93 7.94c.7.69 1.04 1.04 1.53.97.48-.06.7-.42 1.12-1.15.29-.48.51-1.02.53-1.5.03-1.36-1.67-2.86-1.67-2.86'
        stroke='currentColor'
      />
      <path d='m19.44 4.59-6.5 6.5' stroke='currentColor' />
      <path d='m12.94 4.59 6.5 6.5' stroke='currentColor' />
    </svg>
  )
}
