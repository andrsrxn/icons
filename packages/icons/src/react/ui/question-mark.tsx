import type { Icon } from './types'

export const IconQuestionMark: Icon = ({
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
      data-slot='icon-ui-question-mark'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12 16.17c0-4.94 4.6-4.97 4.6-8.56a4.6 4.6 0 1 0-9.2 0' stroke='currentColor' />
      <path
        d='M12.7 20.3a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
