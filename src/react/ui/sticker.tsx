import type { Icon } from './types'

export const IconSticker: Icon = ({
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
      data-slot='sticker'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.5 12a8.5 8.5 0 1 0-8.5 8.5s-.88-4.52 1.46-6.87C15.81 11.3 20.5 12 20.5 12'
        fill='currentColor'
      />
      <path
        d='M12 20.5s2.77-2.7 4.31-4.25L20.5 12a8.5 8.5 0 1 0-8.5 8.5Zm8.5-8.5s-4.69-.71-7.04 1.63C11.12 15.98 12 20.5 12 20.5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
