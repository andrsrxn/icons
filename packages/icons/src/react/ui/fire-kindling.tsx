import type { Icon } from './types'

export const IconFireKindling: Icon = ({
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
      data-slot='ui-icon-fire-kindling'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.09 6.31a6 6 0 0 1-1.36-3.4c-.03-.33-.32-.53-.58-.3a5 5 0 0 0-1.2 1.64 7 7 0 0 0-.52 3.02c0 .3-.24.58-.52.47-.53-.2-.8-.66-1-1.02-.12-.23-.4-.26-.52-.02a4.7 4.7 0 0 0-.42 2.68c.28 2.67 2.14 3.77 3.73 3.77 1.27 0 3.29-.41 3.72-2.92.2-1.2-.09-2.45-1.33-3.92'
        fill='currentColor'
      />
      <path
        d='m2.71 14.04 18.58 6.7m-.09-6.95L2.8 21M14.09 6.31a6 6 0 0 1-1.27-2.73c-.1-.53-.15-.79-.45-.87s-.43.07-.69.37q-.4.46-.74 1.17a7 7 0 0 0-.51 2.45c-.02.56-.03.84-.33.97-.3.12-.42 0-.67-.23a2 2 0 0 1-.27-.3c-.18-.25-.26-.37-.56-.33s-.34.13-.4.32a5 5 0 0 0-.23 2.25c.28 2.67 2.14 3.77 3.73 3.77 1.27 0 3.29-.41 3.72-2.92.2-1.2-.09-2.45-1.33-3.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
