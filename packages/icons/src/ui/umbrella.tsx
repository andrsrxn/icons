import type { Icon } from './types'

export const IconUmbrella: Icon = ({
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
      data-slot='icon-ui-umbrella'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path opacity='.2' d='m4.29 5.23 5.27-2.82-.9 9.16-2.8-1.23-4.28 1.23z' fill='currentColor' />
      <path opacity='.2' d='m19.6 5.23-5.26-2.82.9 9.16 2.8-1.23 4.28 1.23z' fill='currentColor' />
      <path
        d='M1.74 12.29c0-5.58 4.6-10.1 10.3-10.1a10.2 10.2 0 0 1 10.28 10.1'
        stroke='currentColor'
      />
      <path d='M8.52 12.29c0-5.58 1.57-10.1 3.51-10.1s3.51 4.52 3.51 10.1' stroke='currentColor' />
      <path
        d='M8.64 12.29c.28-.95 1.95-1.87 3.4-1.87 1.44 0 2.9.84 3.38 1.87'
        stroke='currentColor'
      />
      <path
        d='M1.74 12.29c.28-.95 1.95-1.87 3.4-1.87 1.44 0 2.9.84 3.38 1.87'
        stroke='currentColor'
      />
      <path d='M15.54 12.29c.28-.95 1.91-1.87 3.33-1.87s2.87.84 3.33 1.87' stroke='currentColor' />
      <path
        d='M12.03 11.05v8.18a3 3 0 0 1-2.93 2.93h-.46a2.8 2.8 0 0 1-2.78-2.78'
        stroke='currentColor'
      />
    </svg>
  )
}
