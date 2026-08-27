import type { Icon } from './types'

export const IconOctagon: Icon = ({
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
      data-slot='ui-icon-octagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.53 2.9A4 4 0 0 1 12 2.47c.38 0 .74.14 1.47.43l1.98.78 1.95.84c.71.31 1.07.47 1.34.74s.43.63.74 1.34l.84 1.95.78 1.98c.29.73.43 1.09.43 1.47s-.14.74-.43 1.47l-.78 1.98-.84 1.95c-.31.71-.47 1.07-.74 1.34s-.63.43-1.34.74l-1.95.84-1.98.78c-.73.29-1.09.43-1.47.43s-.74-.14-1.47-.43l-1.98-.78-1.95-.84a4 4 0 0 1-1.34-.74 4 4 0 0 1-.74-1.34l-.84-1.95-.78-1.98A4 4 0 0 1 2.47 12c0-.38.14-.74.43-1.47l.78-1.98.84-1.95c.31-.71.47-1.07.74-1.34s.63-.43 1.34-.74l1.95-.84z'
        fill='currentColor'
      />
      <path
        d='M10.43 2.98A4 4 0 0 1 12 2.49c.4 0 .8.16 1.57.5l1.84.78 1.86.75c.78.31 1.17.47 1.45.76.3.28.45.67.76 1.45l.75 1.86.79 1.84c.33.78.49 1.16.49 1.57 0 .4-.16.8-.5 1.57l-.78 1.84-.75 1.86a4 4 0 0 1-.76 1.45c-.28.3-.67.45-1.45.76l-1.86.75-1.84.79c-.78.33-1.16.49-1.57.49-.4 0-.8-.16-1.57-.5l-1.84-.78-1.86-.75a4 4 0 0 1-1.45-.76 4 4 0 0 1-.76-1.45l-.75-1.86-.79-1.84A4 4 0 0 1 2.5 12c0-.4.16-.8.5-1.57l.78-1.84.75-1.86c.31-.78.47-1.17.76-1.45.28-.3.67-.45 1.45-.76l1.86-.75z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
