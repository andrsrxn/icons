import type { Icon } from './types'

export const IconTruck: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-truck'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.4 9.7c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.79c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v.73c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h1.6c2.83 0 4.25 0 5.13-.87.88-.88.88-2.3.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M16.4 9.7c0-2.83 0-4.25-.88-5.13s-2.3-.87-5.12-.87H8.79c-2.83 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.13v.73c0 2.83 0 4.25.88 5.13s2.29.87 5.12.87h5.6c.95 0 1.42 0 1.71-.29.3-.3.3-.76.3-1.7z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M15.85 16.43h3.55c.76 0 1.14 0 1.4-.2a1 1 0 0 0 .22-.2c.2-.26.2-.65.2-1.4v-1.04c0-1.31 0-1.97-.21-2.5a3 3 0 0 0-1.71-1.7c-.53-.2-1.18-.2-2.5-.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='5.67'
        cy='18.53'
        r='2.09'
        transform='rotate(90 5.67 18.53)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='14.1'
        cy='18.53'
        r='2.09'
        transform='rotate(90 14.1 18.53)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
