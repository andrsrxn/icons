import type { Icon } from './types'

export const IconBrackets: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-brackets'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8 21c-.61 0-.92 0-1.17-.07a2 2 0 0 1-1.42-1.42c-.07-.25-.07-.56-.07-1.17v-3.86c0-.79-.53-1.48-1.3-1.68-.84-.22-.83-1.43.02-1.68.75-.21 1.28-.9 1.28-1.68V5.66c0-.61 0-.92.07-1.17a2 2 0 0 1 1.42-1.42C7.08 3 7.39 3 8 3m8 18c.61 0 .92 0 1.17-.07a2 2 0 0 0 1.42-1.42c.07-.25.07-.56.07-1.17v-3.86c0-.79.53-1.48 1.3-1.68.84-.22.83-1.43-.02-1.68a1.8 1.8 0 0 1-1.28-1.68V5.66c0-.61 0-.92-.07-1.17a2 2 0 0 0-1.42-1.42C16.92 3 16.61 3 16 3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
