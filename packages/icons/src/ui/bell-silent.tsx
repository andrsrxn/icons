import type { Icon } from './types'

export const IconBellSilent: Icon = ({
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
      data-slot='icon-ui-bell-silent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m21.5 14.38.25.3a2 2 0 0 1 .38.98v.39c0 .48 0 .72-.04.93a2 2 0 0 1-1.55 1.55c-.2.04-.44.04-.93.04H4.37c-.47 0-.7 0-.9-.04a2 2 0 0 1-1.56-1.57c-.04-.2-.04-.43-.04-.9v-.38a2 2 0 0 1 .64-1.3l1.33-1.47.01-.02V9.94c0-4.5 3.65-8.15 8.15-8.15a8.2 8.2 0 0 1 8.2 8.2v2.9l.01.02z'
        fill='currentColor'
      />
      <path
        d='m21.5 14.38.25.3a2 2 0 0 1 .38.98v.39c0 .48 0 .72-.04.93a2 2 0 0 1-1.55 1.55c-.2.04-.44.04-.93.04H4.37c-.47 0-.7 0-.9-.04a2 2 0 0 1-1.56-1.57c-.04-.2-.04-.43-.04-.9v-.38a2 2 0 0 1 .64-1.3l1.33-1.47.01-.02V9.94c0-4.5 3.65-8.15 8.15-8.15a8.2 8.2 0 0 1 8.2 8.2v2.9l.01.02z'
        stroke='currentColor'
      />
      <path d='M7.66 18.57c0 2.05 1.94 3.7 4.34 3.7s4.34-1.65 4.34-3.7' stroke='currentColor' />
      <path
        d='M9.36 7.65h3.52c1.15 0 1.73 0 1.85.33s-.33.7-1.21 1.44l-3.04 2.53c-.88.74-1.33 1.1-1.2 1.44.11.33.69.33 1.84.33h3.57'
        stroke='currentColor'
      />
    </svg>
  )
}
