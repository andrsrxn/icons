import type { Icon } from './types'

export const IconVoteX: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-vote-x'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M1.68 20.8h20.64' stroke='currentColor' />
      <path d='m9.31 14.68 5.38-5.37' stroke='currentColor' />
      <path d='M14.69 14.69 9.3 9.32' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.53 20.8V10.73c0-3.32 0-4.98-.92-6.1a4 4 0 0 0-.52-.51C16.98 3.2 15.32 3.2 12 3.2s-4.98 0-6.1.92a4 4 0 0 0-.5.52c-.93 1.11-.93 2.77-.93 6.09V20.8z'
        fill='currentColor'
      />
      <path
        d='M19.53 20.8V10.73c0-3.32 0-4.98-.92-6.1a4 4 0 0 0-.52-.51C16.98 3.2 15.32 3.2 12 3.2s-4.98 0-6.1.92a4 4 0 0 0-.5.52c-.93 1.11-.93 2.77-.93 6.09V20.8'
        stroke='currentColor'
      />
    </svg>
  )
}
