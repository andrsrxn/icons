import type { Icon } from './types'

export const IconPanelsVertical: Icon = ({
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
      data-slot='icon-ui-panels-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.44 16.05c0 1.28 0 1.92-.14 2.45a4 4 0 0 1-2.79 2.78c-.52.15-1.16.15-2.45.15H7.94c-1.29 0-1.93 0-2.45-.15A4 4 0 0 1 2.7 18.5c-.14-.53-.14-1.17-.14-2.45z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.44 7.95c0-1.28 0-1.92-.14-2.45a4 4 0 0 0-2.79-2.78c-.52-.15-1.16-.15-2.45-.15H7.94c-1.29 0-1.93 0-2.45.15A4 4 0 0 0 2.7 5.5c-.14.53-.14 1.17-.14 2.45z'
        fill='currentColor'
      />
      <path
        d='M2.56 10.57v2.86c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17h2.88c3.77 0 5.66 0 6.83-1.17 1.17-1.18 1.17-3.06 1.17-6.83v-2.86c0-3.77 0-5.65-1.17-6.83s-3.06-1.17-6.83-1.17h-2.88c-3.77 0-5.66 0-6.83 1.17-1.17 1.18-1.17 3.06-1.17 6.83'
        stroke='currentColor'
      />
      <path d='M2.96 16.05h18.08' stroke='currentColor' />
      <path d='M2.96 7.95h18.08' stroke='currentColor' />
    </svg>
  )
}
