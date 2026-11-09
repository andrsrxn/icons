import type { Icon } from './types'

export const IconBarricade: Icon = ({
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
      data-slot='icon-ui-barricade'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m2.23 15.7 3.6-8.4a1 1 0 0 0-.97-1.4l-1.88.07A1 1 0 0 0 2 7l.16 9.03a1 1 0 0 1 .06-.32'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m21.5 6.79-3.58 8.4a1 1 0 0 0 .95 1.4l1.9-.08a1 1 0 0 0 .95-1.02l-.15-9.03a1 1 0 0 1-.07.33'
        fill='currentColor'
      />
      <path opacity='.2' d='M12.54 16.45 17.02 5.6h-5.74l-4.3 10.85z' fill='currentColor' />
      <path
        d='M7.17 16.64h9.66c2.29 0 3.44 0 4.23-.59a3 3 0 0 0 .62-.61c.6-.8.6-1.95.6-4.24v0c0-2.3 0-3.44-.6-4.24a3 3 0 0 0-.62-.61c-.8-.6-1.94-.6-4.23-.6H7.17c-2.29 0-3.44 0-4.23.6a3 3 0 0 0-.62.61c-.6.8-.6 1.95-.6 4.24v0c0 2.3 0 3.44.6 4.24a3 3 0 0 0 .62.61c.8.6 1.94.6 4.23.6'
        stroke='currentColor'
      />
      <path d='M6.44 16.74v2.9' stroke='currentColor' />
      <path d='M17.56 16.74v2.9' stroke='currentColor' />
      <path d='m6.44 5.84-3.93 9.53' stroke='currentColor' />
      <path d='M11.37 5.84 7.2 16.44' stroke='currentColor' />
      <path d='m16.6 5.84-4.23 10.8' stroke='currentColor' />
      <path d='m21.54 7.13-3.98 9.51' stroke='currentColor' />
    </svg>
  )
}
