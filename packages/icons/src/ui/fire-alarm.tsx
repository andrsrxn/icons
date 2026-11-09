import type { Icon } from './types'

export const IconFireAlarm: Icon = ({
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
      data-slot='icon-ui-fire-alarm'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19 21.23h.12a2 2 0 0 0 1.94-1.94v-.25a2 2 0 0 0-1.94-1.95H4.47a2 2 0 0 0-1.94 1.95v.25a2 2 0 0 0 2.07 1.94z'
        fill='currentColor'
      />
      <path d='M4.07 16.7c0-5.63 2.26-10.2 7.93-10.2s7.93 4.3 7.93 10.2' stroke='currentColor' />
      <path d='M14.64 10.5a3.9 3.9 0 0 1 1.56 3.55' stroke='currentColor' />
      <path
        d='M2.4 19.16v-.12a2 2 0 0 1 1.94-1.95h15.32a2 2 0 0 1 1.94 1.95v.25a2 2 0 0 1-1.94 1.94H4.34A2 2 0 0 1 2.4 19.3z'
        stroke='currentColor'
      />
      <path d='M12 3.78v-1.8' stroke='currentColor' />
      <path d='m5.64 5.65-.94-1.4' stroke='currentColor' />
      <path d='m18.32 5.65.98-1.4' stroke='currentColor' />
    </svg>
  )
}
