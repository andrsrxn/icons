import type { Icon } from './types'

export const IconSendClock: Icon = ({
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
      data-slot='icon-ui-send-clock'
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
        d='m18.87 13.91.15.09a2 2 0 0 0 1.67.1l.16-.08.54-.25a2 2 0 0 0-.03-3.49l-.54-.24L9 5.04c-3.9-1.67-5.85-2.5-6.8-1.57l-.09.08c-.9.98 0 2.91 1.76 6.78A4 4 0 0 1 4.42 12c-.01.42-.19.8-.54 1.58-1.74 3.82-2.61 5.73-1.76 6.7l.17.17c.97.86 2.88.01 6.72-1.69l.17-.08c.84-.37 1.26-.56 1.56-.9l.01-.01c.3-.34.41-.8.65-1.7.25-.92.38-1.39.68-1.73s.74-.54 1.62-.91l.67-.28c.9-.39 1.36-.58 1.83-.55s.9.28 1.75.77z'
        fill='currentColor'
      />
      <path
        d='M19.69 14.37a8 8 0 0 0 1.92-.93 2 2 0 0 0 0-2.93 8 8 0 0 0-1.9-.94L9 5.03C5.1 3.38 3.15 2.55 2.2 3.48l-.09.08c-.9.98-.01 2.9 1.75 6.76a4 4 0 0 1 .56 1.66c0 .43-.19.82-.55 1.62-1.76 3.86-2.64 5.8-1.75 6.77l.1.1c.96.91 2.9.07 6.8-1.62l2-.86'
        stroke='currentColor'
      />
      <circle cx='15.84' cy='17.42' r='4.81' stroke='currentColor' />
      <path d='m17.2 18.7-1.56-1.04v-2.1' stroke='currentColor' />
    </svg>
  )
}
