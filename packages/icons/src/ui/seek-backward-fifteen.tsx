import type { Icon } from './types'

export const IconSeekBackwardFifteen: Icon = ({
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
      data-slot='icon-ui-seek-backward-fifteen'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='11.66' cy='12' rx='10.24' ry='10.15' fill='currentColor' />
      <path
        d='m3.1 3.07-.25 1.17c-.23 1.09-.35 1.63-.08 2.04s.8.53 1.9.76l1.17.25'
        stroke='currentColor'
      />
      <path
        d='M2.73 16.68A10.15 10.15 0 1 0 13.87 2.1C8.4.93 4.92 4.76 3.46 6.06'
        stroke='currentColor'
      />
      <path
        d='m7.16 10.02.72-.46c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v5.57'
        stroke='currentColor'
      />
      <path
        d='M16.61 9.02h-3.33a.5.5 0 0 0-.5.45l-.28 2.58c-.02.17.17.29.32.22 1.44-.66 4.02-.58 4.02 1.7 0 2.93-3.44 2.82-4.39 1.27'
        stroke='currentColor'
      />
    </svg>
  )
}
