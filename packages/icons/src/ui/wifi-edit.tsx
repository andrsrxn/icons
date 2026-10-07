import type { Icon } from './types'

export const IconWifiEdit: Icon = ({
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
      data-slot='icon-ui-wifi-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.28 15.12a8 8 0 0 1 3.2-1.5' stroke='currentColor' />
      <path d='M4.1 11.95a13 13 0 0 1 10.27-2.58' stroke='currentColor' />
      <path d='M1.66 8.33A17 17 0 0 1 12 4.7c4.6 0 7.8 1.6 10.34 3.64' stroke='currentColor' />
      <rect
        opacity='.2'
        width='2.49'
        height='2.79'
        rx='1'
        transform='scale(1 -1)rotate(45 26.16 15.15)'
        fill='currentColor'
      />
      <path d='m18.38 14.07-1.88-1.88' stroke='currentColor' />
      <path
        d='M12.7 19.07c.56-.12.84-.18 1.09-.31.25-.14.46-.34.87-.74l4.81-4.73c.37-.36.55-.54.63-.75a1 1 0 0 0 0-.7c-.07-.2-.25-.39-.62-.75a3 3 0 0 0-.75-.62 1 1 0 0 0-.69 0c-.2.08-.38.26-.75.62l-4.78 4.76c-.41.41-.62.62-.76.87-.13.25-.2.54-.32 1.1l-.02.08c-.15.69-.22 1.03-.03 1.22.2.2.53.12 1.22-.03z'
        stroke='currentColor'
      />
    </svg>
  )
}
