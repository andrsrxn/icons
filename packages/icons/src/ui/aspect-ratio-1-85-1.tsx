import type { Icon } from './types'

export const IconAspectRatio1851: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-aspect-ratio-1-85-1'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M16.3 18.15c2.82 0 4.24 0 5.11-.88.88-.87.88-2.29.88-5.12v-.3c0-2.83 0-4.25-.88-5.12-.87-.88-2.29-.88-5.12-.88H7.71c-2.83 0-4.25 0-5.12.88-.88.87-.88 2.29-.88 5.12v.3c0 2.83 0 4.25.88 5.12.87.88 2.29.88 5.12.88z'
        fill='currentColor'
      />
      <path
        d='M1.7 12.15v-.3c0-2.83 0-4.25.89-5.12.87-.88 2.29-.88 5.12-.88h8.58c2.83 0 4.25 0 5.12.88.88.87.88 2.29.88 5.12v.3c0 2.83 0 4.25-.88 5.12-.87.88-2.29.88-5.12.88H7.71c-2.83 0-4.25 0-5.12-.88-.88-.87-.88-2.29-.88-5.12'
        stroke='currentColor'
      />
      <path
        d='M9.41 9.09h-.88c-1.41 0-2.12 0-2.56.43-.44.44-.44 1.15-.44 2.57v.88'
        stroke='currentColor'
      />
      <path
        d='M14.59 14.91h.88c1.41 0 2.12 0 2.56-.43.44-.44.44-1.15.44-2.57v-.88'
        stroke='currentColor'
      />
    </svg>
  )
}
