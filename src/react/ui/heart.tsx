import type { Icon } from './types'

export const IconHeart: Icon = ({
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
      data-slot='heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.87 4.61c1.25 0 2.3.61 3.06 1.29.59.52.88.78 1.07.78s.48-.26 1.07-.78a4.7 4.7 0 0 1 3.06-1.29c2.6 0 4.13 2.46 4.13 4.32 0 5.29-4.6 7.35-7.5 9.9-.38.34-.57.51-.76.51s-.38-.17-.77-.5c-2.89-2.56-7.5-4.62-7.5-9.91 0-1.86 1.54-4.32 4.14-4.32'
        fill='currentColor'
      />
      <path
        d='M7.87 4.61c2.08 0 3.62 1.7 4.13 2.54.51-.84 2.05-2.54 4.13-2.54 2.6 0 4.13 2.46 4.13 4.32 0 5.79-5.5 7.71-8.26 10.64-2.75-2.93-8.26-4.85-8.26-10.64 0-1.86 1.53-4.32 4.13-4.32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
