import type { Icon } from './types'

export const IconHexagon: Icon = ({
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
      data-slot='hexagon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.9 3.97c.54-.29.8-.43 1.1-.43s.56.14 1.1.43l5.91 3.13c.54.29.8.43.95.67.15.23.15.52.15 1.1v6.27c0 .57 0 .86-.15 1.1-.14.23-.41.37-.95.66l-5.9 3.13c-.55.29-.81.43-1.11.43s-.56-.14-1.1-.43L4.99 16.9c-.54-.29-.8-.43-.95-.67-.15-.23-.15-.52-.15-1.1V8.87c0-.57 0-.86.15-1.1.14-.23.41-.37.95-.66z'
        fill='currentColor'
      />
      <path
        d='M10.9 3.97c.54-.29.8-.43 1.1-.43s.56.14 1.1.43l5.91 3.13c.54.29.8.43.95.67.15.23.15.52.15 1.1v6.27c0 .57 0 .86-.15 1.1-.14.23-.41.37-.95.66l-5.9 3.13c-.55.29-.81.43-1.11.43s-.56-.14-1.1-.43L4.99 16.9c-.54-.29-.8-.43-.95-.67-.15-.23-.15-.52-.15-1.1V8.87c0-.57 0-.86.15-1.1.14-.23.41-.37.95-.66z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  )
}
