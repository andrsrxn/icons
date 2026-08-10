import type { Icon } from './types'

export const IconShield: Icon = ({
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
      data-slot='shield'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 17.94V5.6a1 1 0 0 0-1.52-.85l-2.62 1.6-.17.08L4.56 7.6A1 1 0 0 0 4 8.93l2.66 6.06a1 1 0 0 0 .22.31l3.43 3.35a1 1 0 0 0 1.7-.71'
        fill='currentColor'
      />
      <path
        d='M12 20.12V3.96m-.63.2c-.74.57-2.03 1.51-3.2 2.2A13 13 0 0 1 4.9 7.62c-.55.14-.91.7-.75 1.26a24 24 0 0 0 2.78 6.18 20 20 0 0 0 4.56 4.9c.31.22.72.22 1.03 0 .92-.7 2.9-2.34 4.57-4.9a24 24 0 0 0 2.77-6.18c.17-.56-.2-1.12-.75-1.26a13 13 0 0 1-3.28-1.26 38 38 0 0 1-3.2-2.2 1.04 1.04 0 0 0-1.25 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
