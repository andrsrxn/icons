import type { Icon } from './types'

export const IconSushi: Icon = ({
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
      data-slot='icon-ui-sushi'
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
        d='M22.46 13.52c0 5.37-2.14 7.33-10.46 7.62-6.64.23-10.46-2.25-10.46-7.62l.83-3.37 5.65 2.55h8.6l5.55-2.9c.2.72.3 2.95.3 3.72'
        fill='currentColor'
      />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.8 6.17s4.58.89 3.14 2.54c-1.25 1.44-6.38 1.44-6.74.84z'
        fill='currentColor'
      />
      <path
        d='M22.27 7.96c0 1.4-1.1 2.66-2.9 3.58a16 16 0 0 1-7.29 1.54C6.46 13.08 1.9 10.8 1.9 7.96c0-2.82 4.57-5.11 10.2-5.11s10.18 2.29 10.18 5.11'
        stroke='currentColor'
      />
      <path
        d='M17.87 7.96c0 .6-.63 1.14-1.65 1.53-1.05.4-2.52.66-4.14.66-3.2 0-5.79-.98-5.79-2.19 0-1.2 2.6-2.18 5.8-2.18s5.78.98 5.78 2.18'
        stroke='currentColor'
      />
      <path
        d='M1.9 8.09v7.81c0 2.78 4.56 5.04 10.18 5.04 2.86 0 5.44-.58 7.28-1.51 1.8-.91 2.91-2.16 2.91-3.53V8.09'
        stroke='currentColor'
      />
      <path d='M14.52 5.99 9.56 9.83' stroke='currentColor' />
    </svg>
  )
}
