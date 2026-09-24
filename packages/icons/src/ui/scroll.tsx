import type { Icon } from './types'

export const IconScroll: Icon = ({
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
      data-slot='icon-ui-scroll'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.5 4.15a1.95 1.95 0 0 0-3.91 0v.65a2.6 2.6 0 0 0 2.6 2.6h1.3z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M11.25 21.8c0-1.54 0-2.3.27-2.9A3 3 0 0 1 13 17.42c.6-.28 1.37-.28 2.9-.28h3.68a2.33 2.33 0 0 1 0 4.65z'
        fill='currentColor'
      />
      <path
        d='M18.44 17.48v-9c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H4.66c2.01 0 2.01 1.93 2.01 1.93v14.68a2.43 2.43 0 0 0 2.43 2.43'
        stroke='currentColor'
      />
      <path
        d='M8.96 21.52a2.3 2.3 0 0 0 2.32-2.32v-.73a1 1 0 0 1 .99-1h8.16a1 1 0 0 1 1 1.02v.05a3 3 0 0 1-2.98 2.98h-.6'
        stroke='currentColor'
      />
      <path
        d='M4.69 2.48a2.1 2.1 0 0 0-2.1 2.1v1.79a1 1 0 0 0 .85.84l.33.01h2.64'
        stroke='currentColor'
      />
      <path d='M8.96 21.52h9' stroke='currentColor' />
      <path d='M9.94 8.22h5.18' stroke='currentColor' />
      <path d='M9.94 12.27h5.18' stroke='currentColor' />
    </svg>
  )
}
