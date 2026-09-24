import type { Icon } from './types'

export const IconSendFilled: Icon = ({
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
      data-slot='icon-ui-send-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M16.73 8.3c3.71 1.58 5.57 2.37 5.57 3.7 0 1.32-1.86 2.1-5.57 3.68l-7.69 3.25c-3.96 1.68-5.93 2.52-6.89 1.56l-.02-.03c-.94-.98-.05-2.94 1.74-6.86.36-.8.54-1.2.55-1.62v-.04c0-.42-.2-.82-.56-1.62C2.1 6.47 1.22 4.54 2.11 3.56l.08-.08c.96-.93 2.9-.1 6.8 1.55z'
        fill='currentColor'
      />
      <path
        d='M16.73 8.3c3.71 1.58 5.57 2.37 5.57 3.7 0 1.32-1.86 2.1-5.57 3.68l-7.69 3.25c-3.96 1.68-5.93 2.52-6.89 1.56l-.02-.03c-.94-.98-.05-2.94 1.74-6.86.36-.8.54-1.2.55-1.62v-.04c0-.42-.2-.82-.56-1.62C2.1 6.47 1.22 4.54 2.11 3.56l.08-.08c.96-.93 2.9-.1 6.8 1.55z'
        stroke='currentColor'
      />
    </svg>
  )
}
