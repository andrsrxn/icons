import type { Icon } from './types'

export const IconVote: Icon = ({
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
      data-slot='icon-ui-vote'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.53 20.8V10.73c0-3.32 0-4.98-.92-6.1a4 4 0 0 0-.52-.5C16.98 3.2 15.32 3.2 12 3.2s-4.98 0-6.1.92a4 4 0 0 0-.5.52c-.93 1.11-.93 2.77-.93 6.09V20.8z'
        fill='currentColor'
      />
      <path
        d='M19.53 20.8V10.73c0-3.32 0-4.98-.92-6.1a4 4 0 0 0-.52-.5C16.98 3.2 15.32 3.2 12 3.2s-4.98 0-6.1.92a4 4 0 0 0-.5.52c-.93 1.11-.93 2.77-.93 6.09V20.8'
        stroke='currentColor'
      />
      <path d='M1.68 20.8h20.64' stroke='currentColor' />
      <path d='M9.35 9.95h5.3' stroke='currentColor' />
      <path d='M9.35 14.05h5.3' stroke='currentColor' />
    </svg>
  )
}
