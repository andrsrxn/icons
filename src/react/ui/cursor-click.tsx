import type { Icon } from './types'

export const IconCursorClick: Icon = ({
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
      data-slot='ui-icon-cursor-click'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m9 17.87-3.19-9.6C5.27 6.62 5 5.8 5.43 5.36s1.25-.17 2.9.36l9.63 3.1c1.2.39 1.81.58 2 .92a1 1 0 0 1 .07.83c-.13.37-.69.66-1.81 1.25-.7.36-1.04.54-1.18.81a1 1 0 0 0-.1.67c.06.3.33.57.88 1.12l2.77 2.77c.66.66 1 1 1 1.41s-.34.75-1 1.41l-.46.46c-.67.67-1 1-1.41 1-.42 0-.75-.33-1.42-1l-2.77-2.78c-.53-.53-.8-.8-1.09-.86a1 1 0 0 0-.7.1c-.26.15-.44.49-.78 1.16-.56 1.08-.84 1.61-1.18 1.75a1 1 0 0 1-.88-.07c-.33-.19-.52-.76-.9-1.91'
        fill='currentColor'
      />
      <path
        d='m9 17.87-3.19-9.6C5.27 6.62 5 5.8 5.43 5.36s1.25-.17 2.9.36l9.63 3.1c1.2.39 1.81.58 2 .92a1 1 0 0 1 .07.83c-.13.37-.69.66-1.81 1.25-.7.36-1.04.54-1.18.81a1 1 0 0 0-.1.67c.06.3.33.57.88 1.12l2.77 2.77c.66.66 1 1 1 1.41s-.34.75-1 1.41l-.46.46c-.67.67-1 1-1.41 1-.42 0-.75-.33-1.42-1l-2.77-2.78h0c-.53-.53-.8-.8-1.09-.86a1 1 0 0 0-.7.1c-.26.15-.44.49-.78 1.16-.56 1.08-.84 1.61-1.18 1.75a1 1 0 0 1-.88-.07c-.33-.19-.52-.76-.9-1.91m3-13.89 1.32-1.31M4 12l-1.32 1.32M9 3.32V1.66M3.34 9H1.68'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
