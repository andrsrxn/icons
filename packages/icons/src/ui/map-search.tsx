import type { Icon } from './types'

export const IconMapSearch: Icon = ({
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
      data-slot='icon-ui-map-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.72 7.16c0-.74 0-1.1.2-1.37s.56-.36 1.26-.56l2.69-.75C7.03 4.16 7.6 3.99 8 4.29s.4.9.4 2.12v9.72c0 .74 0 1.1-.21 1.37s-.56.37-1.27.56l-2.69.73c-1.16.32-1.74.48-2.13.18-.4-.3-.4-.9-.4-2.1z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.64 7.83c0-.73 0-1.1.2-1.36.21-.27.56-.37 1.27-.56l2.68-.75c1.17-.33 1.75-.49 2.14-.19s.4.9.4 2.11v11.26h-.87L20.3 15.9l-2.03-.56-2.62 1z'
        fill='currentColor'
      />
      <path
        d='M12.54 19.52c-1.39-.47-3.4-1.17-4.32-1.17-.86 0-2.4.42-3.75.85-1.29.41-1.93.62-2.34.32s-.41-.96-.41-2.27V6.88c0-.65 0-.98.18-1.23.18-.26.48-.37 1.07-.58C4.39 4.55 6.72 3.8 8.22 3.8c2.28 0 5.05 1.74 7.33 1.74 1.04 0 2.53-.44 3.85-.93 1.38-.5 2.07-.76 2.5-.46s.43 1 .43 2.41v6.81'
        stroke='currentColor'
      />
      <path d='M8.4 18.32V4.22' stroke='currentColor' />
      <path d='M15.77 12.7V6.07' stroke='currentColor' />
      <path d='m20.72 20.64 1.8 1.8' stroke='currentColor' />
      <path
        d='M21.59 18.26a3.06 3.06 0 0 1-3.07 3.07 3.07 3.07 0 1 1 3.07-3.07'
        stroke='currentColor'
      />
    </svg>
  )
}
