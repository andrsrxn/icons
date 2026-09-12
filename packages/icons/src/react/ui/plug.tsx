import type { Icon } from './types'

export const IconPlug: Icon = ({
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
      data-slot='icon-ui-plug'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.05 9.87c-.48-1.23-.71-1.85-.42-2.28.3-.43.96-.43 2.28-.43h12.25c1.3 0 1.94 0 2.24.42s.08 1.03-.36 2.25l-1.02 2.86c-.45 1.29-.68 1.93-1.2 2.3s-1.2.36-2.56.36H8.9c-1.33 0-2 0-2.5-.35-.52-.35-.76-.98-1.23-2.22z'
        fill='currentColor'
      />
      <path
        d='M4.67 12.37C3.9 10 3.53 8.8 4.13 7.97c.6-.81 1.85-.81 4.35-.81h7.08c2.49 0 3.73 0 4.33.81s.23 2-.5 4.38l-.07.19c-.42 1.35-.63 2.03-1.16 2.42s-1.24.39-2.66.39H8.54c-1.41 0-2.11 0-2.64-.39-.53-.38-.74-1.05-1.17-2.4z'
        stroke='currentColor'
      />
      <path d='M8.14 7.16V1.7' stroke='currentColor' />
      <path d='M15.86 7.16V1.7' stroke='currentColor' />
      <path d='M12 22.27v-6.92' stroke='currentColor' />
    </svg>
  )
}
