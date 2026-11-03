import type { Icon } from './types'

export const IconPlaylistPlus: Icon = ({
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
      data-slot='icon-ui-playlist-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.19 18H2.8' stroke='currentColor' />
      <path d='M21.19 12H2.8' stroke='currentColor' />
      <path d='M12.3 6H2.8' stroke='currentColor' />
      <path d='M21.71 6h-5.97' stroke='currentColor' />
      <path d='M18.73 3.01V9' stroke='currentColor' />
    </svg>
  )
}
