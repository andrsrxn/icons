import type { Icon } from './types'

export const IconWomen: Icon = ({
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
      data-slot='women'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='5.57' r='2' fill='currentColor' />
      <circle cx='12' cy='5.57' r='2' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M9.18 11c.42-.7.64-1.05.98-1.24.34-.2.75-.2 1.57-.2h.46c.88 0 1.32 0 1.67.22.36.22.56.6.98 1.37l1.58 2.96a1.3 1.3 0 0 1-1.14 1.9c-.71 0-1.3.58-1.3 1.3v1.15c0 .44 0 .66-.04.84a1.5 1.5 0 0 1-1.09 1.09c-.18.04-.4.04-.83.04s-.65 0-.83-.04a1.5 1.5 0 0 1-1.1-1.1c-.04-.17-.04-.4-.04-.83v-1.03c0-.78-.63-1.42-1.41-1.42a1.42 1.42 0 0 1-1.21-2.15z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        opacity='.2'
        d='M9.18 11c.42-.7.64-1.05.98-1.24.34-.2.75-.2 1.57-.2h.46c.88 0 1.32 0 1.67.22.36.22.56.6.98 1.37l1.58 2.96a1.3 1.3 0 0 1-1.14 1.9c-.71 0-1.3.58-1.3 1.3v1.15c0 .44 0 .66-.04.84a1.5 1.5 0 0 1-1.09 1.09c-.18.04-.4.04-.83.04s-.65 0-.83-.04a1.5 1.5 0 0 1-1.1-1.1c-.04-.17-.04-.4-.04-.83v-1.03c0-.78-.63-1.42-1.41-1.42a1.42 1.42 0 0 1-1.21-2.15z'
        fill='currentColor'
      />
    </svg>
  )
}
