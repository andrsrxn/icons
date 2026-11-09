import type { Icon } from './types'

export const IconLiveOff: Icon = ({
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
      data-slot='icon-ui-live-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path d='M20.55 20.54H2.47' stroke='currentColor' />
      <path d='M3.48 3.5h-1' stroke='currentColor' />
      <path d='M21.53 3.5H7.29' stroke='currentColor' />
      <path d='M7.7 15.66V8.2' stroke='currentColor' />
      <path
        d='M13.55 14.57c-.23.66-.35 1-.56 1s-.33-.34-.57-1h0l-1.12-3.19'
        stroke='currentColor'
      />
      <path d='m15.8 8.2-1.12 3.19' stroke='currentColor' />
      <path d='M21.65 8.2h-2.72c-.47 0-.7 0-.85.15s-.15.38-.15.85v4.47' stroke='currentColor' />
      <path d='M19.45 15.66h2.2' stroke='currentColor' />
      <path d='M17.93 11.93h2.78' stroke='currentColor' />
      <path d='M2.35 8.2v6.46c0 .47 0 .7.14.86.15.14.39.14.86.14h2.17' stroke='currentColor' />
    </svg>
  )
}
