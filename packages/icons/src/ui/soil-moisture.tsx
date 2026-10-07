import type { Icon } from './types'

export const IconSoilMoisture: Icon = ({
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
      data-slot='icon-ui-soil-moisture'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M12.65 13.64H2.91' stroke='currentColor' />
      <path d='M12.65 17.17H2.91' stroke='currentColor' />
      <path d='M12.65 20.7H2.91' stroke='currentColor' />
      <path
        opacity='.2'
        d='M9.87 4.06c.84-.75 1.87-1 2.67-1.06.51-.04.77-.07 1.1.25.32.31.3.56.28 1.05a4.3 4.3 0 0 1-1.07 2.71c-1.08 1.19-2.51.97-3.23.32-.65-.58-1-2.15.25-3.27'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M5.8 7.02a4.5 4.5 0 0 0-2.82-.53c-.5.06-.76.09-1.02.46-.25.37-.2.61-.08 1.09.2.77.62 1.73 1.58 2.45 1.29.96 2.65.46 3.23-.3.52-.71.56-2.32-.88-3.17'
        fill='currentColor'
      />
      <path
        d='M9.87 4.06c.84-.75 1.87-1 2.67-1.06.51-.04.77-.07 1.1.25.32.31.3.56.28 1.05a4.3 4.3 0 0 1-1.07 2.71c-1.08 1.19-2.51.97-3.23.32-.65-.58-1-2.15.25-3.27'
        stroke='currentColor'
      />
      <path
        d='M5.78 6.87a4.5 4.5 0 0 0-2.83-.53c-.5.06-.76.09-1.01.46-.26.37-.2.6-.09 1.09.2.77.62 1.73 1.58 2.45 1.29.96 2.65.46 3.23-.31.52-.7.56-2.31-.88-3.16'
        stroke='currentColor'
      />
      <path d='M9.81 7.55a8.6 8.6 0 0 0-1.57 6.09' stroke='currentColor' />
      <path d='M8.15 13.1c-.12-1-.4-2.1-1.69-2.82' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.53 21.02c1.58 0 2.87-1.2 2.87-2.7 0-1.94-1.5-3.52-2.32-4.25-.24-.2-.35-.3-.54-.3s-.3.1-.54.3c-.83.72-2.33 2.28-2.34 4.24 0 1.5 1.28 2.7 2.87 2.7'
        fill='currentColor'
      />
      <path
        d='M19.53 21.02c1.58 0 2.87-1.2 2.87-2.7 0-2-1.5-3.57-2.34-4.27-.22-.2-.34-.29-.52-.29s-.3.1-.53.29c-.83.7-2.34 2.25-2.35 4.26 0 1.5 1.28 2.7 2.87 2.7'
        stroke='currentColor'
      />
    </svg>
  )
}
