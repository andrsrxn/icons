import type { Icon } from './types'

export const IconTextInitial: Icon = ({
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
      data-slot='text-initial'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M8.95 8.06 7.93 5.5c-.22-.55-1.15-.55-1.36 0L5.55 8.06c-.15.38.2.78.68.78h2.04c.48 0 .83-.4.68-.78'
        fill='currentColor'
      />
      <path
        d='M20.37 6h-7.42m7.42 8.78H3.63m16.74-4.53h-7.42m7.42 8.91H3.63M9.26 8.84l-.92-2.32c-.45-1.13-.68-1.7-1.1-1.7-.4 0-.63.57-1.08 1.7l-.92 2.32m4.02 0 1 2.53m-1-2.53H5.24m-1 2.53 1-2.53'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
