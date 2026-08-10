import type { Icon } from './types'

export const IconTextAa: Icon = ({
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
      data-slot='text-aa'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.06 15.95a2.5 2.5 0 0 1-2.53 2.49A2.5 2.5 0 0 1 15 15.95a2.5 2.5 0 0 1 2.53-2.48 2.5 2.5 0 0 1 2.53 2.48m-9.19-3.58L9.13 7.05a1 1 0 0 0-1.9 0L5.5 12.37a1 1 0 0 0 .95 1.3h3.48a1 1 0 0 0 .95-1.3'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M15.47 10.74c1.5-1.86 4.87-1.14 4.66 2.83s.14 4.9.14 4.9m-8.97-4.8L9.7 8.8c-.62-1.92-.94-2.88-1.52-2.88s-.9.96-1.52 2.88l-1.6 4.88m6.24 0 1.56 4.76m-1.56-4.76H5.06M3.5 18.44l1.56-4.76m15 2.27a2.5 2.5 0 0 1-2.53 2.49A2.5 2.5 0 0 1 15 15.95a2.5 2.5 0 0 1 2.53-2.48 2.5 2.5 0 0 1 2.53 2.48Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
