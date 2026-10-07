import type { Icon } from './types'

export const IconToilet: Icon = ({
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
      data-slot='icon-ui-toilet'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.7 12.22c.88 0 1.6-.72 1.6-1.61v-3.6c0-2.08 0-3.11-.49-3.86a3 3 0 0 0-.87-.87c-.74-.49-1.78-.49-3.85-.49h-4.06c-2.08 0-3.11 0-3.86.49a3 3 0 0 0-.87.87c-.49.75-.49 1.78-.49 3.85v3.67a1.55 1.55 0 0 0 3.1.09l.13-2.21c.03-.47.05-.7.1-.92A3 3 0 0 1 9.2 5.89c.17-.14.38-.26.8-.5.45-.26.68-.39.9-.47a3 3 0 0 1 2.16.01c.22.1.45.23.9.5.4.23.59.35.76.49a3 3 0 0 1 1.02 1.61c.05.21.07.44.12.9l.22 2.33a1.6 1.6 0 0 0 1.6 1.46'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M13.86 22.43c.92 0 1.38 0 1.67-.29s.3-.74.33-1.66l.01-.59c.01-.2.01-.3.03-.39l.15-.37.76-1.72c.23-.52.35-.78.32-1.04a1 1 0 0 0-.07-.29c-.1-.24-.32-.42-.76-.77a2 2 0 0 0-.44-.3l-.14-.06c-.13-.03-.26-.03-.53-.03H8.44l-.25.06-.2.09c-.34.17-.52.26-.64.38a1 1 0 0 0-.28.74c0 .17.08.35.22.7l.87 2.26q.1.24.12.35c.02.1.02.18.02.37v.56c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3z'
        fill='currentColor'
      />
      <path
        d='M7.59 12.22A2.8 2.8 0 0 1 4.8 9.44V7c0-2.07 0-3.1.5-3.85a3 3 0 0 1 .86-.87c.75-.49 1.78-.49 3.86-.49h4.06c2.07 0 3.1 0 3.85.49a3 3 0 0 1 .87.87c.5.75.5 1.78.5 3.85v2.25a2.97 2.97 0 0 1-2.98 2.97'
        stroke='currentColor'
      />
      <path
        d='M15.29 22.43a.98.98 0 0 0 .76-1.6c-.29-.35-.3-.85-.07-1.23a8 8 0 0 0 1.05-2.33c.19-1.03.28-1.55-.17-2.09s-1.13-.54-2.48-.54H9.72c-1.35 0-2.02 0-2.47.54-.45.55-.36 1.05-.17 2.07l.02.11c.18.76.7 1.64 1.1 2.23.26.38.25.9-.05 1.25a.96.96 0 0 0 .72 1.59z'
        stroke='currentColor'
      />
      <path
        d='M14.53 14.64c1.03-1 1.7-2.62 1.7-4.45 0-3.05-1.87-5.53-4.18-5.53S7.88 7.14 7.88 10.2c0 1.83.67 3.45 1.7 4.45'
        stroke='currentColor'
      />
    </svg>
  )
}
