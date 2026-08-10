import type { Icon } from './types'

export const IconTransparency: Icon = ({
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
      data-slot='transparency'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6 18c-2.36-1.74-2.63-5.74-2.47-7.52L13 20c-1.35.06-4.64-.26-7-2M6 6l4.56-2L20 14l-2 4z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='8.5' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='m3.78 10.36 9.95 9.94M6.18 6.29l11.61 11.6m-7.6-14.06 10.06 10.06'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
