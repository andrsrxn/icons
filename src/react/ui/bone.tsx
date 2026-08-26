import type { Icon } from './types'

export const IconBone: Icon = ({
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
      data-slot='ui-icon-bone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4 14.33h1.57a1 1 0 0 0 .69-.28L14 6.73a1 1 0 0 0 .3-.72V4.1c0-.37.2-.7.52-.88l.97-.53a1 1 0 0 1 1.33.34l1.12 1.78a1 1 0 0 0 .47.4l1.9.77a1 1 0 0 1 .62.93V8.4a1 1 0 0 1-1 1H18.2a1 1 0 0 0-.71.3l-7.64 7.78a1 1 0 0 0-.29.75l.1 1.66a1 1 0 0 1-.85 1.05l-1.33.2a1 1 0 0 1-1.04-.5l-1.02-1.9a1 1 0 0 0-.33-.36l-1.79-1.2a1 1 0 0 1-.43-.97L3 15.2a1 1 0 0 1 1-.86'
        fill='currentColor'
      />
      <path
        d='M17.81 6.23a2.17 2.17 0 1 0-3.58-.84c.19.57.29.86.25 1s-.16.27-.44.55l-7.1 7.14c-.27.28-.4.42-.55.45-.14.03-.42-.06-1-.26a2.2 2.2 0 0 0-2.25.5 2.17 2.17 0 1 0 3.07 3.06M17.8 6.21a2.17 2.17 0 1 1 .84 3.58c-.58-.2-.87-.29-1-.26-.14.04-.28.17-.55.45L9.96 17.1c-.28.27-.41.4-.45.55-.03.13.07.42.26 1a2.17 2.17 0 1 1-3.58-.84'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
