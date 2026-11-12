import type { Icon } from './types'

export const IconSeekForwardTen: Icon = ({
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
      data-slot='icon-ui-seek-forward-ten'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12.3' cy='12' rx='10.24' ry='10.15' fill='currentColor' />
      <path
        d='m20.86 3.07.25 1.17c.24 1.09.35 1.63.09 2.04-.27.41-.82.53-1.9.76l-1.18.25'
        stroke='currentColor'
      />
      <path
        d='M21.23 16.68A10.15 10.15 0 1 1 10.1 2.1c5.48-1.17 8.94 2.66 10.4 3.96'
        stroke='currentColor'
      />
      <path
        d='m6.9 9.93.77-.49c.68-.43 1.02-.65 1.28-.5.25.14.25.54.25 1.34v5.62'
        stroke='currentColor'
      />
      <path
        d='M16.84 12.4c0 2-.52 3.63-2.34 3.63s-2.33-1.62-2.33-3.63.6-3.63 2.33-3.63c1.74 0 2.34 1.63 2.34 3.63'
        stroke='currentColor'
      />
    </svg>
  )
}
