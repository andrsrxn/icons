import type { Icon } from './types'

export const IconDeviceLaptopImage: Icon = ({
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
      data-slot='icon-ui-device-laptop-image'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.81 16.13c.3-.41.44-.62.66-.74s.47-.11.98-.11H19.8c.54 0 .81 0 1.04.12.22.13.37.36.66.81l.43.69c.85 1.35 1.28 2.03 1 2.55-.3.52-1.1.52-2.7.52H3.99c-1.69 0-2.53 0-2.81-.54s.2-1.23 1.17-2.61z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M20 9.4c0-2.22 0-3.32-.56-4.1a3 3 0 0 0-.7-.7c-.78-.57-1.89-.57-4.1-.57H8.9c-1.8 0-2.7 0-3.39.38a3 3 0 0 0-1.16 1.17c-.38.68-.38 1.58-.38 3.39 0 1.23 0 1.84.26 2.13a1 1 0 0 0 .73.32c.4 0 .85-.4 1.76-1.23l.9-.83c.67-.6 1-.89 1.4-.88.39 0 .7.31 1.34.93l1.48 1.43c.54.53.81.79 1.16.82.34.04.66-.16 1.3-.57l.58-.36c.5-.32.75-.47 1.02-.48h.06c.27 0 .52.17 1.02.49l.25.16c1.07.69 1.6 1.03 2.03.9a1 1 0 0 0 .4-.2c.33-.3.33-.94.33-2.2'
        fill='currentColor'
      />
      <path
        d='M20 14.73v-4.7c0-2.82 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-4c-2.83 0-4.24 0-5.12.88S4 7.21 4 10.03v4.7'
        stroke='currentColor'
      />
      <path
        d='m20.02 14.73.31.41c1.61 2.1 2.42 3.15 2 3.99-.4.84-1.73.84-4.38.84H6.1c-2.61 0-3.92 0-4.33-.83s.36-1.88 1.93-3.97l.32-.44'
        stroke='currentColor'
      />
      <path d='M20 14.73H4' stroke='currentColor' />
      <path
        d='M16.41 7a.43.43 0 1 1-.85 0 .43.43 0 0 1 .85 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m4.28 12.64 3.54-3.42h0c.6-.58.9-.87 1.31-.86.41 0 .69.3 1.23.91L11.93 11c.49.53.73.8 1.1.82.38.03.97-.43 1.6-.88.5-.37.9-.64 1.23-.65.32 0 .58.17 1.1.52l2.74 1.83'
        stroke='currentColor'
      />
    </svg>
  )
}
