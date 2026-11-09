import type { Icon } from './types'

export const IconPencilOff: Icon = ({
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
      data-slot='icon-ui-pencil-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M17.68 7.8c.67.66 1 1 1.42 1s.74-.34 1.41-1l.83-.83c.66-.67 1-1 1-1.42s-.34-.74-1-1.41l-1.48-1.47c-.66-.67-1-1-1.41-1s-.75.33-1.41 1l-.83.82c-.66.67-1 1-1 1.42s.34.74 1 1.41z'
        fill='currentColor'
      />
      <path d='m19.11 9.07-4.16-4.16' stroke='currentColor' />
      <path
        d='m9.98 9.8-6.26 6.24c-.35.36-.53.53-.66.74-.12.21-.2.45-.34.92h0l-.46 1.5c-.48 1.58-.73 2.37-.3 2.8.42.42 1.2.18 2.79-.3l1.52-.46h0c.47-.14.71-.2.92-.33s.39-.3.74-.65l6.3-6.2'
        stroke='currentColor'
      />
      <path
        d='m11.9 7.89 4.8-4.8c.69-.67 1.03-1.01 1.41-1.16a2 2 0 0 1 1.48 0c.38.15.72.49 1.4 1.17h0c.69.69 1.03 1.03 1.19 1.42A2 2 0 0 1 22.17 6c-.16.39-.5.73-1.2 1.41l-4.8 4.74'
        stroke='currentColor'
      />
      <path d='m2.74 2.45 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
