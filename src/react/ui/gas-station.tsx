import type { Icon } from './types'

export const IconGasStation: Icon = ({
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
      data-slot='ui-icon-gas-station'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m20.2 8.3 1.05 1.47c.16.23.12.55-.12.69-1.06.58-2.32.39-2.97-.53s-.48-2.25.34-3.17c.19-.2.5-.16.66.06zm-5.92-.27c0-1.89 0-2.83-.4-3.53a3 3 0 0 0-1.09-1.08C12.1 3 11.15 3 9.26 3c-1.88 0-2.82 0-3.53.4a3 3 0 0 0-1.07 1.1c-.41.7-.41 1.64-.41 3.53v10.09h10.03zm-5.02 1.9c-.61 0-.92 0-1.17-.08a1.6 1.6 0 0 1-1.02-1.02c-.09-.25-.09-.56-.09-1.18s0-.92.09-1.17c.16-.48.54-.86 1.02-1.02.25-.09.56-.09 1.17-.09.62 0 .93 0 1.18.09.48.16.86.54 1.02 1.02.08.25.08.56.08 1.17 0 .62 0 .93-.08 1.18-.16.48-.54.86-1.02 1.02-.25.08-.56.08-1.18.08'
        fill='currentColor'
      />
      <path
        d='M14.37 18.12V7.84c0-1.97 0-2.96-.44-3.68a3 3 0 0 0-.98-.98c-.73-.45-1.71-.45-3.69-.45-1.97 0-2.95 0-3.68.45a3 3 0 0 0-.98.98c-.44.72-.44 1.71-.44 3.68v10.28'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='6.98'
        y='5.37'
        width='4.56'
        height='4.56'
        rx='1.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='3.41'
        y='18.12'
        width='11.7'
        height='3.15'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m14.36 12.66.95 1.17c.44.56.67.83.94 1a2 2 0 0 0 1.36.31c.31-.04.63-.2 1.28-.5.54-.27.81-.4 1.02-.59a2 2 0 0 0 .62-1.05c.06-.27.04-.58 0-1.18l-.05-1.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m20.2 8.3.76 1.06c.28.4.43.6.35.85-.08.26-.27.32-.63.44-.95.32-1.96.07-2.52-.72s-.51-1.89.04-2.76c.21-.34.32-.51.57-.52s.4.18.68.58zm-.84-1.18L17.51 4.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
