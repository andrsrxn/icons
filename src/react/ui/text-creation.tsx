import type { Icon } from './types'

export const IconTextCreation: Icon = ({
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
      data-slot='text-creation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M14.68 10.02v-.09a.75.75 0 0 0-.71-.71h-3.81a.75.75 0 0 0-.71.71v.1m2.61-.81v6.02m0 0h-.83m.83 0h.83'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <rect opacity='.2' x='3.76' y='3.67' width='3.97' height='3.97' rx='1' fill='currentColor' />
      <rect opacity='.2' x='16.39' y='3.67' width='3.97' height='3.97' rx='1' fill='currentColor' />
      <rect opacity='.2' x='3.76' y='16.28' width='3.97' height='3.97' rx='1' fill='currentColor' />
      <rect
        opacity='.2'
        x='16.39'
        y='16.28'
        width='3.97'
        height='3.97'
        rx='1'
        fill='currentColor'
      />
      <rect
        x='3.76'
        y='3.67'
        width='3.97'
        height='3.97'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='16.39'
        y='3.67'
        width='3.97'
        height='3.97'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='3.76'
        y='16.28'
        width='3.97'
        height='3.97'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='16.39'
        y='16.28'
        width='3.97'
        height='3.97'
        rx='1'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M5.75 7.64V16m2.14 2.14h8.35m2.14-10.5V16M7.89 5.5h8.35'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
