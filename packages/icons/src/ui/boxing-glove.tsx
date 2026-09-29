import type { Icon } from './types'

export const IconBoxingGlove: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-boxing-glove'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='10.67'
        height='6.42'
        rx='2'
        transform='matrix(-.7863 -.61785 .59169 -.80617 10.17 23)'
        fill='currentColor'
      />
      <path
        d='M12.82 16.88c1.72-.52 6.94-3.65 8.44-6.97 2.2-4.9-5.59-10.4-8.53-7.03-1.94 2.22-1.57 3.5-2.2 5.32'
        stroke='currentColor'
      />
      <path d='M7.04 12.31c-.6-2.32-.17-8.79 4.21-8' stroke='currentColor' />
      <rect
        width='10.67'
        height='6.42'
        rx='2'
        transform='matrix(-.7863 -.61785 .59169 -.80617 10.17 23)'
        stroke='currentColor'
      />
      <path
        d='M3.23 14.42a.8.8 0 0 1-.14-1.06c.24-.34.7-.4 1.03-.15l-.44.6zm3.48.83c.33.25.4.73.15 1.07a.73.73 0 0 1-1.04.14l.45-.6zm-3.03-1.43.44-.6 2.59 2.03-.44.6-.45.6-2.59-2.03z'
        fill='currentColor'
      />
    </svg>
  )
}
