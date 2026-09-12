import type { Icon } from './types'

export const IconChurch: Icon = ({
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
      data-slot='icon-ui-church'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.37 11.25c0-.91 0-1.37.18-1.77.19-.4.54-.7 1.23-1.29l1.63-1.37c1.24-1.05 1.85-1.57 2.59-1.57s1.35.52 2.58 1.57l1.63 1.37c.7.6 1.04.89 1.23 1.29s.18.86.18 1.77v8.28a1.96 1.96 0 0 1-3.91 0v-1.72a1.7 1.7 0 0 0-2.45-1.53c-.58.28-.94.87-.94 1.51v1.72a1.97 1.97 0 1 1-3.95 0z'
        fill='currentColor'
      />
      <path
        d='M17.62 21.31V11.24c0-.93 0-1.4-.19-1.8-.2-.41-.55-.7-1.28-1.3l-1.63-1.32c-1.2-1-1.81-1.49-2.52-1.49-.72 0-1.32.5-2.53 1.49L7.84 8.14c-.72.6-1.09.89-1.28 1.3-.2.4-.2.87-.2 1.8v10.07'
        stroke='currentColor'
      />
      <path
        d='m6.14 11.72-1.02.57c-.95.54-1.42.8-1.76 1.19a3 3 0 0 0-.58.98c-.17.49-.17 1.03-.17 2.12 0 1.78 0 2.67.37 3.35a3 3 0 0 0 1.2 1.19c.67.37 1.56.37 3.35.37h8.92c1.8 0 2.71 0 3.39-.38A3 3 0 0 0 21 19.94c.38-.68.38-1.58.38-3.38 0-1.09 0-1.63-.17-2.12a3 3 0 0 0-.56-.96c-.34-.39-.8-.66-1.75-1.2l-.98-.56'
        stroke='currentColor'
      />
      <path
        d='M14.09 21.17v-3.2c0-.54 0-.81-.08-1.04a1.5 1.5 0 0 0-.97-.97c-.22-.07-.5-.07-1.04-.07-.55 0-.83 0-1.05.07a1.5 1.5 0 0 0-.97.97c-.07.23-.07.5-.07 1.05v3.2'
        stroke='currentColor'
      />
      <path d='M10.33 3.07h3.34' stroke='currentColor' />
      <path d='M12 5.08V1.45' stroke='currentColor' />
      <path
        d='M12.48 11.76a.48.48 0 1 1-.96 0 .48.48 0 0 1 .96 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
