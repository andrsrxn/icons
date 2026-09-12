import type { Icon } from './types'

export const IconPrinter: Icon = ({
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
      data-slot='icon-ui-printer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.08 12.04c0-2.83 0-4.25.88-5.13.87-.87 2.29-.87 5.12-.87h7.84c2.83 0 4.25 0 5.12.87.88.88.88 2.3.88 5.13v4.03a2.7 2.7 0 0 1-2.7 2.7h-.12c-1.24 0-2.3-.87-2.53-2.09a2.6 2.6 0 0 0-2.53-2.1H9.95c-1.23 0-2.3.89-2.52 2.1a2.6 2.6 0 0 1-2.52 2.1h-.12a2.7 2.7 0 0 1-2.71-2.71z'
        fill='currentColor'
      />
      <path
        d='M6.47 18.78c-1.3 0-1.95 0-2.46-.2a3 3 0 0 1-1.74-1.73c-.2-.52-.2-1.17-.2-2.46v-2.35c0-2.83 0-4.25.89-5.13.87-.87 2.29-.87 5.12-.87h7.84c2.83 0 4.25 0 5.12.87.88.88.88 2.3.88 5.13v2.3c0 1.34 0 2-.2 2.54a3 3 0 0 1-1.7 1.69c-.53.2-1.2.2-2.53.2'
        stroke='currentColor'
      />
      <path
        d='M6.65 17.69c.24-1.63.36-2.45.92-2.93.56-.49 1.39-.49 3.04-.49h2.75c1.64 0 2.46 0 3.02.48s.68 1.3.93 2.91c.34 2.14.5 3.21-.1 3.91s-1.68.7-3.85.7h-2.75c-2.16 0-3.24 0-3.83-.7-.6-.68-.45-1.75-.13-3.88'
        stroke='currentColor'
      />
      <path
        d='m17.22 6.04-.3-1.23c-.37-1.45-.56-2.18-1.1-2.6s-1.29-.42-2.78-.42h-2.09c-1.51 0-2.27 0-2.81.43-.55.43-.73 1.16-1.08 2.63l-.28 1.19'
        stroke='currentColor'
      />
      <path
        d='M18.93 9.71a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
