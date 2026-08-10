import type { Icon } from './types'

export const IconAirplaneLanding: Icon = ({
  size = 24,
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
      data-slot='airplane-landing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m6.06 12.15 9.38 2.51 1 .27c1.53.4 2.3.61 2.9-.25.6-.87.29-1.31-.35-2.2a4 4 0 0 0-2.28-1.54c-.8-.21-1.2-.32-1.45-.5a1 1 0 0 1-.22-.22c-.2-.24-.4-.86-.79-2.11-.36-1.17-1-2.32-1.8-2.54l-.4-.1c-.86-.23-1.29-.35-1.5-.13s-.05.65.26 1.52l.07.21c.3.9.45 1.34.04 1.77-.41.44-.92.3-1.96.03l-.5-.14c-.45-.12-.67-.18-.84-.32s-.26-.35-.46-.77l-.38-.82-.1-.2a1 1 0 0 0-.5-.4q-.06-.04-.2-.07c-.34-.09-.5-.13-.63-.13a1 1 0 0 0-1.01.94c0 .13.02.3.1.63l.39 2 .48 1.81c.1.36.38.65.75.75'
        fill='currentColor'
      />
      <path
        d='m6.06 12.15 9.38 2.51 2.31.62c.96.26 1.45.39 1.86-.05.4-.44.28-.8.03-1.54a4.8 4.8 0 0 0-3.12-3c-.95-.37-1.43-.55-1.66-.78s-.5-.97-1.03-2.43a3.8 3.8 0 0 0-2.19-2.35c-.72-.31-1.09-.46-1.32-.27-.24.2-.12.69.1 1.66l.09.38c.16.75.24 1.13 0 1.48q-.1.14-.23.24c-.34.26-1.02.15-2.38-.08-.02 0-.03 0-.2-.11l-.13-.1a2 2 0 0 1-.44-.75l-.35-.76-.1-.2a1 1 0 0 0-.5-.4q-.06-.04-.2-.07c-.34-.09-.5-.13-.63-.13a1 1 0 0 0-1.01.94c0 .13.02.3.1.63l.39 2 .48 1.81c.1.36.38.65.75.75Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M19.86 19H4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
