import type { Icon } from './types'

export const IconBorderLeft: Icon = ({
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
      data-slot='icon-ui-border-left'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.81 8.72c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12v6.49c0 2.82 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H8.81c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path d='M12.06 8.6v6.73' stroke='currentColor' />
      <path d='M8.69 11.96h6.73' stroke='currentColor' />
      <path
        d='M5.38 2.73A2.57 2.57 0 0 0 2.8 5.29v13.35a2.57 2.57 0 0 0 2.57 2.57'
        stroke='currentColor'
      />
      <path d='M18.67 21.26h.06a2.6 2.6 0 0 0 2.6-2.61' stroke='currentColor' />
      <path d='M18.8 2.67h.06c1.37 0 2.48 1.1 2.48 2.47' stroke='currentColor' />
      <path d='M21.28 13.12v-2.25' stroke='currentColor' />
      <path d='M13.16 2.77h-2.24' stroke='currentColor' />
      <path d='M13.16 21.25h-2.24' stroke='currentColor' />
    </svg>
  )
}
