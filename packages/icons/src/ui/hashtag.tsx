import type { Icon } from './types'

export const IconHashtag: Icon = ({
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
      data-slot='icon-ui-hashtag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M4.01 7.97H22' stroke='currentColor' />
      <path d='M2 15.42h17.99' stroke='currentColor' />
      <path
        d='M13.1 20.8c-.1.4.13.82.53.93.4.1.81-.13.91-.53l-.72-.2zm6.1-17.6a.77.77 0 0 0-.54-.93.73.73 0 0 0-.9.53l.72.2zM13.82 21l.72.2 4.66-18-.72-.2-.73-.2-4.65 18z'
        fill='currentColor'
      />
      <path
        d='M4.9 20.8c-.11.4.13.82.53.93.4.1.8-.13.9-.53l-.71-.2zM11 3.2a.77.77 0 0 0-.54-.93.73.73 0 0 0-.91.53l.72.2zM5.61 21l.72.2 4.65-18-.72-.2-.72-.2-4.66 18z'
        fill='currentColor'
      />
    </svg>
  )
}
