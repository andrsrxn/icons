import type { Icon } from './types'

export const IconTrain: Icon = ({
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
      data-slot='icon-ui-train'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.16 11.24H1.72v4.74h16.3l.44-.06c.73-.09 1.1-.14 1.42-.26a3 3 0 0 0 1.5-1.22c.18-.29.3-.64.54-1.33.17-.49.25-.73.24-.92a1 1 0 0 0-.62-.87c-.18-.08-.44-.08-.95-.08z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.93 7.33h-9.2V4.3h16.03c.96 1.24 1.43 1.86 1.26 2.36l-.11.24c-.3.44-1.08.44-2.64.44z'
        fill='currentColor'
      />
      <path d='M1.72 15.98h17.35' stroke='currentColor' />
      <path
        d='M17.98 15.98h.42c.65 0 .98 0 1.27-.09a2 2 0 0 0 .88-.56c.2-.23.35-.52.62-1.12.55-1.17.83-1.76.91-2.36a4 4 0 0 0-.26-2.07 9 9 0 0 0-1.47-2.06l-1.63-1.98c-.59-.71-.88-1.07-1.29-1.26-.4-.2-.87-.2-1.8-.2H1.66'
        stroke='currentColor'
      />
      <path d='M19.57 7.33H1.65' stroke='currentColor' />
      <path d='M5.73 7.5v3.93' stroke='currentColor' />
      <path d='M12.23 7.5v3.93' stroke='currentColor' />
      <path d='M21.8 12H1.64' stroke='currentColor' />
      <path d='M20.61 21.13H1.77' stroke='currentColor' />
      <path d='M3.72 19.6v1.53' stroke='currentColor' />
      <path d='M8.7 19.6v1.53' stroke='currentColor' />
      <path d='M13.68 19.6v1.53' stroke='currentColor' />
      <path d='M18.66 19.6v1.53' stroke='currentColor' />
    </svg>
  )
}
