import type { Icon } from './types'

export const IconChartTriangle: Icon = ({
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
      data-slot='icon-ui-chart-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.05 21.8h13.77c1.4 0 2.09 0 2.54-.24a2 2 0 0 0 1.03-1.65c.03-.51-.27-1.14-.86-2.39-.27-.55-.4-.82-.58-1.03a2 2 0 0 0-.95-.6c-.27-.07-.57-.07-1.18-.07H5.05c-.62 0-.93 0-1.21.08a2 2 0 0 0-.96.62c-.19.22-.31.5-.57 1.07-.55 1.24-.83 1.85-.79 2.36a2 2 0 0 0 1.05 1.61c.44.24 1.12.24 2.48.24'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.65 4.17 8.52 6.15c-.76 1.33-1.13 2-.85 2.5.3.5 1.06.5 2.59.5h3.54c1.62 0 2.43 0 2.72-.53.28-.52-.16-1.2-1.04-2.57l-1.3-1.98c-.28-.45-.43-.67-.65-.8-.22-.11-.49-.11-1.02-.11h-1.12c-.57 0-.85 0-1.09.13-.23.14-.37.38-.65.88'
        fill='currentColor'
      />
      <path
        d='m6.72 9.05-2.3 4.17c-2.17 3.96-3.26 5.94-2.39 7.42S5.17 22.1 9.7 22.1h4.6c4.53 0 6.8 0 7.66-1.48.87-1.47-.22-3.46-2.42-7.42l-2.3-4.17c-2.33-4.21-3.5-6.32-5.26-6.31-1.77 0-2.93 2.1-5.25 6.32'
        stroke='currentColor'
      />
      <path d='M6.73 9.38h10.54' stroke='currentColor' />
      <path d='M3.03 15.82h17.94' stroke='currentColor' />
    </svg>
  )
}
