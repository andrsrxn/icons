import type { Icon } from './types'

export const IconBandage: Icon = ({
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
      data-slot='bandage'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='12.13'
        y='5.75'
        width='8.66'
        height='9.03'
        rx='2'
        transform='rotate(45 12.13 5.75)'
        fill='currentColor'
      />
      <rect
        x='14.88'
        y='3'
        width='8.66'
        height='16.8'
        rx='2'
        transform='rotate(45 14.88 3)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M18.12 12 12 5.88m-.35 12.6-5.76-5.76'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M12.14 14.42a.42.42 0 1 1-.6-.59.42.42 0 0 1 .6.6' fill='currentColor' />
      <path
        d='M12.14 14.42a.42.42 0 1 1-.6-.59.42.42 0 0 1 .6.6Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <path d='M12.46 10.17a.42.42 0 1 1-.6-.6.42.42 0 0 1 .6.6' fill='currentColor' />
      <path
        d='M12.46 10.17a.42.42 0 1 1-.6-.6.42.42 0 0 1 .6.6Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
