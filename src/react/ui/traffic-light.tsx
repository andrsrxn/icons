import type { Icon } from './types'

export const IconTrafficLight: Icon = ({
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
      data-slot='traffic-light'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.84 8.13c0-1.74 0-2.6-.5-3.17l-.17-.17c-.57-.5-1.44-.5-3.17-.5s-2.6 0-3.17.5l-.17.17c-.5.57-.5 1.43-.5 3.17v4.18c0 1.74 0 2.6.5 3.17l.17.18c.57.5 1.44.5 3.17.5s2.6 0 3.17-.5l.17-.18c.5-.57.5-1.43.5-3.17zm-2.65-.44a1.2 1.2 0 1 1-2.38 0 1.2 1.2 0 0 1 2.38 0m0 5.09a1.2 1.2 0 1 1-2.38 0 1.2 1.2 0 0 1 2.38 0'
        fill='currentColor'
      />
      <path
        d='M8.27 7.92c-.22-1.85-.32-2.78.14-3.41l.25-.27c.57-.54 1.5-.54 3.37-.54 1.84 0 2.76 0 3.33.53l.25.27c.47.62.37 1.54.18 3.37l-.2 1.94-.03.41.03.41.2 1.94c.2 1.83.29 2.75-.18 3.38l-.25.26c-.57.54-1.5.54-3.33.54-1.87 0-2.8 0-3.37-.54l-.25-.28c-.46-.63-.36-1.56-.14-3.4l.21-1.85c.03-.23.04-.34.04-.46s0-.23-.04-.46z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M12 20.5v-3.75' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <circle cx='12' cy='7.69' r='1.19' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='12.78' r='1.19' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M8.02 6.3H6.88a1 1 0 0 0-.69 1.72l1.95 1.86m7.93-3.58h1.05a1 1 0 0 1 .69 1.72l-1.95 1.86m-8.03 2.04H6.9a1 1 0 0 0-.68 1.73l1.6 1.51m8.35-3.24h.92a1 1 0 0 1 .68 1.73l-1.6 1.51'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
