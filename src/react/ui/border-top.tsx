import type { Icon } from './types'

export const IconBorderTop: Icon = ({
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
      data-slot='ui-icon-border-top'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='21.24'
        y='2.76'
        width='18.48'
        height='18.48'
        rx='3'
        transform='rotate(90 21.24 2.76)'
        fill='currentColor'
      />
      <path
        d='M21.24 9.22v6.02c0 2.83 0 4.25-.88 5.12s-2.3.88-5.12.88H8.76c-2.83 0-4.24 0-5.12-.88-.88-.87-.88-2.29-.88-5.12V9.22'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeDasharray='3 3'
      />
      <path
        d='M12 15.37V8.63M15.37 12H8.63M2.76 6v-.43a3 3 0 0 1 2.8-2.8h12.87a3 3 0 0 1 2.8 2.8l.01.43'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
