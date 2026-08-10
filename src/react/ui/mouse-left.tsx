import type { Icon } from './types'

export const IconMouseLeft: Icon = ({
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
      data-slot='mouse-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12.02 6.15H12c-.7 0-1.25.56-1.25 1.25v.76c0 .69.56 1.25 1.25 1.25h.02m0-3.26c.68 0 1.23.56 1.23 1.25v.76c0 .68-.55 1.24-1.23 1.25m0-3.26V4m0 5.41v2.15m0 0h5.1m-5.1 0H6.75M12 20.58a5.23 5.23 0 0 0 5.23-5.23V8.7a5.23 5.23 0 0 0-10.46 0v6.65A5.23 5.23 0 0 0 12 20.58Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 5.34c0-.86-.9-1.41-1.67-1.03L8.21 5.38a2.6 2.6 0 0 0-1.44 2.34v7.6A5.23 5.23 0 0 0 12 20.55h.73a4.5 4.5 0 0 0 4.5-4.5v-1.88a2.6 2.6 0 0 0-2.61-2.61h-1.44c-.65 0-1.18-.53-1.18-1.18V9.7a.5.5 0 0 0-.51-.51.5.5 0 0 1-.51-.51V7c0-.28.23-.5.5-.5.3 0 .52-.24.52-.52z'
        fill='currentColor'
      />
    </svg>
  )
}
