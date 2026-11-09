import type { Icon } from './types'

export const IconBellOff: Icon = ({
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
      data-slot='icon-ui-bell-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M21.5 14.43c.13.14.19.2.24.28a2 2 0 0 1 .39 1.01v.36c0 .45 0 .68-.03.87a2 2 0 0 1-1.59 1.58c-.18.04-.41.04-.86.04H4.34c-.44 0-.66 0-.84-.04a2 2 0 0 1-1.6-1.6c-.03-.18-.03-.4-.03-.83v-.36a2 2 0 0 1 .4-1.04l.24-.27 1.33-1.46.01-.01v-2.82c0-4.5 3.65-8.15 8.15-8.15a8.2 8.2 0 0 1 8.2 8.2v2.77l.01.01z'
        fill='currentColor'
      />
      <path
        d='M7.48 3.19s.84-.87 2.3-1.22C10.58 1.8 12 1.8 12 1.8a8.2 8.2 0 0 1 8.2 8.2v2.9l.01.02 1.07 1.21c.35.4.53.6.65.84l.14.37c.06.26.06.53.06 1.07v.58q0 .53-.3.96'
        stroke='currentColor'
      />
      <path d='m2.68 2.68 18.64 18.64' stroke='currentColor' />
      <path
        d='M18.57 18.57H4.37c-.47 0-.7 0-.9-.04a2 2 0 0 1-1.56-1.57c-.04-.2-.04-.43-.04-.9v-.38a2 2 0 0 1 .64-1.3l.35-.38h0c.47-.52.7-.78.84-1.1l.04-.1c.11-.33.11-.68.11-1.38V8.25c0-1.98 1.37-2.9 1.37-2.9'
        stroke='currentColor'
      />
      <path d='M7.66 18.57c0 2.05 1.94 3.7 4.34 3.7s4.34-1.65 4.34-3.7' stroke='currentColor' />
    </svg>
  )
}
