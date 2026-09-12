import type { Icon } from './types'

export const IconAirportTower: Icon = ({
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
      data-slot='icon-ui-airport-tower'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' fill='currentColor' d='M9.08 13.71h5.2v8.71h-5.2z' />
      <path opacity='.2' d='m15.72 5.4 5.11.85-1.4 6.95h-3.71z' fill='currentColor' />
      <path opacity='.2' d='m2.76 6.51 5.33-.8v7.8H4.34z' fill='currentColor' />
      <path d='M14.18 22.28V13.7h-5v8.57' stroke='currentColor' />
      <path
        d='M3.44 10.63c-.69-2.35-1.03-3.52-.43-4.32s1.82-.8 4.27-.8h9.14c2.58 0 3.87 0 4.47.84.6.85.16 2.07-.7 4.5l-.08.2c-.46 1.29-.69 1.93-1.2 2.3-.52.36-1.2.36-2.57.36h-9c-1.44 0-2.16 0-2.7-.4-.52-.4-.73-1.09-1.13-2.47z'
        stroke='currentColor'
      />
      <path d='M12.06 5.1V1.81' stroke='currentColor' />
      <path d='M8.09 13.71v-8' stroke='currentColor' />
      <path d='M15.42 13.71v-8' stroke='currentColor' />
      <path d='M14.3 1.81H9.73' stroke='currentColor' />
    </svg>
  )
}
