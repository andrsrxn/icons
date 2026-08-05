import type { Icon } from './types'

export const IconListOrdered: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='list-ordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M3.052 14.373a.75.75 0 1 0 1.436.436l-.718-.218-.718-.218Zm2.28-.995.042-.75-.042.75Zm1.138 2.304.6.45-.6-.45Zm-2.7 3.155-.563-.496a.75.75 0 0 0 .563 1.246v-.75Zm2.994.75a.75.75 0 0 0 0-1.5v1.5ZM3.136 5.623a.75.75 0 1 0 .79 1.274l-.395-.637-.395-.637Zm2.832-.876h.75a.75.75 0 0 0-1.145-.638l.395.638Zm-.75 5.524a.75.75 0 0 0 1.5 0h-1.5ZM9.69 5.25a.75.75 0 1 0 0 1.5v-1.5Zm10.575 1.5a.75.75 0 0 0 0-1.5v1.5ZM9.69 11.25a.75.75 0 0 0 0 1.5v-1.5Zm10.575 1.5a.75.75 0 0 0 0-1.5v1.5ZM9.69 17.25a.75.75 0 0 0 0 1.5v-1.5Zm10.575 1.5a.75.75 0 0 0 0-1.5v1.5ZM3.77 14.59l.718.219c.034-.115.133-.317.29-.473a.64.64 0 0 1 .512-.21l.042-.748.042-.75a2.138 2.138 0 0 0-1.656.646 2.74 2.74 0 0 0-.666 1.099l.718.218Zm1.562-1.212-.042.749c.47.026.628.232.689.397.082.222.04.51-.109.709l.6.45.6.45c.446-.595.58-1.417.316-2.13-.285-.767-.993-1.317-2.012-1.374l-.042.749Zm1.138 2.304-.6-.45c-.324.433-1.894 2.236-2.663 3.11l.563.495.563.495c.743-.844 2.368-2.707 2.737-3.2l-.6-.45Zm-2.7 3.155v.75h2.994v-1.5H3.77v.75ZM3.531 6.26l.396.637 2.437-1.513-.396-.637-.395-.638-2.437 1.514.395.637Zm2.437-1.513h-.75v5.524h1.5V4.747h-.75ZM9.69 6v.75h10.575v-1.5H9.69V6Zm0 6v.75h10.575v-1.5H9.69V12Zm0 6v.75h10.575v-1.5H9.69V18Z'
      />
    </svg>
  )
}
