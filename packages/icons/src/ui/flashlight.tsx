import type { Icon } from './types'

export const IconFlashlight: Icon = ({
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
      data-slot='icon-ui-flashlight'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12.16 3.84a.9.9 0 0 1 .75.25l7.1 7.1a.73.73 0 0 1-.17 1.17l-5.2 2.81c-.25.14-.38.21-.5.3s-.21.19-.42.4l-4.76 4.75c-.58.58-.86.87-1.16 1.05a3 3 0 0 1-3.17 0 7 7 0 0 1-1.15-1.05 8 8 0 0 1-1.05-1.15 3 3 0 0 1 0-3.17c.19-.3.47-.58 1.05-1.16l4.71-4.71c.23-.23.35-.34.44-.48s.17-.27.31-.56l2.53-5.06a.9.9 0 0 1 .69-.5'
        fill='currentColor'
      />
      <path
        d='M20.07 12.47c-.2.2-.29.29-.4.37l-.26.17c-.12.07-.25.11-.5.21l-4.29 1.6c-.4.15-.6.23-.79.34-.18.12-.33.27-.64.58l-4.93 4.93c-.27.27-.4.4-.53.5a3 3 0 0 1-3.71.04 6 6 0 0 1-.54-.5l-.54-.53a3 3 0 0 1-.04-3.8c.1-.13.25-.26.53-.54l4.85-4.86c.3-.3.44-.44.56-.62a4 4 0 0 0 .34-.75l1.72-4.42c.1-.25.14-.37.2-.48l.17-.26q.1-.13.36-.38c1.27-1.26 1.9-1.9 2.63-2.11a3 3 0 0 1 1.7 0c.73.22 1.36.85 2.62 2.1l1.49 1.5c1.25 1.25 1.87 1.87 2.09 2.6a3 3 0 0 1 0 1.72c-.22.72-.84 1.34-2.09 2.6'
        stroke='currentColor'
      />
      <path d='M11.99 3.72 20.28 12' stroke='currentColor' />
      <path d='M12.37 11.76 9.73 14.4' stroke='currentColor' />
    </svg>
  )
}
