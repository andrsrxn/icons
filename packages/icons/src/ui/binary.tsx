import type { Icon } from './types'

export const IconBinary: Icon = ({
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
      data-slot='icon-ui-binary'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m10.3 3.97.99-.63c.67-.43 1.01-.65 1.27-.5.26.14.26.54.26 1.34v6.3'
        stroke='currentColor'
      />
      <path
        d='m17.73 15.12 1-.63c.67-.43 1-.65 1.27-.5.26.14.26.54.26 1.34v6.3'
        stroke='currentColor'
      />
      <path
        d='m3.01 15.12 1-.63c.67-.43 1.01-.65 1.27-.5.26.14.26.54.26 1.34v6.3'
        stroke='currentColor'
      />
      <path
        d='M21.45 6.66c0 2.1-.55 3.82-2.46 3.82-1.9 0-2.45-1.71-2.45-3.82s.63-3.82 2.45-3.82 2.46 1.71 2.46 3.82'
        stroke='currentColor'
      />
      <path
        d='M7.46 6.66c0 2.1-.55 3.82-2.45 3.82S2.55 8.77 2.55 6.66 3.18 2.84 5 2.84s2.45 1.71 2.45 3.82'
        stroke='currentColor'
      />
      <path
        d='M14.63 17.8c0 2.12-.55 3.83-2.46 3.83-1.9 0-2.45-1.71-2.45-3.82s.63-3.82 2.45-3.82 2.46 1.71 2.46 3.82'
        stroke='currentColor'
      />
    </svg>
  )
}
