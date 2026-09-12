import type { Icon } from './types'

export const IconMessages: Icon = ({
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
      data-slot='icon-ui-messages'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.06 14.95c-.58-3.3-2.05-5-4.18-5.74-2.2-.75-3.29-1.13-3.6-2.07-.3-.95.01-1.41.65-2.34a7.02 7.02 0 0 1 12.82 3.98q-.01.88-.1 1.44c-.07.44-.1.66-.1.75-.02.25-.02.28.03.52l.13.47c.32 1.07.48 1.6.44 2a2 2 0 0 1-1.54 1.74c-.4.09-.94 0-2.04-.2l-.43-.05h-.27c-.6.02-1.73-.01-1.81-.5'
        fill='currentColor'
      />
      <path
        d='M9.28 22.4a7.02 7.02 0 1 0-7.03-7.03q.01.89.1 1.45a8 8 0 0 1 .11 1.05 4 4 0 0 1-.17.68l-.05.18c-.49 1.61-.73 2.42-.42 2.97q.15.3.43.49c.51.37 1.35.22 3-.06l.55-.07q.13 0 .5.07c.62.11 1.75.27 2.98.27'
        stroke='currentColor'
      />
      <path
        d='M7.7 8.4c-.15-3.56 3.14-6.65 7.02-6.65a7 7 0 0 1 7.03 7.03q-.01.88-.1 1.44a8 8 0 0 0-.11 1.06c.01.14.07.32.17.68l.13.43c.41 1.38.62 2.07.42 2.56a1.5 1.5 0 0 1-.66.74c-.46.26-1.17.13-2.6-.11l-.53-.09h-.13l-.9.08-1 .06'
        stroke='currentColor'
      />
    </svg>
  )
}
